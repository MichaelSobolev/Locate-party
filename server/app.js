/* eslint-disable no-console */

// ------------------------- //
// Connecting dependencies
require("dotenv").config();
const express = require("express");
const cookieParser = require('cookie-parser');
const ws = require('ws');
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const cookieSession = require("cookie-session");
const session = require('express-session');
const passport = require("passport");
require("./passport.js");
const http = require("http");
const redis = require('redis');
const redisClient = redis.createClient();
const RedisStore = require('connect-redis')(session);

require("dotenv").config();
// ------------------------- //
// Connecting routers
const indexRouter = require("./src/routes/index.router");
const authRoute = require("./src/routes/auth");
const postsRouter = require("./src/routes/posts.router");
const userRouter = require("./src/routes/userRouter");
const newsRouter = require("./src/routes/news.router");
const playersRouter = require("./src/routes/players.router");

// ------------------------- //
// Create an app
const app = express();

// ------------------------- //
// Express settings
// HBS

app.use(morgan("dev"));


// Query encoders
console.log(process.env.CLIENT_URL);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ------------------------- //
// Session settings

const sessionParser = cookieSession({
  // FIXME
  name: "session",
  keys: ["lama"],
  maxAge: 24 * 60 * 60 * 100,
});
app.use(sessionParser);

app.use(passport.initialize());
app.use(passport.session());

const wss = new ws.Server({ port: 3090 });
wss.on('connection', (ws) => { // обработчик события "соединение установлено"
  // console.log(wss.clients);
  ws.on('message', async (data) => { // обработчик события "пришло сообщение"
    const decodedMessage = JSON.parse(data);
    console.log(decodedMessage);
    //const message = await Message.create({ text: decodedMessage.text }); // db create message
    // ws.send(JSON.stringify(message));
    wss.clients.forEach((client) => {
      client.send(JSON.stringify(decodedMessage)); // проходим по массиву всех подключенных юзеров и отправляем им сообщени 
    });
  });
});


app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
  })
);

// ------------------------- //
// Routing
app.use("/auth", authRoute);
app.use("/posts", postsRouter);
app.use("/users", userRouter);
app.use("/news", newsRouter);
app.use("/players", playersRouter);
app.use("/", indexRouter);

// ------------------------- //'

app.listen(process.env.PORT, () =>
  console.log("Server is running on port", process.env.PORT)
);
