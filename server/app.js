/* eslint-disable no-console */

// ------------------------- //
// Connecting dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const passportSetup = require("./passport");
const authRoute = require("./src/routes/auth");

require("dotenv").config();
// ------------------------- //
// Connecting routers
const postsRouter = require('./src/routes/posts.router');
const cookieSession = require("cookie-session");
const passport = require("passport");

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
app.use(cors({
  origin: true,
  methods: "GET, POST, PUT, DELETE",
  credentials: true,
}))

// Query encoders
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ------------------------- //
// Session settings


app.use(
  cookieSession({ // FIXME
    name: "session",
    keys: ["lama"],
    maxAge: 24 * 60 * 60 * 100,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

// ------------------------- //
// Routing
app.use("/auth", authRoute);
app.use('/posts', postsRouter);
// app.use("/", indexRouter);

// ------------------------- //

app.listen(process.env.PORT, () => console.log("Server is running on port", process.env.PORT));

// module.exports = { app };
