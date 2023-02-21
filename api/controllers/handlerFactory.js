const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');
const APIFeatures = require('../utils/apiFeatures');
const { decrypt } = require('../utils/crypto');

exports.deleteOne = Model => catchAsync(async (req, res, next) => {
    let doc;
    try {
        doc = await Model.findByIdAndDelete(req.params.id);
    } catch (err) {
        return next(new AppError('Not a valid document ID.', 422));
    }

    if (!doc) {
        return next(new AppError('No document found with that ID.', 404));
    }

    res.status(200).json({ status: 'success', data: null });
});

exports.updateOne = Model => catchAsync(async (req, res, next) => {
    let doc;
    try {
        doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            // runValidators: true,
        });
    } catch (err) {
        return next(new AppError('Not a valid document ID.', 422));
    }

    if (!doc) {
        return next(new AppError('No document found with that ID.', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            doc,
        },
    });
});

exports.createOne = Model => catchAsync(async (req, res, next) => {
    // const newCompany = new Company({});
    // newCompany.save();

    // console.log('HERE', req.body);

    const doc = await Model.create(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

exports.getOne = (Model, popOptions) => catchAsync(async (req, res, next) => {
    // console.log(req.body);

    let doc;
    if (popOptions) {
        doc = await Model.findOne({ _id: req.params.id }).populate(popOptions).exec();
    } else {
        doc = await Model.findOne({ _id: req.params.id });
    }

    if (!doc) {
        return next(new AppError('No document found with that ID.', 404));
    }

    res.status(200).json({
        status: 'success',
        data: {
            data: doc,
        },
    });
});

exports.getAll = Model => catchAsync(async (req, res, next) => {
    let filter = {};
    
    // ? I don't see necessity in having this... what is "company" and in what context would you use it as a filter?
    //// if (req.params.companyId) filter = { company: req.params.companyId };

    const features = new APIFeatures(Model.find(filter), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();

    const count = await Model.count();
        
    const doc = await features.query;

    res.status(200).json({
        status: 'success',
        totalDocs: count,
        results: doc.length,
        data: {
            data: doc,
        },
    });
});