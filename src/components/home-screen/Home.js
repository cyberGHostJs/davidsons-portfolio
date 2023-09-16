import { Col, Container, Row } from "react-bootstrap";
import { Body, BottomNavigation, TopNavigation } from "../utils/Utils";
import { createContext, useState } from "react";
import styles from './home.module.css'
import About from "../about-screen/About";
// import Project from "../project-screen/Project";
// import { SnakeGame } from "../utils/Utils";

export const selectedOptionApi = createContext()

function Home() {
  const [selectedOption, setSelectedOption] = useState("_hello");
  return (
<selectedOptionApi.Provider value={selectedOption}>
    <Container fluid className={styles.homeContainer}>
      <Row className={styles.homeContainerRow}>
        <Col md="12" className={styles.topNav}>
          <TopNavigation
            setSelectedOption={setSelectedOption}
            selectedOption={selectedOption}
          />
        </Col>
        <Col md="12" className={styles.body}>
          { selectedOption === "_hello" && <Body />}
          { selectedOption !== "_hello" && <About selectedOption={selectedOption}/>}
          {/* { selectedOption === "_projects" && <Project/>} */}
          {/* { selectedOption === "_contact-me" && <p>_contact-me</p>} */}
          
        </Col>
        <Col md="12" className={styles.bottomNav}>
          <BottomNavigation />
        </Col>
      </Row>
    </Container>
    </selectedOptionApi.Provider>
  );
}

export default Home;
