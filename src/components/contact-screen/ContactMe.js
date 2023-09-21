import { Col, Row } from "react-bootstrap";
import styles from "./contactme.module.css";
import { useEffect, useState } from "react";
import solidDown from "../about-screen/img/solidDown.png";
import closeIcon from "../home-screen/img/closeIcon.png";
import { contactItems, otherContacts } from "../utils/Data";
// import emailIcon from "../about-screen/img/mail-icon.png"
// import phoneIcon from "../about-screen/img/phone-icon.png"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism"; // You can choose a different style

// ContactDashboard DASHBOARD
export const ContactDashboard = () => {
  const [showInfo, setShowInfo] = useState({
    contact: true,
    others: true,
  });

  return (
    <Row className={` ${styles.container} `}>
      <Col
        className={` ${styles.dashBoardMainContent} ${styles.defaultMargin} `}
        md={{ span: "12" }}
      >
        <div className={` ${styles.container}`}>
          <div
            className={` ${styles.dashBoardContentHeader} ${styles.defaultMargin}`}
            md={{ span: "12", offset: "" }}
            onClick={() =>
              setShowInfo((prev) => ({ ...prev, contact: !showInfo.contact }))
            }
          >
            <img
              src={solidDown}
              alt={solidDown}
              className={`${showInfo.contact ? `${styles.activeFile}` : ""}`}
            />
            <h5>contacts</h5>
          </div>
          {showInfo.contact && (
            <div
              className={` ${styles.dashBoardContentMenu} ${styles.defaultMargin} `}
              md={{ span: "12", offset: "" }}
            >
              <ul>
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <div className={` ${styles.navItems}`}>
                      <img src={item.img} alt={item.img} />
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div
            className={`${styles.borderTop} ${styles.dashBoardContentHeader} ${styles.defaultMargin}`}
            md={{ span: "12", offset: "" }}
            onClick={() =>
              setShowInfo((prev) => ({ ...prev, others: !showInfo.others }))
            }
          >
            <img
              src={solidDown}
              alt={solidDown}
              className={`${showInfo.others ? `${styles.activeFile}` : ""}`}
            />
            <h5>find-me-also-in</h5>
          </div>
          {showInfo.others && (
            <div
              className={` ${styles.dashBoardContentMenu} ${styles.defaultMargin} `}
              md={{ span: "12", offset: "" }}
            >
              <ul>
                {otherContacts.map((item) => (
                  <li key={item.label}>
                    <div className={` ${styles.navItems}`}>
                      <img src={item.img} alt={item.img} />
                      {item.label}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

// ContactDashboardContent CONTENT
export const ContactDashboardContent = () => {
    const [step, setStep] = useState(0)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    })

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

  const [currentDate, setCurrentDate] = useState(getCurrentDate());


  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(1)
    console.log(formData);
    setFormData((prev)=>({
        name: '',
        email: '',
        message: '',
    }))
  };
  // Function to get the current date and time in the desired format
  function getCurrentDate() {
    const now = new Date();
    const options = {
      year: "numeric",
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    };
    return now.toLocaleDateString("en-US", options);
  }

  // Update the current date and time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDate(getCurrentDate());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const codeString = `const button 
  = document.querySelector('#sendBtn');

const message = {
  name: "${formData.name}",
  email: "${formData.email}",
  message: "${formData.message}",
  date: "${currentDate}"
}

button.addEventListener('click', () => {
  form.send(message);
})`;
const customStyle = {
    background: '#011627',
    // Add other custom styles if needed
  };

  return (
    <Row className={` ${styles.container} ${styles.borderLeft}`}>
      <Col
        md={{ span: "12" }}
        style={{ display: "flex" }}
        className={` ${styles.contentHeaderCol} ${styles.defaultMargin} ${styles.borderRight} `}
      >
        <div
          className=""
          style={{
            flex: "1",
            display: "flex",
            flexDirection: "column",
            // border: "1px solid blue",
          }}
        >
          <div
            className={` ${styles.headerCover} ${styles.ssNoborder}`}
            // style={{ borderBottom: "1px solid #1e2d3d" }}
          >
            <div className={`${styles.header} ${styles.ssNoborder}`}>
              contacts
            </div>
            {
              <div className={`${styles.closeCover}  ${styles.ssNoborder}`}>
                <img
                  src={closeIcon}
                  alt={closeIcon}
                  //  onClick={handleReset}
                />
              </div>
            }
          </div>
          <div
            className=""
            style={{ flex: "1", display: "flex", marginRight: "2%" }}
          >
            {/* SPLIT 1st SECTION FROM HERE  */}
           { step === 0 && <div
              className={styles.borderRight}
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className=""
                style={{ width: "65%", height: "80%", fontSize: "14px" }}
              >
                <form className={`${styles.form}`} onSubmit={handleSubmit}>
                  <label style={{ display: "flex", flexDirection: "column" }}>
                    {" "}
                    _name:
                    <input
                      placeholder="John"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData((prev)=>({...prev, name: e.target.value}))}
                    />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column" }}>
                    {" "}
                    _email:
                    <input
                      placeholder="john@gmail.com"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData((prev)=>({...prev, email: e.target.value}))}
                    />
                  </label>
                  <label style={{ display: "flex", flexDirection: "column" }}>
                    {" "}
                    _message:
                    <textarea
                      placeholder="enter your message here"
                      value={formData.message}
                      onChange={(e) => setFormData((prev)=>({...prev, message: e.target.value}))}
                    />
                  </label>
                  <button type="submit">submit-message</button>
                </form>
              </div>
            </div>}
            { step === 1 &&  <div
              className={styles.borderRight}
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className=""
                style={{ width: "65%", height: "80%", fontSize: "14px", display: 'flex' }}
              >
                <div className={` ${styles.successPage}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', textAlign: 'center'}}>
                    <h4>Thank you! 🤘</h4>
                    <p>Your message has been accepted. You will recieve answer really soon!</p>
                  <button type="submit" onClick={()=>setStep(0)}>send-new-message</button>
                </div>
              </div>
            </div>}
            {/* SPLIT 2ND SECTION FROM HERE  */}
            <div
              className={styles.borderRight}
              style={{
                flex: "1",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className=""
                style={{
                  maxWidth: "25vw",
                  overflowX: "auto",
                  width: "25vw",
                  height: "80%",
                  color: "#465e77",
                }}
              >
                {" "}
                <SyntaxHighlighter language="javascript" style={vscDarkPlus} customStyle={customStyle}>
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};
