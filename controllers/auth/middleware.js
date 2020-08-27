const expressJwt = require("express-jwt");
const User = require("../../models/user");
const AppError = require("../../utils/appError");

exports.requireSignin = expressJwt({
  secret: process.env.JWT_SECRET,
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['admin', 'security']. role='subscriber'
    User.findById({ _id: req.user._id }).exec((err, user) => {
      if (err || !user) {
        return next(new AppError("User not found", 404));
      }

      if (!roles.includes(user.role)) {
        return next(
          new AppError("You do not have permission to perform this action", 403)
        );
      }
      next();
    });
  };
};
