// // This would typically interact with a database
// // For simplicity, we're just defining a basic structure

// class Payment {
//     constructor(cardNumber, cardExpiry, cardSecurityPin, billingAddress, contactInfo) {
//         this.cardNumber = cardNumber;
//         this.cardExpiry = cardExpiry;
//         this.cardSecurityPin = cardSecurityPin;
//         this.billingAddress = billingAddress;
//         this.contactInfo = contactInfo;
//     }

//     // Method to process payment (simulated)
//     process() {
//         // Simulate payment processing
//         return Math.random() > 5; // Randomly decide if the payment is successful
//     }
// }

// export default Payment;



import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  cardExpiry: { type: String, required: true },
  cardSecurityPin: { type: String, required: true },
  billingAddress: { type: String, required: true },
  contactInfo: { type: String, required: true },
  paymentStatus: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Payment = mongoose.model('Payment', paymentSchema);

export default Payment;