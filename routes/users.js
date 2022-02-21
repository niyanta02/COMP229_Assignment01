//var express = require('express');
//var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

//module.exports = router;

var express = require('express');
var router = express.Router();
let userController = require('../controllers/user')

/* GET users listing. */
router.get('/', userController.user);

/* GET users listing. */
router.get('/niyanta', userController.niyanta);

// Sign-up
router.get('/signup', userController.renderSignup);
router.post('/signup', userController.signup);

// Sign-in
router.get('/login', userController.renderSignin);
router.post('/login', userController.signin);

// Sign out
router.get('/signout', userController.signout);

module.exports = router;

