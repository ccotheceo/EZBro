const router = require("express").Router();
const db = require("../models");

module.exports = function(app) {
  app.post("/api/workouts", function(req, res) {
    // I'm not sure if I need to check for existing workout???
    // if (req.body.name === db.Workouts.body) {
    //   return res.status(400).send({
    //     message: "This workout already in Database"
    //   });
    // }
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
        message: "You should be logged in before you can add exercises"
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
  // Create a user tested with POSTMAN
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
