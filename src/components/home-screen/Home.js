import { Col, Container, Row } from "react-bootstrap";
import { Body, BottomNavigation, TopNavigation } from "../utils/Utils";
import { createContext, useReducer, useState } from "react";
import styles from "./home.module.css";
import About from "../about-screen/About";
import { menuOptions, reducer } from "../utils/Data";
import SmallScreenMenu from "../utils/SmallScreenMenu";
// import Project from "../project-screen/Project";
// import { SnakeGame } from "../utils/Utils";

export const selectedOptionApi = createContext();
export const showApi = createContext();

export const todoTitle = createContext();
export const reducerContext = createContext();
export const viewContext = createContext();

function Home() {
  const [completTodos, setCompletedTodos] = useState([]);
  const [todos, dispatch] = useReducer(reducer, menuOptions);
  const [view, setView] = useState("about-me");
  const [show, setShow] = useState(null);

  const [selectedOption, setSelectedOption] = useState("_hello");
  return (
    <viewContext.Provider value={{ view, setView }}>
      <reducerContext.Provider value={{ todos, dispatch }}>
        <todoTitle.Provider value={{ completTodos, setCompletedTodos }}>
          <showApi.Provider value={{ setShow }}>
            <selectedOptionApi.Provider
              value={{ selectedOption, setSelectedOption }}
            >
              <Container fluid className={styles.homeContainer}>
                <Row className={`${styles.homeContainerRow}`}>
                  {
                    <div
                      className={`${styles.ssMenu} ${
                        show ? styles["slide-in"] : styles["slide-out"]
                      }`}
                    >
                      <SmallScreenMenu />
                    </div>
                  }
                  <Col md="12" className={`${styles.topNav} `}>
                    <TopNavigation />
                  </Col>
                  <Col md="12" className={styles.body}>
                    {selectedOption === "_hello" ? (
                      <About />
                    ) : (
                      <About/>
                    )}
                  </Col>
                  <Col md="12" className={styles.bottomNav}>
                    <BottomNavigation />
                  </Col>
                </Row>
              </Container>
            </selectedOptionApi.Provider>
          </showApi.Provider>
        </todoTitle.Provider>
      </reducerContext.Provider>
    </viewContext.Provider>
  );
}

export default Home;
