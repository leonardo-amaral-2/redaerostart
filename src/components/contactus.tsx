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
  const countryCodes = [
    { code: "+1", name: "USA" },
    { code: "+44", name: "UK" },
    { code: "+55", name: "Brazil" },
    { code: "+33", name: "France" },
    { code: "+49", name: "Germany" },
    { code: "+81", name: "Japan" },
    { code: "+61", name: "Australia" },
    { code: "+91", name: "India" },
    { code: "+86", name: "China" },
    { code: "+7", name: "Russia" },
    { code: "+39", name: "Italy" },
    { code: "+34", name: "Spain" },
    { code: "+52", name: "Mexico" },
    { code: "+27", name: "South Africa" },
    { code: "+82", name: "South Korea" },
    { code: "+46", name: "Sweden" },
    { code: "+47", name: "Norway" },
    { code: "+31", name: "Netherlands" },
    { code: "+41", name: "Switzerland" },
    { code: "+65", name: "Singapore" },
    { code: "+90", name: "Turkey" },
    { code: "+60", name: "Malaysia" },
    { code: "+62", name: "Indonesia" },
    { code: "+54", name: "Argentina" },
    { code: "+64", name: "New Zealand" },
    { code: "+48", name: "Poland" },
    { code: "+43", name: "Austria" },
    { code: "+51", name: "Peru" },
    { code: "+63", name: "Philippines" },
    { code: "+45", name: "Denmark" },
    { code: "+53", name: "Cuba" },
    { code: "+66", name: "Thailand" },
    { code: "+56", name: "Chile" },
    { code: "+92", name: "Pakistan" },
    { code: "+20", name: "Egypt" },
    { code: "+98", name: "Iran" },
    { code: "+966", name: "Saudi Arabia" },
    { code: "+234", name: "Nigeria" },
    { code: "+58", name: "Venezuela" },
    { code: "+94", name: "Sri Lanka" },
    { code: "+357", name: "Cyprus" },
    { code: "+964", name: "Iraq" },
    { code: "+973", name: "Bahrain" },
    { code: "+971", name: "United Arab Emirates" },
    { code: "+373", name: "Moldova" },
    { code: "+505", name: "Nicaragua" },
    { code: "+593", name: "Ecuador" },
    { code: "+962", name: "Jordan" },
    // Adicione mais países conforme necessário
  ];

  return (
    <div className="contact" data-aos="fade-up" id="contactus">
      <div className="contact-bg">
        <div className="contact-bg-container">
          <div className="contact-us-form">
            <h1
              style={{
                borderBottom: "5px solid #0094D9",
                color: "#1A458F",
              }}
            >
              Contact Us
            </h1>
            <div className="contact-us-items">
              <div className="contact-us-items-form">
                <div className="item-form">
                  <p>Name:</p>
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
                  <p>Phone Number:</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <select
                      name="countryCode"
                      onChange={handleChange}
                      style={{
                        marginRight: "8px",
                        height: "42px",
                        width: "100px",
                      }}
                    >
                      {countryCodes.map((item, index) => (
                        <option key={index} value="+44">
                          {item.code} ({item.name})
                        </option>
                      ))}
                    </select>
                    <input
                      type="tel"
                      name="phoneNumber"
                      onChange={handleChange}
                      style={{ flex: 1, padding: "5px" }}
                    />
                  </div>
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
                  <p>RENNES/ BRITANNY FRANCE</p>
                  <p>activemanagement@gmail.com</p>
                  <p>+336 59330269</p>
                </div>
                <div className="info-data">
                  <p>PORTO/ PORTUGAL</p>
                  <p>activemanagement@gmail.com</p>
                  <p>+351 929 400 546</p>
                </div>
                <div>
                  <h2>AVAILABILITY</h2>
                  <p>Availabel Every day</p>
                  <p>07:30 UTC - 16:30 UTC</p>
                  {/* <p>Winter +1utc</p>
                  <p>Summer +2utc</p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
