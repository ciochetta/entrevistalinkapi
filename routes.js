const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
  return res.status(200).json({"Message":"Server working"});
})

router.use('/sales', require('./sales/routes'));

module.exports = router;
