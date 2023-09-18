import { Col, Container, Row } from "react-bootstrap";
import { Body, BottomNavigation, TopNavigation } from "../utils/Utils";
import { createContext, useState } from "react";
import styles from "./home.module.css";
import About from "../about-screen/About";
// import Project from "../project-screen/Project";
// import { SnakeGame } from "../utils/Utils";

export const selectedOptionApi = createContext();
export const showApi = createContext();

function Home() {
  const [show, setShow] = useState(false);

  const handleClick = (label) => {
    setShow(false);
    setSelectedOption(label);
  };

  const [selectedOption, setSelectedOption] = useState("_hello");
  return (
    <showApi.Provider value={{ setShow }}>
      <selectedOptionApi.Provider value={{ selectedOption, setSelectedOption }}>
        <Container fluid className={styles.homeContainer}>
          <Row className={`${styles.homeContainerRow}`}>
            { (
              <div
                className={`${styles.ssMenu} ${show ? styles["slide-in"] : styles["slide-out"] }`}
              >
                <ul>
                  <li
                    className={styles.marginTopLi}
                    onClick={() => handleClick("_hello")}
                  >
                    _hello
                  </li>
                  <li onClick={() => handleClick("_about-me")}>_about-me</li>
                  <li onClick={() => handleClick("_projects")}>_projects</li>
                  <li
                    className={styles.borderbottom}
                    onClick={() => handleClick("_contact-me")}
                  >
                    _contact-me
                  </li>
                </ul>

                <li>two</li>
              </div>
            )}
            <Col md="12" className={`${styles.topNav} `}>
              <TopNavigation
                setSelectedOption={setSelectedOption}
                selectedOption={selectedOption}
              />
            </Col>
            <Col md="12" className={styles.body}>
              {selectedOption === "_hello" && <Body />}
              {selectedOption !== "_hello" && (
                <About selectedOption={selectedOption} />
              )}
              {/* { selectedOption === "_projects" && <Project/>} */}
              {/* { selectedOption === "_contact-me" && <p>_contact-me</p>} */}
            </Col>
            <Col md="12" className={styles.bottomNav}>
              <BottomNavigation />
            </Col>
          </Row>
        </Container>
      </selectedOptionApi.Provider>
    </showApi.Provider>
  );
}

export default Home;
