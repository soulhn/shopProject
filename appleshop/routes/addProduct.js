var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.render("addProduct", { title: "addProduct" });
});

module.exports = router;
