const express = require('express');
const router = express.Router();
const LocalController = require('../controllers/localController');

router.get('/', LocalController.getAllLocations);
router.get('/:id', LocalController.getLocationById);
router.post('/', LocalController.createLocation);
router.put('/:id', LocalController.updateLocation);
router.delete('/:id', LocalController.softDeleteLocation);
router.delete('/hard/:id', LocalController.hardDeleteLocation);

module.exports = router;