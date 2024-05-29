import React, { useEffect, useState } from "react";

const HandleAPiCallsPage = () => {
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    // Initialize your credentials state here
    // For example: username: '', password: ''
  });

  const sendOTP = () => {
    console.log(credentials);
  };
  const verifyOTP = () => {
    console.log(credentials);
  };

  const handleAPICalls = async () => {
    try {
      setLoading(true);

      // Assuming you have functions like sendOTP and verifyOTP available
      const sendOTPResponse = await sendOTP(credentials);
      console.log("Send OTP response:", sendOTPResponse.data);

      const verifyOTPResponse = await verifyOTP(credentials);
      console.log("Verify OTP response:", verifyOTPResponse.data);
    } catch (error) {
      console.error("API call failed:", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleAPICalls();
  },[]);

  return (
    <div>
      <h1>Your Component</h1>
      <button onClick={handleAPICalls} disabled={loading}>
        {loading ? "Loading..." : "Make API Calls"}
      </button>
    </div>
  );
};

export default HandleAPiCallsPage;
