const express = require("express");

const router = express.Router();

router.route('/').get((req, res) => {
  console.log('index');
});



module.exports = router;
