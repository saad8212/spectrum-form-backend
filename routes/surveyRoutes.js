// routes/surveyRoutes.js
const express = require('express');
const router = express.Router();
const {
  createSurvey,
  getAllSurveys,
  updateSurvey,
  deleteSurvey,
} = require('../controllers/serveyController');

// Route to create a new survey
router.post('/', createSurvey);

// Route to get all surveys
router.get('/', getAllSurveys);

// Route to update a survey
router.patch('/:id', updateSurvey);

// Route to delete a survey
router.delete('/:id', deleteSurvey);

module.exports = router;
