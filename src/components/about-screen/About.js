import styles from "./about.module.css";
import icon1 from "./img/personal-info-icon.png";
import icon2 from "./img/professional-info-icon.png";
import Star from "./img/Star.png";
import comments from "./img/comments-icon.png";
import userimg from "./img/userimg.png";
import solidDown from "./img/solidDown.png";
import subFolder from "./img/subFolder.png";
import hobbiesIcon from "./img/hobbies-icon.png";
import fileOpened from "./img/fileOpened.png";
import closeIcon from "../home-screen/img/closeIcon.png";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Col, Row } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import {
  bio,
  codeSnippet,
  contactItems,
  education,
  interests,
  navItems,
} from "../utils/Data";
import MessageComponent from "./MessageComponent";
import { selectedOptionApi, viewContext } from "../home-screen/Home";
import {
  ProjectDashBoard,
  ProjectDashBoardCntent,
} from "../project-screen/Project";
import { ContactDashboard, ContactDashboardContent } from "../contact-screen/ContactMe";
import { Body } from "../utils/Utils";

const handleClick = (item, active, setActive) => {
  if (active === item) {
    setActive("");
  } else {
    setActive(item);
  }
};

// DashBoardContent
const DashBoardContent = () => {
  return (
    <Row
      className={` ${styles.container} ${styles.borderLeft} ${styles.ssFlex}  ${styles.ssNoBorder} `}
    >
      <Col
        md={{ span: "6" }}
        className={` ${styles.contentHeaderCol} ${styles.defaultMargin} ${styles.borderRight} ${styles.ssFullWidth}  ${styles.ssNoBorder} `}
      >
        <DashBoardContentDisplay
          headTags={<HeadTags text={""} />}
          detailedBody={<DetailedBody1 />}
        />
      </Col>
      <Col
        md={{ span: "6" }}
        className={`${styles.defaultMargin} ${styles.ssFullWidth}  ${styles.ssNoBorder} `}
      >
        <DashBoardContentDisplay detailedBody={<DetailedBody2 />} />
      </Col>
    </Row>
  );
};

export const DashBoardContentDisplay = ({ headTags, detailedBody }) => {
  const { view } = useContext(viewContext);
  return (
    <div className={`${styles.DashConDisplayContainer} ${styles.ssNoBorder} `}>
      {/* content header */}
      <div
        className={`${styles.DashConDisplayHeadCon}  ${styles.ssNoBorder} ${
          !headTags || view === "none" ? "" : styles.height10vh
        } `}
      >
        {headTags && headTags}
      </div>
      {/* content body */}
      <div className={`${styles.contentHalfcontainer} ${styles.ssNoBorder}`}>
        <div className={`${styles.contentHalfItem}  ${styles.ssNoBorder} `}>
          <div className={` ${styles.DetailedBody}  ${styles.ssNoBorder} `}>
            {detailedBody}
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailedBody1 = () => {
  const { view } = useContext(viewContext);
  return (
    <>
      {view === "none" ? (
        "open folder and select a file to view"
      ) : (
        <MessageComponent />
      )}
    </>
  );
};

const DetailedBody2 = () => {
  return (
    <div className="ssNoDisplay635">
      <h6 className={styles.body2Header}>
        {/* eslint-disable-next-line  */}
        {/* eslint-disable-next-line  */}
        // Code snippet showcase:
      </h6>
      <CodeSnippetHead />
      <CodeSnippet />
    </div>
  );
};

const CodeSnippetHead = () => {
  return (
    <div className={`${styles.snippetHead} `}>
      <div className={`${styles.snippetHeadImgCover} `}>
        <img
          src={userimg} // Replace with your image URL
          alt={userimg}
        />
      </div>
      <div className={`${styles.snippetHeadinfo} `}>
        <div className={styles.snippetHeadinfoTop}>
          <p className={styles.userName}>@davidson</p>
          <div className={styles.detailsAndStarContainer}>
            <div className={styles.details}>
              <img src={comments} alt={comments} />
              <p> details</p>
            </div>
            <div className={`${styles.details} ${styles.SSNoDisplay}`}>
              <img src={Star} alt={Star} />
              <p> 3 stars</p>
            </div>
          </div>
        </div>
        <div className={styles.date}>
          <p>Created 5 months ago</p>
        </div>
      </div>
    </div>
  );
};

const CodeSnippet = () => {
  return (
    <div className={`${styles.snippetContainer}`}>
      <div className="code-container">
        <SyntaxHighlighter
          language="javascript"
          style={{ ...solarizedlight }} // Use your desired code highlighting style
          className="black-background" // Apply the CSS class for black background
          customStyle={{
            color: "red",
            ".variable": {
              color: "blue",
            },
            ".comment": {
              color: "green",
            },
          }}
        >
          {codeSnippet}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

const HeadTags = ({ text }) => {
  const { view, setView } = useContext(viewContext);

  return (
    <>
      {view === "none" ? (
        ""
      ) : (
        <div className={`${styles.headtags}`}>
           {text} <span style={{ color: "#607B96" }}> / {view}</span>
          <img
            src={closeIcon}
            alt={closeIcon}
            onClick={() => setView("none")}
          />
        </div>
      )}
    </>
  );
};

const DashBoard = () => {
  const {selectedOption} = useContext(selectedOptionApi)
  const [showInfo, setShowInfo] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <Row className={`${styles.container} `}>
      <Col
        className={`${styles.dashBoardImg} ${styles.defaultMargin} ${styles.SSNoDisplay} `}
        md={{ span: "3" }}
      >
        <div>
          <img src={icon2} alt={icon2} />
          <img src={icon1} alt={icon1} />
          <img src={hobbiesIcon} alt={hobbiesIcon} />
        </div>
      </Col>
      <Col
        className={` ${styles.dashBoardMainContent} ${styles.defaultMargin} `}
        md={{ span: "9" }}
      >
        {<div className={styles.ssHeaders}>{selectedOption}</div>}
        <div className={` ${styles.container} `}>
          <div
            className={` ${styles.dashBoardContentHeader} ${styles.defaultMargin}`}
            md={{ span: "12", offset: "" }}
            onClick={() => setShowInfo((prev) => !prev)}
          >
            <img
              src={solidDown}
              alt={solidDown}
              className={`${showInfo ? `${styles.activeFile}` : ""}`}
            />
            <h5>personal-info</h5>
          </div>
          {showInfo && (
            <div
              className={`${styles.dashBoardContentMenu} ${styles.defaultMargin} `}
              md={{ span: "12", offset: "" }}
            >
              <PersonalInfoData />
            </div>
          )}
          <div
            style={{ borderTop: "1px solid #1e2d3d " }}
            className={`${styles.dashBoardContentHeader} ${styles.defaultMargin}`}
            md={{ span: "12", offset: "" }}
            onClick={() => setShowContact((prev) => !prev)}
          >
            <img
              src={solidDown}
              alt={solidDown}
              className={`${showContact ? `${styles.activeFile} ` : ""}`}
            />
            <h5>contacts</h5>
          </div>

          {showContact && (
            <div
              className={` ${styles.dashBoardContentMenu} ${styles.defaultMargin} `}
              md={{ span: "12", offset: "" }}
            >
              <ContactInfoData />
            </div>
          )}
        </div>
      </Col>
    </Row>
  );
};

const ContactInfoData = () => {
  return (
    <ul className="">
      {contactItems.map((items) => (
        <li key={items.label}>
          <div className={styles.contactItem}>
            <img
              src={items.img}
              alt={items.label}
              style={{ marginLeft: "5%" }}
            />
            {items.label}
          </div>
        </li>
      ))}
    </ul>
  );
};

const PersonalInfoData = () => {
  const [active, setActive] = useState("");
  const [subData, setSubData] = useState(null);

  useEffect(() => {
    //i want this to be done before render so that user doesnt see the transition
    if (active === "bio") {
      setSubData(bio);
    } else if (active === "interests") {
      setSubData(interests);
    } else if (active === "education") {
      setSubData(education);
    } else {
      // Reset subData to null when not displayed
      setSubData(null);
    }
  }, [active]);

  return (
    <ul>
      {navItems.map((items) => (
        <li key={items.label}>
          <div
            className={styles.contactItem}
            onClick={() => handleClick(items.label, active, setActive)}
          >
            <img
              src={fileOpened}
              alt={fileOpened}
              className={`${styles.openFileImg}  ${
                active === items.label && styles.activeFile
              }`}
            />
            <img src={items.img} alt={items.label} />
            {items.label}
          </div>
          {active === items.label && subData && (
            <SubFolders subData={subData} />
          )}
        </li>
      ))}
    </ul>
  );
};

const SubFolders = ({ subData }) => {
  const { setView } = useContext(viewContext);

  const handleSubFolderClick = (label) => {
    setView(label);
  };
  return (
    <ul className="">
      {subData.map((items) => (
        <li
          key={items.label}
          className={styles.PersonalInfoItems}
          onClick={() => handleSubFolderClick(items.label)}
        >
          <img
            src={subFolder}
            alt={subFolder}
            style={{ marginLeft: "15.5%" }}
          />
          {items.label}
        </li>
      ))}
    </ul>
  );
};

function About() {
  const { selectedOption } = useContext(selectedOptionApi);

  return (
    <Row className={`${styles.container} ${styles.ssFitContainer}`}>
      <Col
        className={` ${styles.dashBoard} ${styles.defaultMargin}`}
        md={{ span: "3" }}
      >
        {selectedOption === "_hello" && <Body />}
        {selectedOption === "_about-me" && <DashBoard />}
        {selectedOption === "_projects" && <ProjectDashBoard />}
        {selectedOption === "_contact-me" && <ContactDashboard />}
      </Col>
      <Col className={`${styles.dashBoardContent} ${styles.defaultMargin}  `}>
        {selectedOption === "_about-me" && <DashBoardContent />}
        {selectedOption === "_projects" && <ProjectDashBoardCntent />}
        {selectedOption === "_contact-me" && <ContactDashboardContent />}
      </Col>
    </Row>
  );
}

export default About;
