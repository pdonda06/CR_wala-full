import CaseStudy from '../models/CaseStudy.js';

export const getAllCaseStudies = async (req, res) => {
  try {
    const caseStudies = await CaseStudy.find();
    res.status(200).json(caseStudies);
  } catch (error) {
    console.error('Error fetching case studies:', error);
    res.status(500).json({ message: 'Error fetching case studies' });
  }
};

export const createCaseStudy = async (req, res) => {
  const { title, description, imageUrl, tag } = req.body;

  try {
    const newCaseStudy = new CaseStudy({ title, description, imageUrl, tag });
    await newCaseStudy.save();
    res.status(201).json(newCaseStudy);
  } catch (error) {
    console.error('Error creating case study:', error);
    res.status(500).json({ message: 'Error creating case study' });
  }
};


export const updateCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' });
    }
    res.json({ success: true, data: caseStudy });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteCaseStudy = async (req, res) => {
  try {
    const caseStudy = await CaseStudy.findByIdAndDelete(req.params.id);
    if (!caseStudy) {
      return res.status(404).json({ success: false, message: 'Case study not found' });
    }
    res.json({ success: true, data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};