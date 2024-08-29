// controllers/surveyController.js
const Survey = require("../models/ServeyShema");

exports.createSurvey = async (req, res) => {
  try {
    const survey = new Survey(req.body);
    await survey.save();
    res.status(201).json(survey);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.getAllSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find();
    res.status(200).json(surveys);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }
    res.status(200).json(survey);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


exports.deleteSurvey = async (req, res) => {
  try {
    const survey = await Survey.findByIdAndDelete(req.params.id);
    if (!survey) {
      return res.status(404).json({ message: "Survey not found" });
    }
    res.status(200).json({ message: "Survey deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
