import { use, useRef } from "react";
import { PaystackButton } from "react-paystack";
import { AiOutlineMail } from "react-icons/ai";
import { MdWifiCalling2 } from "react-icons/md";
import { paystackKey } from "../key";
import { useNavigate, useLocation } from "react-router-dom";

const CheckoutPage = ({ price }) => {
  const [paymentSuccess, setPaymentSuccess] = use(false);
  const cartRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = use("");
  const [fullName, setFullName] = use("");
  const [address, setAddress] = use("");
  const [phoneNumber, setPhoneNumber] = use("");

  const van = location.?.van || {};
  const amount = van.price || 0;

  const publicKey = paystackKey;
  // Function to format a number as Naira currency
  const formatAsNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

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
    <>
      {paymentSuccess ? (
        <div>
          {" "}
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
          <div className="mainDiv mt-32 max-w-lg mx-auto mb-36" ref={cartRef}>
            <div className="w-full">
              <div className="flex mb-5 items-center">
                <label>Full Name:</label>
                <input
                  type="text"
                  value={fullName}
                  onInput={(e) => setFullName(e.target.value)}
                  className="input"
                />
              </div>

              <div className="flex mb-5 items-center">
                <label>Email Address:</label>
                <input
                  type="text"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  className="input"
                />
              </div>

              <div className="flex mb-5 items-center">
                <label>Phone Number:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onInput={(e) => setPhoneNumber(e.target.value)}
                  className="input"
                />
              </div>
              <div className="flex mb-5 items-center">
                <label>Address:</label>
                <textarea
                  value={address}
                  onInput={(e) => setAddress(e.target.value)}
                  className="input"
                />
              </div>
            </div>

            <div className="flex mb-10 gap-6 items-center">
              <h3 className="text-xl w-36">Subtotal:</h3>
              <h3 className="input text-lg w-min">
                {formatAsNaira(totalPrice)}
              </h3>
            </div>

            <div className="btn-container">
              <PaystackButton
                text="Pay with Paystack"
                className="purchase--btn"
                email={email}
                amount={amount * 100} // Convert to kobo
                publicKey={publicKey}
                onSuccess={onSuccess}
                onClose={onClose}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutPage;
