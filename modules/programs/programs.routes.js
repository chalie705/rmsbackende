const express = require('express');
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'programs endpoint working' }));
module.exports = router;