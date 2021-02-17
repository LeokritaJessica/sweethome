//Import data
const bcrypt = require("bcrypt");
const userService = require("../services/user");

//Modules exports
module.exports = {
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
