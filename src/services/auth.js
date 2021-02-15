  //Import data
const model = require("../models");

//Module exports
module.exports = {
  findEmail: async (email) => {
    return await model.userModel.findOne({email})
  },
  register: async (userData) => {
    //Create new user
    const user = new model.userModel(userData);
    return await user.save();
  },
};
