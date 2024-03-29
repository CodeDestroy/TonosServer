const Router = require('express');
const router = new Router();

const AuthController = require('../Controllers/AuthController')

router.post('/login', AuthController.login);
router.post('/registration', AuthController.registration);
//router.post('/registrationPatient', AuthController.registrationPatient);
router.post('/logout', AuthController.logout);
router.get('/refresh', AuthController.refresh);

router.post('/getDoctorByUserId', AuthController.getDoctorByUserId); 

module.exports = router;
