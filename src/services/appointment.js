//Import model
const { userModel,appointmentModel } = require("../models");

//Module exports
module.exports = {
  add: async (appointment) => {
    const user = await userModel.findById(appointment.user)
    const s = new appointmentModel(appointment);

    user.appointment.push(s);
    await user.save();
    return await s.save();
  },
};
