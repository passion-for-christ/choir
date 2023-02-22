const express = require('express');
const signUpController = require('../controllers/signUp.controller');

const router = express.Router();

router.route('/')
    .post(signUpController.create);

router.route('/')
    .get(signUpController.getAll)


router.route('/:id')
    .get(signUpController.getOne)
    .patch(signUpController.update)
    .delete(signUpController.delete);

module.exports = router;