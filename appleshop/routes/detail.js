var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("detail", { title: "detail" });
});

module.exports = router;
