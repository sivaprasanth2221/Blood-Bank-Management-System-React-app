var Express = require("express");
var Mongoclient = require("mongodb").Mongoclient;
var cors = require("cors");
const multer = require("multer");


var app = Express();
app.use(cors());