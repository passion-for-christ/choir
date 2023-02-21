const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Catching uncaught exception
// process.on('uncaughtException', err => {
//     console.log('UNCAUGHT EXCEPTION! Shutting down...');
//     console.log(err.name, err.message);
//     process.exit(1);
// });

dotenv.config({ path: './config.env' });

let DB;
DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('DB Connection successful!'));

const app = require('./app');

const { PORT } = process.env || 80;
const server = app.listen(PORT, () =>
    console.log(`Server running on port: ${PORT} in ${process.env.NODE_ENV.toUpperCase()}...`)
);

// Handle all unhandled promise rejection errors outside of express.
// process.on('unhandledRejection', err => {
//     console.log('UNHANDLED REJECTION! Shutting down...');
//     console.log(err.name, err.message);
//     server.close(() => {
//         process.exit(1);
//     });
// });

// Handle SIGTERM signal send by HEROKU every 24h to restart our server
// process.on('SIGTERM', () => {
//     console.log('SIGTERM RECEIVED. SHutting down gracefully.');
//     server.close(() => {
//         console.log('Process terminated!');
//     });
// });