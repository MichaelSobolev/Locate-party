/* eslint-disable no-console */

// ------------------------- //
// Connecting dependencies
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const cookieSession = require("cookie-session");
const passport = require("passport");
// const session = require("express-session");
// const FileStore = require("session-file-store")(session);
// const passportSetup = require("./passport");



require('dotenv').config();
// ------------------------- //
// Connecting routers
const indexRouter = require("./src/routes/index.router");
const authRoute = require("./src/routes/auth");
const postsRouter = require("./src/routes/posts.router");
const userRouter = require("./src/routes/userRouter");
const newsRouter = require("./src/routes/news.router");
const playersRouter = require("./src/routes/players.router")


// ------------------------- //
// Create an app
const app = express();

// ------------------------- //
// Express settings
// HBS
app.set("view engine", "hbs");
app.set("views", path.join(process.env.PWD, "src", "views"));
// morgan (TODO выпилить на релизе)
app.use(morgan("dev"));
// app.use(
//   cors({
//     origin: true,
//     methods: "GET, POST, PUT, DELETE",
//     credentials: true,
//   })
//   );

// Query encoders
console.log(process.env.CLIENT_URL)
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ------------------------- //
// Session settings
const sessionParser = cookieSession({
  // FIXME
  name: "session",
  keys: ["lama"],
  maxAge: 24 * 60 * 60 * 100,
})

app.use(
  sessionParser
);
app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    methods: 'GET, POST, PUT, DELETE',
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

// ------------------------- //

// TODO Включить!
app.listen(process.env.PORT, () =>
  console.log("Server is running on port", process.env.PORT)
);
// TODO Включить!


// const { createServer } = require('http') // Веб - соктеы только с http сервером
// const WebSocket = require('ws') // Достаём веб-сокеты
// const { app, sessionParser } = require('./app')

// const PORT = process.env.PORT ?? 3002
// const server = createServer(app)

// const wss = new WebSocket.Server({ clientTracking: false, noServer: true })

// const map = new Map() // Сюда закидываются все юзеры сокета

// // Handshake
// server.on('upgrade', (request, socket, head) => {
//   console.log('Parsing session from request...')

//   sessionParser(request, {}, () => { // проверяем user id в сессии
//     if (!request.session.userId) {
//       socket.write('HTTP/1.1 401 Unauthorized\r\n\r\n')
//       socket.destroy()
//       return
//     }

//     console.log('Session is parsed!')

//     // switch from http to ws
//     wss.handleUpgrade(request, socket, head, (ws) => {
//       wss.emit('connection', ws, request)
//     })
//   })
// })

// wss.on('connection', (ws, request) => {
//   const { userId, userName } = request.session
//   map.set(userId, ws)
//   ws.on('message', async (message) => {
//     //
//     // Here we can now use session parameters.
//     //

//     const parsed = JSON.parse(message)

//     switch (parsed.type) {
//       // case 'NEW_MESSAGE':
//       //   console.log('message on back', parsed)
//       //   map.forEach((client) => {
//       //     if (client.readyState === WebSocket.OPEN) {
//       //       client.send(
//       //         JSON.stringify({
//       //           type: parsed.type,
//       //           payload: { name: userName, message: parsed.payload.text },
//       //         }),
//       //       )
//       //     }
//       //   })
//       //   break
//       // case 'CHAT_CONNECT':
//       //   map.forEach((client) => {
//       //     if (client.readyState === WebSocket.OPEN) {
//       //       client.send(
//       //         JSON.stringify({
//       //           type: parsed.type,
//       //           payload: { name: userName, id: userId },
//       //         }),
//       //       )
//       //     }
//       //   })
//       //   break

//       default:
//         break
//     }
//   })

//   ws.on('close', () => {
//     map.delete(userId)
//   })
// })

// server.listen(PORT, () => console.log(`Server has been started on PORT: ${PORT}`))
