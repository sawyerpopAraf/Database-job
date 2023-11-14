var express = require('express');
var passport = require('passport');
var LocalStrategy = require('passport-local');
var crypto = require('crypto');
var db = require("../models");
var UserService = require("../service/UserService")
var userService = new UserService(db);

passport.use(new LocalStrategy(function verify(username, password, cb) {
  userService.getOneByName(username).then((user) => {
    if (user === null) {
      return cb(null, false, { message: 'Incorrect username or password.' });
    }
    
    // Split the stored password into the salt and the hashed part
    const [salt, storedHashedPassword] = user.Password.split('$');
    
    // Hash the incoming password with the same salt
    crypto.pbkdf2(password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
      if (err) { return cb(err); }
      
      // Compare the hashed password with the stored hashed password
      if (hashedPassword.toString('hex') !== storedHashedPassword) {
        return cb(null, false, { message: 'Incorrect username or password.' });
      }
      
      // If the passwords match, proceed with the login process
      return cb(null, user);
    });
  }).catch(err => cb(err));
}));



passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.UserName,role:user.Role });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});

var router = express.Router();
router.get('/login', function(req, res, next) {
  res.render('login', { user: req.user });
});


router.post('/login/password', passport.authenticate('local', {
  successReturnToOrRedirect: '/',
  failureRedirect: '/login',
  failureMessage: true
}));

router.get('/logout', function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect('/');
  });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup', function(req, res, next) {
  const fullname = req.body.firstname + " " + req.body.lastname;
  const salt = crypto.randomBytes(16).toString('hex'); 

  crypto.pbkdf2(req.body.password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
    if (err) { return next(err); }
    const passwordCombined = `${salt}$${hashedPassword.toString('hex')}`;
    
    userService.create(fullname, req.body.username, passwordCombined, 'member')
      .then(() => {
        res.redirect('/login');
      })
      .catch(error => {
        if (error.message === 'User already exists') {
          res.status(409).json({ error: 'Username already exists. Please choose a different one.' });
          
        } else {
          next(error);
        }
      }); 
  });
});


module.exports = router;