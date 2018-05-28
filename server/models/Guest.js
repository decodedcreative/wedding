const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const guestSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: 'Please provide the first name of the guest',
    trim: true,
  },
  surname: {
    type: String,
    required: 'Please provide the surname of the guest',
    trim: true,
  },
  attending: {
    type: String,
    default: 'Awaiting RSVP',
  },
  menu: {
    type: String,
    default: 'Awaiting RSVP',
  },
  allergies: {
    type: String,
    default: 'Awaiting RSVP',
  },
  table: {
    type: mongoose.Schema.ObjectId,
    ref: 'Table',
  },
});

module.exports = mongoose.model('Guest', guestSchema);