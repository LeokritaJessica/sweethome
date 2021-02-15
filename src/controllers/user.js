//Import data
const bcrypt = require("bcrypt");
const userService = require("../services/user");

//Modules exports
module.exports = {
  browse: async (req, res) => {
    const { page = 1 } = req.query;
    try {
      const user = await userService.find(page);

      //get total documents
      const pageInfo = await userService.getPagination(page);
      res.status(200).send({ data: user, ...pageInfo });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  read: async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.findId(id);

      res.status(200).send({ data: user });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  edit: async (req, res) => {
    try {
      const { firstname, lastname, email, password } = req;
      const { id } = req.params;
      //hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(body.password, salt);

      const userData = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        password: hashedPass,
      };

      const editUser = await userService.edit(id, userData);
      res.status(200).send({ message: "Update user Success", data: editUser });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  delete: async (req, res) => {
    try {
      const { id } = req.params;

      const deleteUser = await userService.delete(id);

      res
        .status(200)
        .send({ message: "Delete user Success", data: deleteUser });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
