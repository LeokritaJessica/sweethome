//Import data
const model = require("../models");

//Module exports
module.exports = {
  find: async (page) => {
    return await model.userModel
      .find()
      .limit(10)
      .skip((page - 1) * 10)
      .exec();
  },
  findId: async (id) => {
    return await model.userModel.findById(id);
  },
  edit: async (id, userData) => {
    return await model.userModel.findByIdAndUpdate(id, userData, { new: true });
  },
  delete: async (id) => {
    return await model.userModel.findByIdAndDelete(id);
  },
  getPagination: async (page) => {
    const totalItem = await model.userModel.countDocuments();
    const activePage = page;
    const totalPage = Math.ceil(totalItem / 10);

    return { totalItem, activePage, totalPage };
  },
};
