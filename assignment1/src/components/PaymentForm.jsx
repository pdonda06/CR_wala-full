import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/paymentform.css";

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handlePayment = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch('/api/payments/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cardNumber,
          cardExpiry: expiry,
          cardSecurityPin: cvv,
          billingAddress: "123 Main St, Anytown, USA", // Example address
          contactInfo: name
        }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/payment-success");
      } else {
        setError(data.message || 'Payment failed');
      }
    } catch (error) {
      console.error('Payment error:', error);
      setError('Payment failed');
    }
  };

  return (
    <div className="payment-container">
      <h2>Payment Details</h2>
      <form onSubmit={handlePayment}>
        <div className="input-group">
          <label>Cardholder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label>Card Number</label>
          <input
            type="text"
            placeholder="1234 5678 9012 3456"
            maxLength="16"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
          />
        </div>

        <div className="card-details">
          <div className="input-group">
            <label>Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>CVV</label>
            <input
              type="password"
              placeholder="***"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </div>
        </div>

        <button type="submit" className="pay-btn">Pay Now</button>
      </form>

      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default PaymentForm;