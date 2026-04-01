const express = require("express");
const router = express.Router();
const { addUser,login } = require("../controllers/authcontrollers");


router.post('/login', login);

module.exports = router;
