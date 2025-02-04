import Package from '../models/Package.js';

export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    res.status(200).json(packages);
  } catch (error) {
    console.error('Error fetching packages:', error);
    res.status(500).json({ message: 'Error fetching packages' });
  }
};

export const createPackage = async (req, res) => {
  const { name, price, features } = req.body;

  try {
    const newPackage = new Package({ name, price, features });
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    console.error('Error creating package:', error);
    res.status(500).json({ message: 'Error creating package' });
  }
};