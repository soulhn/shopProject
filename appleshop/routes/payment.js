var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("payment", { title: "payment" });
});

module.exports = router;
