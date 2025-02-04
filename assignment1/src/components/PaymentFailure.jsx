import { useNavigate } from "react-router-dom";
import "../styles/paymentfailure.css";

const PaymentFailure = () => {
  const navigate = useNavigate();

  return (
    <div className="failure-container">
      <h1>Payment Failed ❌</h1>
      <p>Oops! Something went wrong. Please try again.</p>
      <button onClick={() => navigate("/")}>Retry Payment</button>
    </div>
  );
};

export default PaymentFailure;
