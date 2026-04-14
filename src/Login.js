// import React, { useState } from "react";
// import axios from "axios";

// function Login({ setIsAuth }) {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [isSignup, setIsSignup] = useState(false);
//   const [otpSent, setOtpSent] = useState(false);

//   // Send OTP
//   const handleSignup = async () => {
//     await axios.post("http://127.0.0.1:8000/auth/signup", { email });
//     setOtpSent(true);
//     alert("OTP sent to email 📩");
//   };

//   // Verify OTP
//   const handleVerify = async () => {
//     const res = await axios.post(
//       "http://127.0.0.1:8000/auth/verify",
//       { email, otp }
//     );

//     if (res.data.message) {
//       alert("Login Success ✅");
//       setIsAuth(true);
//     } else {
//       alert("Invalid OTP ❌");
//     }
//   };

//   return (
//     <div className="login-container">

//       <h2>🔐 AI System Login</h2>

//       <input
//         placeholder="Enter Email"
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       {isSignup && !otpSent && (
//         <button onClick={handleSignup}>Send OTP</button>
//       )}

//       {otpSent && (
//         <>
//           <input
//             placeholder="Enter OTP"
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button onClick={handleVerify}>Verify OTP</button>
//         </>
//       )}

//       {!isSignup && (
//         <button onClick={() => setIsSignup(true)}>
//           New User? Sign Up
//         </button>
//       )}

//     </div>
//   );
// }

// export default Login;


import React, { useState } from "react";
import axios from "axios";

function Login({ setIsAuth }) {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1);

  const sendOTP = async () => {
    try {
      await axios.post("http://127.0.0.1:8000/auth/signup", { email });
      setStep(2);
      alert("OTP sent to your email");
    } catch (error) {
      alert(error.response?.data?.detail || "Unable to send OTP email");
    }
  };

  const verifyOTP = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:8000/auth/verify", {
        email,
        otp,
      });

      if (res.data.message) {
        setIsAuth(true);
      } else {
        alert("Invalid OTP");
      }
    } catch (error) {
      alert(error.response?.data?.detail || "OTP verification failed");
    }
  };

  return (
    <div className="login-page">
      <div className="login-stars">
        <span className="star star-1">*</span>
        <span className="star star-2">*</span>
        <span className="star star-3">*</span>
        <span className="star star-4">*</span>
        <span className="star star-5">*</span>
      </div>

      <div className="login-card">
        <div className="login-hero">
          <div className="hero-copy">
            <p className="hero-kicker">AI Document Intelligence</p>
            <h1>Welcome to the website</h1>
            <p>
              Secure OTP access for your loan verification workspace with a calm,
              modern interface inspired by the reference design.
            </p>
          </div>

          <div className="hero-landscape" aria-hidden="true">
            <div className="moon" />
            <div className="hill hill-back" />
            <div className="hill hill-mid" />
            <div className="hill hill-front" />
            <div className="tree tree-left" />
            <div className="tree tree-center" />
            <div className="tree tree-right" />
          </div>
        </div>

        <div className="login-form-panel">
          <div className="login-form-wrap">
            <p className="form-title">User Login</p>

            <label className="input-pill">
              <span className="input-icon" aria-hidden="true">
                @
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </label>

            {step === 2 && (
              <label className="input-pill">
                <span className="input-icon" aria-hidden="true">
                  #
                </span>
                <input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                />
              </label>
            )}

            <div className="login-meta">
              <span>{step === 1 ? "Remember" : "OTP Sent"}</span>
              <span>{step === 1 ? "Secure Sign In" : "Check Your Email"}</span>
            </div>

            {step === 1 && (
              <button className="login-button" onClick={sendOTP}>
                Send OTP
              </button>
            )}

            {step === 2 && (
              <button className="login-button" onClick={verifyOTP}>
                Verify Login
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
