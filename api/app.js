const path = require('path');
const express = require('express');
const rateLimit = require('express-rate-limit');
const mongoSanitize = require('express-mongo-sanitize');
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const hpp = require('hpp');
const cookieParser = require('cookie-parser');
const compression = require('compression');
const cors = require('cors');

// const util = require('util');
// const moment = require('moment');

const AppError = require('./utils/appError');

const signUpRouter = require('./routes/signUp.routes');

const globalErrorHandler = require('./controllers/errorController');

const app = express();

app.enable('trust proxy');

// Cors can also be added in the middleware stack to allow only that route to be accessed
// For all websites
app.use(cors());

// For specific website
// app.use(
//     cors({
//         origin: 'http://localhost:3000'
//     })
// );

// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE')
//     next();
// })

// Options is a method that we can respond to
// Enable cors for PUT, PATCH & DELETE
app.options('*', cors());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Set Security HTTP Headers
app.use(helmet());

// Development Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Limit requests from same API
const limiter = rateLimit({
    max: 1000,
    windowMs: 60 * 60 * 1000,
    message: 'Too many requests from this IP, please try again later.',
});

app.use('/api', limiter);

// Body Parser, Cookie Parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());

// Data Sanitization against NoSQL query injection
app.use(mongoSanitize());

// Data Sanitization against XSS (cross site scripting attacks)
app.use(xss());

// Prevent parameter pollution
app.use(
    hpp({
        whitelist: ['industry', 'budget', 'platforms', 'createdAt'],
    }),
);

app.use(compression());

// Testing custom middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    next();
});

app.use('/api/v1/sign-up', signUpRouter);

// Catch All
app.all('*', (req, res, next) => {
    next(new AppError(`Content not found: ${req.originalUrl}`, 404));
});

// Error Handler Middleware
app.use(globalErrorHandler);

module.exports = app;