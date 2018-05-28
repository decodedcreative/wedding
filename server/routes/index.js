const express = require('express');
const router = express.Router();
const guestController = require('../controllers/guestController');
const { catchErrors } = require('../handlers/errorHandlers');

router.get('/', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.post('/api/upload-guestlist', (req, res) => {
  console.log('upload');
});

// router.post('/upload-guestlist', 
//   guestController.uploadGuestListFile,
//   catchErrors(guestController.getNamesFromFile),
//   catchErrors(guestController.addGuestsToDB),
// );

module.exports = router;