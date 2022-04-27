const router = require('express').Router();
let Transaction = require('../models/transaction.model');

router.route('/').get((req, res) => {
  Transaction.find()
    .then((transactions) => res.json(transactions))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  //const type = req.body.type;
  const category = req.body.category;
  const description = req.body.description;
  const amount = Number(req.body.amount);
  const date = req.body.date;

  const newTransaction = new Transaction({
    description,
    amount,
    date,
    category,
  });

  newTransaction
    .save()
    .then(() => res.json(newTransaction))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Transaction.findById(req.params.id)
    .then((transaction) => res.json(transaction))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Transaction.findByIdAndDelete(req.params.id)
    .then(() => res.json('Transaction deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Transaction.findById(req.params.id)
    .then((transaction) => {
      //transaction.type = req.body.type;
      transaction.description = req.body.description;
      transaction.amount = Number(req.body.amount);
      transaction.date = Date.parse(req.body.date);
      transaction.category = req.body.category;

      transaction
        .save()
        .then(() => res.json('Transaction updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
