import express from "express";
import Consultation from "../models/Consultation.js";

const router = express.Router();

// Schedule a Consultation
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    const newConsultation = new Consultation({ name, email, phone, message });
    await newConsultation.save();
    res.json({ success: true, message: "Consultation Scheduled Successfully!" });
  } catch (error) {
    console.error("Consultation Error:", error);
    res.status(500).json({ success: false, message: "Failed to Schedule Consultation" });
  }
});

// Get All Consultations (Optional - Admin Use)
router.get("/", async (req, res) => {
  try {
    const consultations = await Consultation.find();
    res.json(consultations);
  } catch (error) {
    console.error("Error fetching consultations:", error);
    res.status(500).json({ message: "Failed to fetch consultations" });
  }
});

export { router };
