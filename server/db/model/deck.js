const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  _id: Number,
  name: String,
});

const Deck = mongoose.model('Deck', DeckSchema, 'deck');

module.exports = {
  Deck,
};
