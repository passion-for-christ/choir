const factory = require('./handlerFactory');

const SignUp = require('../models/signUp.model');

exports.create = factory.createOne(SignUp);
exports.getOne = factory.getOne(SignUp);
exports.getAll = factory.getAll(SignUp);
exports.update = factory.updateOne(SignUp);
exports.delete = factory.deleteOne(SignUp);