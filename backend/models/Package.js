import mongoose from 'mongoose';

const packageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  features: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

const Package = mongoose.model('Package', packageSchema);

export default Package;