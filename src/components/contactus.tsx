import { useState } from "react";
import "../styles/contactus.css";
import emailjs from "emailjs-com";

export function ContactUs() {
  const [formState, setFormState] = useState({
    firstName: "",
    familyName: "",
    email: "",
    request: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const sendEmail = () => {
    emailjs
      .send(
        "service_jdawqqt", // Service ID
        "template_8p9u932", // Template ID (substitua pelo seu Template ID)
        formState,
        "Pm0DkYg1G0S9B22LM" // Public Key (substitua pela sua Public Key)
      )
      .then(
        (_result) => {
          alert("Message sent successfully!");
          setFormState({
            firstName: "",
            familyName: "",
            email: "",
            request: "",
            message: "",
          });
        },
        (_error) => {
          alert("An error occurred, please try again.");
        }
      );
  };

  return (
    <div className="contact" data-aos="fade-up" id="contactus">
      <div className="contact-bg">
        <div className="contact-bg-container">
          <div className="contact-us-form">
            <h1>Contact Us</h1>
            <div className="contact-us-items">
              <div className="contact-us-items-form">
                <div className="item-form">
                  <p>First Name:</p>
                  <input
                    type="text"
                    name="firstName"
                    value={formState.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="item-form">
                  <p>Family Name:</p>
                  <input
                    type="text"
                    name="familyName"
                    value={formState.familyName}
                    onChange={handleChange}
                  />
                </div>
                <div className="item-form">
                  <p>Email:</p>
                  <input
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="item-form">
                  <p>Request:</p>
                  <input
                    type="text"
                    name="request"
                    value={formState.request}
                    onChange={handleChange}
                  />
                </div>
                <div className="item-form">
                  <p>Message:</p>
                  <textarea
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                  />
                </div>
                <button
                  style={{
                    width: "100%",
                    height: "50px",
                    backgroundColor: "#1A458F",
                    color: "white",
                    borderRadius: "5px",
                    border: "none",
                    cursor: "pointer",
                  }}
                  onClick={sendEmail}
                >
                  SEND
                </button>
              </div>
              <div className="info">
                <h2>INFORMATION</h2>
                <div className="info-data">
                  <h3>RENNES/ BRITANNY FRANCE</h3>
                  <h3>redaerostar@gmail.com</h3>
                  <h3>+336.59.33.02.69</h3>
                </div>
                <div>
                  <h2>AVAILABILITY</h2>
                  <p>From Monday to Sunday 8am/ 10pm</p>
                  <p>French Timing</p>
                  <p>Winter +1utc</p>
                  <p>Summer +2utc</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
