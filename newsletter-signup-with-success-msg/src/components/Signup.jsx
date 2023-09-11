import { useNavigate } from "react-router-dom";
import "./signup.css";
import { useState } from "react";

function Signup() {
  const [email, setEmail] = useState("");
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (ValidateEmail()) navigate("/success");
  };
  function ValidateEmail() {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  }
  const navigate = useNavigate();
  return (
    <div className="app">
      <div className="container">
        <div className="text-action">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="points">
            <div className="point">
              <img src="src\assets\images\icon-list.svg" alt="success" />
              <p>Product discovery and building what matters</p>
            </div>
            <div className="point">
              <img src="src\assets\images\icon-list.svg" alt="success" />
              <p>Measuring to ensure updates are a success</p>
            </div>
            <div className="point">
              <img src="src\assets\images\icon-list.svg" alt="success" />
              <p>And much more!</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="call-to-action">
            <label htmlFor="email" className="email-lbl">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="email@company.com"
              className="email"
              required
            ></input>

            <button
              type="submit"
              className="submit-btn"
              //   onClick={() => {
              //     navigate("/success");
              //   }}
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="img-wrapper">
          <img
            src="src\assets\images\illustration-sign-up-desktop.svg"
            alt="svg image"
            className="img"
          />
        </div>
      </div>
    </div>
  );
}

export default Signup;
