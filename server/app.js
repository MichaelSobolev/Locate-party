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
// For cool error page
const createError = require('http-errors');

// ------------------------- //
// Connecting routers
const indexRouter = require('./src/routes/index.router');

// ------------------------- //
// Starting a server
const app = express();
const PORT = process.env.PORT || 3001

// ------------------------- //
// Express settings
// morgan (TODO выпилить на релизе)
app.use(morgan('dev'));
app.use(cors({origin:true,credentials:true}))

// Specify static folder
app.use(express.static(path.join(process.env.PWD, 'public')));
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
app.use(session(sessionConfig))

// ------------------------- //
// Session middlware for authorization
// app.use(async (req, res, next) => {
//  // Here locals could be fiiled
//  //res.locals.variable
//  if (req.session.userId) {
//    res.locals.userId = req.session.userId
//  }
//  next()
// })

// ------------------------- //
// Routing
app.use('/', indexRouter);


// ------------------------- //

app.listen(PORT, () => console.log('Server is running on port', PORT));

