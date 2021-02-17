//Import data
const model = require("../models");

//Module exports
module.exports = {
  edit: async (id, userData) => {
    return await model.userModel.findByIdAndUpdate(id, userData, { new: true });
  },
  delete: async (id) => {
    return await model.userModel.findByIdAndDelete(id);
  },
};
