const express = require("express");
const router = express.Router();

const { form } = require("./formController");

router.post("/form", form);

module.exports = router;