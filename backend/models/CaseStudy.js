import mongoose from 'mongoose';

const caseStudySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  tag: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const CaseStudy = mongoose.model('CaseStudy', caseStudySchema);

export default CaseStudy;