// import { Col, Row } from "react-bootstrap";
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
// import { TopNavigation } from "../utils/Utils";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { solarizedlight } from "react-syntax-highlighter/dist/esm/styles/prism";

import { Col, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import {
  bio,
  codeSnippet,
  contactItems,
  education,
  interests,
  navItems,
} from "../utils/Data";
import MessageComponent from "./MessageComponent";

const handleClick = (item, active, setActive) => {
  if (active === item) {
    setActive("");
  } else {
    setActive(item);
  }
};

const DashBoardContent = () => {
  return (
    <Row className={`${styles.container} `}>
      <Col
        md={{ span: "6" }}
        className={`${styles.contentHeaderCol} ${styles.defaultMargin} ${styles.borderRight} `}
      >
        <DashBoardContentDisplay
          headTags={<HeadTags />}
          detailedBody={<DetailedBody1 />}
        />
      </Col>
      <Col md={{ span: "6" }} className={`${styles.defaultMargin} `}>
        <DashBoardContentDisplay detailedBody={<DetailedBody2 />} />
      </Col>
    </Row>
  );
};

const DashBoardContentDisplay = ({ headTags, detailedBody }) => {
  return (
    <div
      style={{
        // border: "1px solid pink",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        className=""
        style={{
          height: "7%",
          display: "flex",
          borderBottom: "1px solid #1e2d3d",
        }}
      >
        {headTags && headTags}
      </div>
      <div
        className=""
        style={{
          flex: "1",
          display: "flex",
          // padding: "0 4.8% ",
          paddingLeft: "4.8%",
          paddingRight: "3%",
        }}
      >
        <div
          style={{
            flex: "1",
            borderRight: "1px solid #1e2d3d",
            height: "100%",
            display: "flex",
            padding: " 4.8% 0",
            overflow: "auto", //HERE IS WHERE THE PROBLEM LIES
          }}
        >
          {detailedBody}
        </div>
      </div>
    </div>
  );
};

const DetailedBody1 = () => {
  return (
    <div
      style={{
        // border: "1px solid pink",
        flex: "1",
        maxHeight: "65vh",
        overflowY: "auto",
        fontSize: "15px",
        color: "#607B96",
      }}
    >
      <MessageComponent />
    </div>
  );
};

const DetailedBody2 = () => {
  return (
    <div
      className=""
      style={{
        flex: "1",
        height: "65vh",
        overflowY: "auto",
        color: "#607B96",
        fontSize: "14px",
      }}
    >
      <h6 className="" style={{ height: "" }}>
        // Code snippet showcase:
      </h6>
      <div
        className=""
        style={{ marginTop: "10%", display: "flex", height: "12%" }}
      >
        <div
          className=""
          style={{
            width: "10%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {" "}
          <img
            src={userimg} // Replace with your image URL
            alt={userimg}
            style={{
              width: "36px",
              height: "36px",
              // borderRadius: '50%',
            }}
          />
        </div>
        <div
          className=""
          style={{
            flex: "1",
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            className=""
            style={{
              display: "flex",
              justifyContent: "space-between",
              flex: "1",
              alignItems: "center",
            }}
          >
            <p
              className=""
              style={{ padding: "0", margin: "0", width: "fit-content" }}
            >
              @username
            </p>
            <div
              className=""
              style={{
                padding: "0",
                margin: "0",
                display: "flex",
                alignItems: "center",
                width: "65%",
                // justifyContent: "space-between",
              }}
            >
              <div
                className=""
                style={{ display: "flex", whiteSpace: "nowrap", flex: "1" }}
              >
                <img
                  src={comments}
                  alt={comments}
                  style={{
                    width: "18px",
                    height: "18px",
                    margin: " 0 5%",
                    // borderRadius: '50%',
                  }}
                />
                <p style={{ padding: "0", margin: "0", flex: "1" }}> details</p>
              </div>
              <div
                className=""
                style={{ display: "flex", whiteSpace: "nowrap", flex: "1" }}
              >
                <img
                  src={Star}
                  alt={Star}
                  style={{
                    width: "18px",
                    height: "18px",
                    // margin: " 0 5%",
                    // borderRadius: '50%',
                  }}
                />
                <p style={{ padding: "0", margin: "0", flex: "1" }}> 3 stars</p>
              </div>
            </div>
          </div>
          <div
            className=""
            style={{ flex: "1", display: "flex", alignItems: "center" }}
          >
            <p
              style={{
                padding: "0",
                margin: "0",
                width: "fit-content",
                height: "fit-content",
              }}
              className=""
            >
              Created 5 months ago
            </p>
          </div>
        </div>
      </div>
      <div className="" style={{ height: "48%" }}>
        <div
          style={{
            border: "1px solid #1E2D3D",
            borderRadius: "15px",
            width: "95%",
            height: "100%",
            display: "flex",
          }}
        >
          <div className="" style={{ flex: "1", overflowX: "auto" }}>
            <div
              className="code-container "
              style={{ height: "100%", margin: "0", padding: "0" }}
            >
              {" "}
              {/* Container for horizontal scrolling */}
              <SyntaxHighlighter
                language="javascript"
                style={{ ...solarizedlight }} // Use your desired code highlighting style
                className="black-background" // Apply the CSS class for black background
                customStyle={{
                  color: "red", // Color for function names
                  ".variable": {
                    color: "blue", // Color for variables
                  },
                  ".comment": {
                    color: "green", // Color for comments
                  },
                }}
              >
                {codeSnippet}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeadTags = () => {
  return (
    <div
      style={{
        borderRight: "1px solid #1e2d3d",
        paddingInline: "12.18px",
        display: "flex",
        alignItems: "center",
      }}
    >
      personal-info
      <img
        src={closeIcon}
        alt={closeIcon}
        height="13px"
        width="13px"
        style={{ marginLeft: "49.1px" }}
      />
    </div>
  );
};

const DashBoard = () => {
  const [showInfo, setShowInfo] = useState(true);
  const [showContact, setShowContact] = useState(true);
  return (
    <Row className={`${styles.container} `}>
      <Col
        className={`${styles.dashBoardImg} ${styles.defaultMargin} `}
        md={{ span: "3" }}
      >
        <div>
          <img src={icon2} alt={icon2} />
          <img src={icon1} alt={icon1} />
          <img src={hobbiesIcon} alt={hobbiesIcon} />
        </div>
      </Col>
      <Col
        className={`${styles.dashBoardMainContent} ${styles.defaultMargin} `}
        md={{ span: "9" }}
      >
        <div className={`${styles.container} `}>
          <div
            className={`${styles.dashBoardContentHeader} ${styles.defaultMargin}`}
            md={{ span: "12", offset: "" }}
            onClick={() => setShowInfo((prev) => !prev)}
          >
            <img
              src={solidDown}
              alt={solidDown}
              className={showInfo && `${styles.activeFile}`}
            />{" "}
            <h5>personal-info</h5>
          </div>
          {showInfo && (
            <div
              className={` ${styles.dashBoardContentMenu} ${styles.defaultMargin} `}
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
              className={showContact && `${styles.activeFile}`}
            />{" "}
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
    <ul>
      {contactItems.map((items) => (
        <li key={items.label} style={{}}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              overflowWrap: "break-word",
            }}
          >
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
        <li
          key={items.label}
          onClick={() => handleClick(items.label, active, setActive)}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
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
  return (
    <ul>
      {subData.map((items) => (
        <li
          key={items.label}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
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
  return (
    <Row className={`${styles.container} `}>
      <Col
        className={`${styles.dashBoard} ${styles.defaultMargin}`}
        md={{ span: "3" }}
      >
        <DashBoard />
      </Col>
      <Col className={`${styles.dashBoardContent} ${styles.defaultMargin} `}>
        <DashBoardContent />
      </Col>
    </Row>
  );
}

export default About;
