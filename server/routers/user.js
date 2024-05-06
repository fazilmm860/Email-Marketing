const express = require('express')
const {
    register,
    login,
    validuser,
    logout,
    sendPasswordLink,
    forgotPassword,
    changePassword,
    
    
}=require('../controllers/user');
const authenticate = require('../middleware/authenticate');

const router=express.Router();

router.post('/register',register);
router.post('/login',login);
router.get('/validuser',authenticate, validuser);
router.get('/logout',authenticate, logout);
router.post('/sendpasswordlink',sendPasswordLink);
router.get('/forgotpassword/:id/:token',forgotPassword);
router.post('/:id/:token',changePassword);


module.exports=router;