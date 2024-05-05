const express = require('express')
const {
    register,
    login,
    validuser,
    logout,
    sendPasswordLink,
    forgotPassword,
    changePassword,
    getAllUsers,
    editUser,
    deleteUser,
    getAUser,
    
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
router.get('/getallusers',getAllUsers);
router.patch('/edituser/:userId',editUser);
router.delete('/deleteuser/:email',deleteUser);
router.get('/getauser/:userId', getAUser)

module.exports=router;