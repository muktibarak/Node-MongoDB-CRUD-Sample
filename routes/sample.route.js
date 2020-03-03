const express = require('express');
const router = express.Router();

const sample_controller = require('../controllers/sample.controller');


//lets check if this is working
// router.get('/test', sample_controller.test);

//create
router.post('/create', sample_controller.sample_create);

//read the sample from mongodb
router.get('/:id', sample_controller.sample_details);

//update 
router.put('/:id/update', sample_controller.sample_update);

//Delete
router.delete('/:id/delete', sample_controller.sample_delete);


module.exports = router;