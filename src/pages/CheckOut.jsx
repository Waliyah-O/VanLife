import { useState } from "react";
import { PaystackButton } from "react-paystack";
import { AiOutlineMail } from "react-icons/ai";
import { MdWifiCalling2 } from "react-icons/md";
import {
  useNavigate,
  useLocation,
  useLoaderData,
  useParams,
  Link,
} from "react-router-dom";
import { getVans } from "../api/vanapi";

export function loader({ params }) {
  return getVans(params.id);
}

const CheckoutPage = ({ price }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [rentDuration, setRentDuration] = useState(1);
  const van = useLoaderData();
  const { id } = useParams();

  const amount = van.price || 0;

  const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;
  // Function to format a number as Naira currency
  const formatAsNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const onSuccess = (reference) => {
    // navigate("/paymentsuccessful");
    setPaymentSuccess(true);
    sendConfirmationEmail(email);
    // console.log(reference);
  };

  const onClose = () => {
    alert("We would love to see you purchase this item, please try again");
    // navigate("/");
  };

  const sendConfirmationEmail = (toEmail) => {
    // Replace this with email sending logic
    // Use email service like SendGrid or Nodemailer
    console.log(`Sending confirmation email to ${toEmail}`);
    // Implement email sending logic here
  };

  return (
    <div className="checkout-container">
      {paymentSuccess ? (
        <div className="success-container">
          {/* <p>Hi {fullName}!</p> */}
          <h2>Payment Successful!</h2>
          <p>An email confirmation has been sent to {email}.</p>
          <p>
            Please contact Bab for your van and further instructions
            <AiOutlineMail /> b@b.com <MdWifiCalling2 /> 08012345678 for the
            keys to the rig you are renting and further instructions
          </p>
          <Link to="/vans" className="van-type">
            back to all vans
          </Link>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            width: "100vw",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-evenly",
            padding: '10px',
            gap: '1em'
          }}
          className="checkout-deets"
        >
          <div>
            <h3>Checkout Details</h3>
            <p>
              you are paying <strong>${van.price} /day</strong> for:
              <input
                type="text"
                value={rentDuration}
                onInput={(e) => setRentDuration(e.target.value)}
                style={{ width: "30px" }}
              />
              days
            </p>
            <p>Van no: {van.id}</p>
            <img style={{ width: "110px" }} src={van.imageUrl} alt="" />
            <p style={{ width: "200px", fontSize: "11px" }}>
              <strong>Disclaimer:</strong>failure to return rig at the end of
              stipulated time will cost you your deposit as well as additional
              fees.
            </p>
          </div>
          <div className="checkout-form">
            <div className="">
              <div className="">
                <div className="checkout-info">
                  <label>Full Name:</label>
                  <input
                    type="text"
                    value={fullName}
                    onInput={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className="checkout-info">
                  <label>Email Address:</label>
                  <input
                    type="text"
                    value={email}
                    onInput={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="checkout-info">
                  <label>Phone Number:</label>
                  <input
                    type="text"
                    value={phoneNumber}
                    onInput={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>
              </div>

              <div className="checkout-amount">
                <h4>Amount in USD: ${amount * rentDuration}/day</h4>
                <h4>
                  Amount in Naira: {formatAsNaira(amount * 300 * rentDuration)}
                  /day
                </h4>
                <p style={{ fontSize: "10px" }}>
                  *you will be charged in naira!
                </p>
              </div>

              <div className="paystackBtnDiv">
                <PaystackButton
                  text="Pay with Paystack"
                  className="paystackBtn"
                  email={email}
                  amount={amount * 100 * 300} // Convert to kobo
                  publicKey={publicKey}
                  onSuccess={onSuccess}
                  onClose={onClose}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
