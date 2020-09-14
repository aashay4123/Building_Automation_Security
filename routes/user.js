const express = require("express");
const router = express.Router();

const userController = require("../controllers/user");
const { requireSignin, restrictTo } = require("../controllers/auth/middleware");

router.use(requireSignin);

router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.patch("/updateMyPassword", userController.updatePassword);
router.get("/me", userController.getMe, userController.getUser);

router.delete("/deleteMe", userController.deleteMe);

router.use(restrictTo("admin"));

router.route("/").get(userController.getAllUsers);

router
  .route("/:id")
  .get(userController.getUser)
  .patch(userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
