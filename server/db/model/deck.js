const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DeckSchema = new Schema({
  _id: Number,
  name: String,
  format: String,
  commander: String,
  cards: [
    {
      id: mongoose.Types.ObjectId,
      oracle_id: mongoose.Types.ObjectId,
      multiverse_ids: [
        Number,
      ],
      name: String,
      lang: String,
      uri: String,
      scryfall_uri: String,
      layout: String,
      highres_image: Boolean,
      image_uris: {
        small: String,
        normal: String,
        large: String,
        png: String,
        art_crop: String,
        border_crop: String,
      },
      mana_cost: String,
      cmc: Number,
      type_line: String,
      oracle_text: String,
      power: String,
      toughness: String,
      colors: [
        String,
      ],
      color_indicator: [
        String,
      ],
      color_identity: [
        String,
      ],
      keywords: [
        String,
      ],
      legalities: {
        standard: String,
        historic: String,
        modern: String,
        legacy: String,
        pauper: String,
        vintage: String,
        commander: String,
        brawl: String,
      },
      foil: Boolean,
      nonfoil: Boolean,
      promo: Boolean,
      set: String,
      set_name: String,
      rarity: String,
      card_back_id: mongoose.Types.ObjectId,
      artist: String,
      artist_ids: [
        mongoose.Types.ObjectId,
      ],
      illustration_id: mongoose.Types.ObjectId,
    },
  ],
});

const Deck = mongoose.model('Deck', DeckSchema, 'deck');

module.exports = {
  Deck,
};
