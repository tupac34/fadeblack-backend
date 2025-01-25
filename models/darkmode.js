const mongoose = require('mongoose');

const darkModeSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  isDarkMode: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });

module.exports = mongoose.model('DarkMode', darkModeSchema);
