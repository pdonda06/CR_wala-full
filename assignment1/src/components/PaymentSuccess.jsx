import { useNavigate } from "react-router-dom";
import "../styles/paymentsuccess.css";

const PaymentSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="success-container">
      <h1>Payment Successful 🎉</h1>
      <p>Thank you for your payment!</p>
      <button onClick={() => navigate("/")}>Go Back to Home</button>
    </div>
  );
};

export default PaymentSuccess;
