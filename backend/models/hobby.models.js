const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hobbySchema = new Schema({
    username: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  }, {
    timestamps: true,
  });

  const Hobby = mongoose.model('Hobby', hobbySchema);

  module.exports = Hobby;
