const router = require("express").Router();
const exerciseController = require("../../controllers/exerciseController"); // Haven't created yet "exerciseController"

// Matches with "/api/exercises"
router
  .route("/")
  .get(exerciseController.findAll)
  .post(exerciseController.create);

// /api/login
router.route("/").post(loginController.login);

// Matches with "/api/:user"
// Will need to correct
// app.post("/api/create-user", function(req, res) {
//     if (!req.body.email || !req.body.password || !req.body.nickname) {
//       req.session.error = "Please fill all inputs";
//       res.redirect("/signup");
//     }
//     db.User.findOne({
//       where: {
//         email: req.body.email
//       }
//     }).then(exist => {
//       if (exist) {
//         req.session.error = "Such user alread exist";
//         res.redirect("/signup");
//       } else {
//         db.User.create({
//           email: req.body.email,
//           password: req.body.password,
//           nickname: req.body.nickname
//         }).then(result => {
//           delete result.password;
//           req.session.user = result;
//           res.redirect("/");
//         });
//       }
//     });
//   });

//   app.post("/api/login", function(req, res) {
//     if (!req.body.email || !req.body.password) {
//       req.session.error = "Please fill all inputs";
//       res.redirect("/login");
//     }
//     db.User.findOne({
//       where: {
//         email: req.body.email
//       }
//     }).then(exist => {
//       if (!exist) {
//         req.session.error = "User Doesn't exist";
//         res.redirect("/login");
//       } else if (!exist.validPassword(req.body.password)) {
//         req.session.error = "Incorrect password";
//         res.redirect("/login");
//       } else {
//         delete exist.password;
//         req.session.user = exist;
//         res.redirect("/");
//       }
//     });
//   });

//   app.get("/logout", function(req, res) {
//     delete req.session.user;
//     res.redirect("/login");
//   });
// };

// Matches with "/api/exercise/:id"
router
  .route("/:id")
  .get(exerciseController.findById)
  .put(exerciseController.update)
  .delete(exerciseController.remove);

module.exports = router;
