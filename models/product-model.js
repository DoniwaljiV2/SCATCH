const mongoose = require("mongoose");

const productScheam = mongoose.Schema({
  image: String,
  name: String,
  discout: {
    type: Number,
    default: 0,
  },
  bgcolor: String,
  panelcolor: String,
  textcolor: String,
});

module.exports = mongoose.model("product", productScheamScheam);
