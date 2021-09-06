const mongoose = require("mongoose");

const WineSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: false
  },
  vintage: {
    type: Number,
    required: false,
  },
  grape: {
    type: String,
    required: true,
  },
  vinyard: {
    type: String,
    required: false,
  },
  region: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  aromas: [
    // description e.g: berries, herbs, earthy
    { type: String, required: true },
  ],
  body: {
    // true is full
    type: String,
    required: true,
  },
  sweetness: {
    // false is dry
    type: String,
    required: true,
  },
  acidity: {
    // true is high acidity(sour)
    type: String,
    required: true,
  },
  tannins: {
    // high tannin is true(tannins present or round)
    type: String,
    required: true,
  },
  alcohol: {
    // ABV high or low(+15% is high)
    type: String,
    required: false,
  },
});

// eslint-disable-next-line no-undef
module.exports = Wine = mongoose.model("wine", WineSchema);
