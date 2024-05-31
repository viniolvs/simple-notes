const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

router.get('/', controllers.getHome);
router.post('/notes', controllers.postNotes);
router.get('/notes', controllers.getNotes);
router.delete('/notes/:id', controllers.deleteNotes);
router.get('/notes/:id', controllers.getNoteById);

module.exports = router;
