import Payment from '../models/Payment.js';

export const processPayment = async (req, res) => {
  const { cardNumber, cardExpiry, cardSecurityPin, billingAddress, contactInfo } = req.body;

  // Simulate payment processing
  const isPaymentSuccessful = Math.random() > 0.5; // Randomly decide if the payment is successful

  const payment = new Payment({
    cardNumber,
    cardExpiry,
    cardSecurityPin,
    billingAddress,
    contactInfo,
    paymentStatus: isPaymentSuccessful ? 'success' : 'failure',
  });

  try {
    await payment.save();

    if (isPaymentSuccessful) {
      res.status(200).json({
        message: "Payment successfully completed",
        paymentId: payment._id
      });
    } else {
      res.status(400).json({
        message: "Payment Failed",
        details: "Unable to Proceed Further",
        suggestion: "Pay with another card"
      });
    }
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({ message: 'Error processing payment' });
  }
};