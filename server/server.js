var express = require("express");
var multer = require("multer");
var upload = multer({dest:"uploads/"});
var cors = require("cors");

var app = express();

app.use(cors());

app.post("/upload", upload.array("myFiles", 12), function(req, res, next) {
  console.log(req.files);
  res.send("File uploaded!");
});

app.listen("4000", function() {
  console.log("API server started at port 4000");
});