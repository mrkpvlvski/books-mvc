const express = require('express')
const router = express.Router()
const ctrl = require('../controllers/books')

router.get('/', ctrl.getAll)
router.post('/', ctrl.create)
router.get('/:id', ctrl.show)
router.post('/:id', ctrl.modify)
router.delete('/:id', ctrl.remove)



module.exports = router
