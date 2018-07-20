"use strict";
exports.__esModule = true;
var express_1 = require("express");
var express = require("express");
var http_1 = require("http");
var socketio = require("socket.io");
// Routes
var port = 3000;
var router = express_1.Router();
var app = express();
var http = new http_1.Server(app);
router.get("/", function (req, res) {
    return res.sendFile(__dirname + "/index.html");
});
// Mount routes
app.use("/", router);
// Serve
http.listen(port, function () {
    // Success callback
    console.log("Listening at http://localhost:" + port + "/");
});
var io = socketio(http);
io.on("connection", function (socket) {
    console.log("a user connected"),
        socket.on("disconnect", function () {
            return console.log("user disconnected");
        });
    socket.on("chat message", function (msg) {
        return io.emit("chat message", msg);
    });
});
