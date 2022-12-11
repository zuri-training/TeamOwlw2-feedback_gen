const AppUser = require("../model/appUser");
const { createJWT } = require("../config/jwt.config");
const { StatusCodes } = require("http-status-codes");

const userSignUp = async (req, res) => {
  const user = await AppUser.create({ ...req.body });
  const jwt = createJWT(user);

  res
    .status(StatusCodes.CREATED)
    .json({ success: true, data: { name: user.fullName }, jwt });
};


module.exports = { userSignUp }