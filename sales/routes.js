const express = require('express');
const router = express.Router();

const controller = require('./controller');
const db = require('./db');

router.get ('/', async(req,res) => {

  console.log("new request");

  const response = await controller.get_consolidated_sales_data();

  return res.status(200).json(response);

})

module.exports = router;
