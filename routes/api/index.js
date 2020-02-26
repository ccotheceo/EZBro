const router = require("express").Router();
const exerciseRoutes = require("./exercise");

// Book routes
router.use("/exercise", exerciseRoutes);
//router.use("/comments", commentRoutes);
module.exports = router;
