import { Col, Container, Row } from "react-bootstrap";
import { Body, BottomNavigation, TopNavigation } from "../utils/Utils";
import { useState } from "react";
import styles from './home.module.css'
import About from "../about-screen/About";
// import { SnakeGame } from "../utils/Utils";

function Home() {
  const [selectedOption, setSelectedOption] = useState("_hello");

  return (
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
          { selectedOption === "_about-me" && <About/>}
          { selectedOption === "_projects" && <p>_projects</p>}
          { selectedOption === "_contact-me" && <p>_contact-me</p>}
          
        </Col>
        <Col md="12" className={styles.bottomNav}>
          <BottomNavigation />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
