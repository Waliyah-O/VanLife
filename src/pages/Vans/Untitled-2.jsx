import { useState, useRef } from "react";
import { PaystackButton } from "react-paystack";
import { AiOutlineMail } from "react-icons/ai";
import { MdWifiCalling2 } from "react-icons/md";
import { paystackKey } from "../key";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = ({ price }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const cartRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const van = location.state?.van || {};
  const amount = van.price || 0;

  const publicKey = paystackKey;
  const onSuccess = (reference) => {
    // Use history to navigate to the success page
    navigate("/successPage");
    // Send confirmation email here (you'll need to implement this)
    setPaymentSuccess(true);
    sendConfirmationEmail(email);
    console.log(reference);
  };

  const onClose = () => {
    alert("We love to see you purchase this item, please proceed");
    history.push("/");
  };

  //   const onSuccess = (reference) => {
  //     setPaymentSuccess(true);
  //     sendConfirmationEmail(email);
  //     console.log(reference);
  //   };

  //   const onClose = () => {
  //     // Payment modal closed
  //   };

  const sendConfirmationEmail = (toEmail) => {
    // Replace this with your email sending logic
    // Use an email service like SendGrid or Nodemailer
    console.log(`Sending confirmation email to ${toEmail}`);
    // Implement email sending logic here
  };

  return (
    <div>
      {paymentSuccess ? (
        <div>
          <h2>Payment Successful!</h2>

          <p>An email confirmation has been sent to {email}.</p>
          <p>
            Please contact Bab for your van and further instructions{" "}
            <AiOutlineMail /> b@b.com <MdWifiCalling2 /> 08012345678 for the
            keys to the rig you are renting{" "}
          </p>
        </div>
      ) : (
        <div>
          {/* <h2>Checkout Page</h2> */}
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <PaystackButton
            text="Pay with Paystack"
            className="purchase-btn"
            email={email}
            amount={20000} // Replace with payment amount from van
            publicKey={publicKey}
            onSuccess={onSuccess}
            onClose={onClose}
          />
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
