var express = require("express");
var multer = require("multer");
var upload = multer({dest:"uploads/"});
var cors = require("cors");
var fs = require("fs");

var app = express();

app.use(cors());

app.post("/upload", upload.any(), function(req, res, next) {
  console.log(req.files);
  fs.readFile(req.files[0].path, (err, data) => {
    console.log("FILE DATA:", data);
    fs.writeFile("uploads/test.png", data, (err) => {
      if(err) throw err;
      console.log("Image changed over!");
    });
  });

  res.send("File uploaded!");
});

app.listen("4000", function() {
  console.log("API server started at port 4000");
});