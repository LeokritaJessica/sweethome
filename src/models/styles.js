//Import dependencies
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Table
const styleSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "name is required"],
      minlength: 3,
      maxlength: 255,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    collection: "style",
  }
);

//Export modules
module.exports = mongoose.model("style", styleSchema);
