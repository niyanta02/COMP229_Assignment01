let express = require('express');
let router = express.Router();

let inventoryController = require('../controllers/inventory');
//authen
function requireAuth(req, res, next)

{

    // check if the user is logged in

    if(!req.isAuthenticated())

    {

        req.session.url = req.originalUrl;

        return res.redirect('/users/login');

    }

    next();

}
/* GET users listing. */
router.get('/list',requireAuth, inventoryController.list);

// Get method to Render the Add Items Page
router.get('/add', requireAuth,inventoryController.displayAddPage);
// Post method to handle the Add Items process
router.post('/add',requireAuth, inventoryController.processAddPage);

// Get method to Render the Edit Items Page
router.get('/edit/:id',requireAuth, inventoryController.displayEditPage);
// Post method to handle the Edit Items process
router.post('/edit/:id',requireAuth, inventoryController.processEditPage);

// Precess Delete items
router.get('/delete/:id',requireAuth, inventoryController.performDelete);

module.exports = router;