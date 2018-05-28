const mongoose = require('mongoose');
const { promisify } = require('util');
const multer = require('multer');
const uuidv4 = require('uuidv4');
const path = require('path');
const convertExcel = promisify(require('excel-as-json').processFile);
const Guest = mongoose.model('Guest');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads')
  },
  filename: (req, file, cb) => {
    const newFilename = `${uuidv4()}${path.extname(file.originalname)}`;
    cb(null, newFilename)
  },
});

const checkExistingGuest = async (firstname, surname) => Guest.findOne({ firstname, surname });

exports.uploadGuestListFile = multer({ storage }).single('file');

exports.getNamesFromFile = async (req, res, next) => {
  const guestData = await convertExcel(req.file.path, null, null);
  req.guestlist = guestData.map(guestObj => Object.values(guestObj)[0]);
  next();
};

exports.addGuestsToDB = async (req, res, next) => {
  const guests = req.guestlist;
  for (let guest of guests) {
    const guestFirstName = guest.split(" ")[0];
    const guestSurname = guest.split(" ")[1];
    const existingGuest = await checkExistingGuest(guestFirstName, guestSurname);

    if (existingGuest === null){
      const guestToAdd = await (new Guest({
        firstname: guestFirstName,
        surname: guestSurname
      }).save());
      await guestToAdd.save();
    }
  }
  res.redirect('back');
};

exports.getGuestList = async (req, res) => {
  const guests = await Guest.find();
  res.json(guests);
};

