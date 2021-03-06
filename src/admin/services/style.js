//Import model
const {stylesModel} = require('../../models');

//Module exports
module.exports = {
  find: async (page, limit) => {
    return await stylesModel
      .find()
      .limit(limit)
      .skip((page - 1) * limit)
      .exec();
  },
  findId: async (id) => {
    return await stylesModel.findById(id);
  },
  add: async (styleData) => {
    const style = new stylesModel(styleData);
    return await style.save();
  },
  edit: async (id, styleData) => {
    return await stylesModel.findByIdAndUpdate(id, styleData, { new: true });
  },
  delete: async (id) => {
    return await stylesModel.findByIdAndDelete(id);
  },
  getPagination: async (page, limit) => {
    const totalItem = await stylesModel.countDocuments();
    const activePage = page;
    const totalPage = Math.ceil(totalItem / limit);

    return { totalItem, activePage, totalPage };
  },
};