const mongoose = require("mongoose");

// this is chetan 
const userScheam = mongoose.Schema({
  fullname: {
    type:String,
    minLength:3,
    trim:true,
  },
  email: String,
  password: String,
  cart: {
    type: Array,
    default: [],
  },
  isadmin: Boolean,
  orders: {
    type: Array,
    default: [],
  },
  contact: Number,
  picture: String,
});

module.exports = mongoose.model("user", userScheam);
