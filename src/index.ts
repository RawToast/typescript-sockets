import { Application, Request, Response, Router } from "express"
import express = require("express")

// Routes
const router: Router = Router()

router.get("/", (req, res) =>
  res.send("<h1>Hello world</h1>"),
)

// Server
const app: express.Application = express()
const port = 3000

// Mount routes
app.use("/", router)

// Serve
app.listen(port, () => {
  // Success callback
  console.log(`Listening at http://localhost:${port}/`)
})
