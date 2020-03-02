const router = require("express").Router();
const db = require("../models");

module.exports = function(app) {
  app.post("/api/workouts", function(req, res) {
    // Do I need to check this?????
    if (req.body.name === db.Workouts.body) {
      return res.status(400).send({
        message: "This workout already in Database"
      });
    }
    db.Workouts.create({
      body: req.body.body,
      date: req.body.date
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // Get route
  app.get("/api/workouts/:body", function(req, res) {
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
  app.post("/api/exercise", function(req, res) {
    if (!req.session.user) {
      return res.status(400).send({
        message: "You should be logged in before you can add exercises"
      });
    }
    db.Exersice.create({
      name: req.body.name,
      PersonId: req.body.PersonId
    }).then(function(dbExercise) {
      res.json(dbExercise);
    });
  });

  // Get route
  app.get("/api/exercise/:id", function(req, res) {
    db.Workouts.findOne({
      where: {
        id: req.params.id
      },
      include: {
        include: [db.User]
      }
    }).then(function(dbProject) {
      res.json(dbProject);
    });
  });

  // ############################
  //  Creating API-routes for ExerciseWorkouts

  //##################################################
  app.post("/api/create-user", function(req, res) {
    if (!req.body.email || !req.body.password) {
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
          name: req.body.name,
          age: req.body.age,
          weight: req.body.weight
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
