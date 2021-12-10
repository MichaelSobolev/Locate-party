/* eslint-disable no-console */

// ------------------------- //
// Connecting dependencies
const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config()
// ------------------------- //
// Connecting routers
const indexRouter = require('./src/routes/index.router');

// ------------------------- //
// Create an app
const app = express();

// ------------------------- //
// Express settings
// HBS
app.set('view engine', 'hbs');
app.set('views', path.join(process.env.PWD, 'src', 'views'));
// morgan (TODO выпилить на релизе)
app.use(morgan('dev'));
app.use(cors())
// for react:
// app.use(cors({origin:true,credentials:true}))

// Query encoders
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ------------------------- //
// Session settings
const sessionConfig = {
 store: new FileStore(),
 key: 'sid', // Cookie name
 secret: 'gchjtghasdjkl;bjkll',//key
 resave: false,
 saveUninitialized: false,
 httpOnly: true,
 cookie: { expires: 180 * 24 * 60 * 60e3 },
}

const sessionParser = session(sessionConfig)
app.use(sessionParser)

// ------------------------- //
// Routing
app.use('/', indexRouter);

// ------------------------- //

// app.listen(PORT, () => console.log('Server is running on port', PORT));

module.exports = { app, sessionParser }

