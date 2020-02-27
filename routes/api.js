// Requiring our models and passport as we've configured it
var db = require("../models");
// var passport = require("../config/passport");

module.exports = function(app) {
  // Post route for saving new exercises to Workouts table
  app.post("/api/workouts", function(req, res) {
    if (req.body.name === db.Workouts.body) {
      return res.status(400).send({
        message: "This person already in Database"
      });
    }
    db.Workouts.create({
      name: req.body.name
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get route
  app.get("/api/workouts/:name", function(req, res) {
    db.Workouts.findOne({
      where: {
        body: req.params.body
      },
      include: {
        model: db.Exersice,
        include: [db.User]
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // // This workouts with sign-up
  app.post("/api/exersice", function(req, res) {
    if (!req.session.user) {
      return res.status(400).send({
        message: "You should be logged in before you can leave a comment"
      });
    }
    if (!req.body.body) {
      return res.status(400).send({
        message: "Body shouldn't be empty!"
      });
    }
    db.Exersice.create({
      name: req.body.name,
      PersonId: req.body.PersonId,
      UserId: req.session.user.id
    }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  //##################################################
  app.post("/api/create-user", function(req, res) {
    if (!req.body.email || !req.body.password || !req.body.nickname) {
      req.session.error = "Please fill all inputs";
      res.redirect("/signup");
    }
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(exist => {
      if (exist) {
        req.session.error = "Such user alread exist";
        res.redirect("/signup");
      } else {
        db.User.create({
          email: req.body.email,
          password: req.body.password,
          nickname: req.body.nickname
        }).then(result => {
          delete result.password;
          req.session.user = result;
          res.redirect("/");
        });
      }
    });
  });

  app.post("/api/login", function(req, res) {
    if (!req.body.email || !req.body.password) {
      req.session.error = "Please fill all inputs";
      res.redirect("/login");
    }
    db.User.findOne({
      where: {
        email: req.body.email
      }
    }).then(exist => {
      if (!exist) {
        req.session.error = "User Doesn't exist";
        res.redirect("/login");
      } else if (!exist.validPassword(req.body.password)) {
        req.session.error = "Incorrect password";
        res.redirect("/login");
      } else {
        delete exist.password;
        req.session.user = exist;
        res.redirect("/");
      }
    });
  });

  app.get("/logout", function(req, res) {
    delete req.session.user;
    res.redirect("/login");
  });
};
