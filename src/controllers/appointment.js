//Import data
// const bcrypt = require("bcrypt");
const appointmentService = require("../services/appointment");

//Modules exports
module.exports = {
  add: async (req, res) => {
    try {
      const { body } = req;

      //create new add
      const appointment = { ...body };
      const saveTimeslot = await appointmentService.add(appointment);
      res.send(saveTimeslot);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
