const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send({ message: 'Get transaction' });
});

router.post('/', (req, res) => {
  res.send({ message: 'set transaction' });
});

router.put('/:id', (req, res) => {
  res.send({ message: `modify transaction ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.send({ message: `del transaction ${req.params.id}` });
});

module.exports = router;
