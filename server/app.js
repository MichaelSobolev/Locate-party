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
const { post } = require("./src/routes/index.router");

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

// const wss = new ws.Server({ port: 3090 });
const wss = new ws.Server({ port: 3090 });

const rooms = {}

wss.getUniqueID = function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }
  return s4() + s4() + '-' + s4();
};



wss.on('connection', (ws, req) => { // обработчик события "соединение установлено"
  ws.id = wss.getUniqueID();

  ws.on('message', async (data) => { // обработчик события "пришло сообщение"
    const decodedMessage = JSON.parse(data);
    const { post_id, wssUserId } = decodedMessage
    //const message = await Message.create({ text: decodedMessage.text }); // db create message
    if (wssUserId) {

      wss.clients.forEach((client) => {
        decodedMessage.wssUserId = client.id;
        const message = (JSON.stringify(decodedMessage))
        if (rooms[post_id] && !(rooms[post_id].includes({ wssId: wssUserId }))) {
          rooms[post_id] = [...rooms[post_id], { wssId: wssUserId, client }]
        }
        if (!rooms[post_id]) {
          rooms[post_id] = [{ wssId: wssUserId, client }]
        }
      });
      console.log(rooms);
      rooms[post_id].forEach(({ client }) => {
        decodedMessage.wssUserId = client.id;
        const message = (JSON.stringify(decodedMessage))
        client.send(message)
      })
    } else {
      wss.clients.forEach((client) => {
        decodedMessage.wssUserId = client.id;
        const message = (JSON.stringify(decodedMessage))
        client.send(message)
      })
    }
  })
})



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
