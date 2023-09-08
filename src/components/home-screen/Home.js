import { Col, Container, Row } from "react-bootstrap";
import { Body, BottomNavigation, TopNavigation } from "../utils/Utils";
import { useState } from "react";
import styles from './home.module.css'
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
          <Body />
        </Col>
        <Col md="12" className={styles.bottomNav}>
          <BottomNavigation />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
