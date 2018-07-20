import { Router } from "express"
import express = require("express")
import { Server } from "http"
import socketio = require("socket.io")

// Routes
const port = 3000
const router: Router = Router()
const app: express.Application = express()
const http = new Server(app)

router.get("/", (req, res) =>
  res.sendFile(__dirname + "/index.html"),
)

// Mount routes
app.use("/", router)

// Serve
http.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`)
})

const io: socketio.Server = socketio(http)

io.on("connection", (socket: any) => {
  console.log("a user connected"),

  socket.on("disconnect", () =>
    console.log("user disconnected"),
  )

  socket.on("chat message", (msg) =>
    io.emit("chat message", msg),
  )
  },
)
