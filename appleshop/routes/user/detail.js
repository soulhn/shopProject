var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("user/detail", {
    title: "detial",
  });
});

module.exports = router;
