import { useState, useRef } from "react";
import { PaystackButton } from "react-paystack";
import { AiOutlineMail } from "react-icons/ai";
import { MdWifiCalling2 } from "react-icons/md";
import {
  useNavigate,
  useLocation,
  useLoaderData,
  useParams,
} from "react-router-dom";
import { getTrucks } from "../api/truckapi";

export function loader({ params }) {
  return getTrucks(params.id);
}

const CheckoutTruck = ({ price }) => {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const cartRef = useRef();
  const navigate = useNavigate();
  const location = useLocation();
  // console.log(location);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [address, setAddress] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const van = useLoaderData();
  const truck = useLoaderData();
  console.log(truck);
  const { id } = useParams();

  const amount = id === "truck" ? truck.price : van.price || 0;

  //   console.log(amount);

  const publicKey = "pk_test_23f26f6e7e1df8a8e8fbf63d7e8e652399a1ab51";
  // Function to format a number as Naira currency
  const formatAsNaira = (amount) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const onSuccess = (reference) => {
    navigate("/paymentsuccessful");
    setPaymentSuccess(true);
    sendConfirmationEmail(email);
    console.log(
      reference.message,
      reference.reference,
      reference.status,
      reference.trans,
      reference.transaction,
      reference.trxref
    );
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
    <div className="checkout-container ">
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
              <div className="">
                <label>Full Name:</label>
                <input
                  type="text"
                  value={fullName}
                  onInput={(e) => setFullName(e.target.value)}
                  className="input"
                />
              </div>

              <div className="">
                <label>Email Address:</label>
                <input
                  type="text"
                  value={email}
                  onInput={(e) => setEmail(e.target.value)}
                  className="input"
                />
              </div>

              <div className="">
                <label>Phone Number:</label>
                <input
                  type="text"
                  value={phoneNumber}
                  onInput={(e) => setPhoneNumber(e.target.value)}
                  className="input"
                />
              </div>
              <div className="">
                <label>Address:</label>
                <textarea
                  value={address}
                  onInput={(e) => setAddress(e.target.value)}
                  className="input"
                />
              </div>
            </div>

            <div className="">
              <h3 className="">
                Amount in USD: ${amount}/day
              </h3>
              <h3 className="">
                Amount in Naira: {formatAsNaira(amount * 300)}/day
              </h3>
            </div>

            <div className="btn-container">
              <PaystackButton
                text="Pay with Paystack"
                className="purchase--btn"
                email={email}
                amount={amount * 100 * 300} // Convert to kobo
                publicKey={publicKey}
                onSuccess={onSuccess}
                onClose={onClose}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutTruck;
