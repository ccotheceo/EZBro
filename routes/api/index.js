const router = require("express").Router();
const exerciseRoutes = require("./exercise");

// Exercise routes
router.use("/exercise", exerciseRoutes);
//router.use("/comments", commentRoutes);
module.exports = router;
