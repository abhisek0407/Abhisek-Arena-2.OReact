import React, { useState, useEffect } from "react";
import "./contact.css";
import sendMail from "../../assets/sendMailLogo.jpg";
const Contact = () => {
  const [message, setMessage] = useState("");
  const [charLeft, setCharLeft] = useState(500);
  const [name, setName] =useState("");
  const [email, setEmail]= useState("");
  const [successMsg, setSuccessMsg]= useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");
  useEffect(() => {
    setCharLeft(500 - message.length);
  }, [message]);
  const validateForm=()=>{
    let isValid=true;
    if(!name.trim()){
       setNameError("Name is required.");
       isValid=false;
    }else{
      setNameError("");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setEmailError("Email is required.");
      isValid = false;
    } else if (!emailRegex.test(email)) {
      setEmailError("Enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }
     if (message.trim().length < 10) {
      setMessageError("Message must be at least 10 characters.");
      isValid = false;
    } else if (message.length > 500) {
      setMessageError("Message cannot exceed 500 characters.");
      isValid = false;
    } else {
      setMessageError("");
    }
    return isValid;
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    if (validateForm()) {
      setSuccessMsg("✅ Your message has been sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
      setTimeout(() => {
        setSuccessMsg("");
      }, 4000);
    }else{
      setSuccessMsg("");
    }
  };
  return (
    <>
      <div className="homecont">
        <div className="contactcont">
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "bolder",
              textAlign: "center",
            }}
          >
            <i className="fa-solid fa-phone"></i>
            Contact Number: 7978136268, 8249919529
          </p>
          <br />
          <br />
          <div className="mail contact-part">
            <i
              className="fa-solid fa-square-envelope"
              style={{ fontSize: "30px" }}
            ></i>
            <p>abhisekpanda982@gmail.com</p>
          </div>
          <div className="insta contact-part">
            <i
              className="fa-brands fa-instagram"
              style={{ fontSize: "30px" }}
            ></i>
            <p>
              <a
                href="https://www.instagram.com/04_abhisek_0708/?__pwa=1"
                target="_blank"
              >
                Click here to go to my Instagram Profile
              </a>
            </p>
          </div>
          <div className="facebook contact-part">
            <i
              className="fa-brands fa-facebook"
              style={{ fontSize: "30px" }}
            ></i>
            <p>
              <a
                href="https://www.facebook.com/share/18cZMZprJC/"
                target="_blank"
              >
                Click here to go to my Facebook Profile
              </a>
            </p>
          </div>
          <div className="linkedin contact-part">
            <i
              className="fa-brands fa-linkedin"
              style={{ fontSize: "30px" }}
            ></i>
            <p>
              <a
                href="https://www.linkedin.com/in/abhisek-panda-253331246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
              >
                Click here to go to my Linkedin Profile
              </a>
            </p>
          </div>
          <div className="github contact-part">
            <i className="fa-brands fa-github" style={{ fontSize: "30px" }}></i>
            <p>
              <a href="https://github.com/abhisek0407" target="_blank">
                Click here to go to my GitHub Profile
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="mailHeadCont">
        <div className="mailHead">
          <h2>Contact me by sending mail</h2>
          <i className="fa-solid fa-arrow-down"></i>
        </div>
      </div>
      <div className="homecont">
        <div
          className="sendingMail"
          style={{ backgroundImage: `url(${sendMail})`, backgroundSize:'cover' }}
        >
          <form
            // action="https://api.web3forms.com/submit"
            // method="POST"
            className="Mailform"
            onSubmit={handleSubmit}
            
          >
            {/* <input
              type="hidden"
              name="access_key"
              value={"908bd97e-1101-4e24-b3aa-501b103d9e30"}
            /> */}
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="contact-inputs"
              value={name}
              onChange={(e)=>{
                setName(e.target.value)
              }}
              // required
            />
            {nameError && <p className="error">{nameError}</p>}
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="contact-inputs"
              value={email}
               onChange={(e)=>{
                setEmail(e.target.value)
              }}
              // required
            />
            {emailError && <p className="error">{emailError}</p>}
            <textarea
              name="message"
              placeholder="Your Message"
              className="contact-inputs"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={500}
              // required
            ></textarea>
            {messageError && <p className="error">{messageError}</p>}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <button
                type="submit" 
              >
                Submit
              </button>
              <p style={{ fontSize: "0.9rem",color:'white' }}>{charLeft} characters left</p>
            </div>
             {successMsg && <p className="success">{successMsg}</p>}
          </form>
        </div>
      </div>
      <footer>
        <div class="foot-panel">
          <p> © 2025 Abhisek Arena. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Contact;
