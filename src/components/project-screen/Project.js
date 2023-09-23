import { Col, Row } from "react-bootstrap";
import styles from "./project.module.css";
import { useContext, useEffect, useState } from "react";
import solidDown from "../about-screen/img/solidDown.png";
import closeIcon from "../home-screen/img/closeIcon.png";
import {
  reducerContext,
  // selectedOptionApi,
  todoTitle,
} from "../home-screen/Home";
import { profileData } from "../utils/Data";
import { Link } from "react-router-dom";
import { selectedOptionApi } from "../../App";

export const ProjectDashBoardCntent = () => {
  const { completTodos } = useContext(todoTitle);
  const { dispatch } = useContext(reducerContext);

  const handleReset = () => {
    dispatch({ type: "RESET" });
  };
  return (
    <Row className={` ${styles.container} ${styles.borderLeft}`}>
      <Col
        md={{ span: "12" }}
        style={{ display: "flex" }}
        className={` ${styles.contentHeaderCol} ${styles.defaultMargin} ${styles.borderRight} `}
      >
        <div
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
            <div
              className={`${styles.header} ${styles.ssNoborder}`}
            >{`${completTodos}`}</div>
            {completTodos.length > 0 && (
              <div className={`${styles.closeCover}  ${styles.ssNoborder}`}>
                <img src={closeIcon} alt={closeIcon} onClick={handleReset} />
              </div>
            )}
          </div>
          
          <div className={`${styles.projectItemsList} ${styles.ssNoborder}`}>
            <div
              className={` ${styles.profileCardContainer}`}
              style={{ flex: "1" }}
            >
              {completTodos &&
                profileData
                  .filter((profile) =>
                    completTodos.every((tag) => profile.tag.includes(tag))
                  )
                  .map((profile) => (
                    <ProjectCard key={profile.id} data={profile} />
                  ))}
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

const ProjectCard = ({ data }) => {
  return (
    <div className={` ${styles.profileCard}`}>
      <div className={styles.bgColor}>
        <div
          className={`${
            data.tag.includes("React") ? styles.react : styles.vue
          }`}
        >
          <img src={data.imgTag} alt={data.imgTag} />
        </div>
      </div>
      <img src={data.image} alt={data.name} />
      <p>{data.description}</p>
      <button className="">
        <Link className={styles.projectLink} target="_blank" to={data.link}>
          view-project
        </Link>
      </button>
    </div>
  );
};

export const ProjectDashBoard = () => {
  const [showInfo, setShowInfo] = useState(false);
  const { todos, dispatch } = useContext(reducerContext);
  const { setCompletedTodos } = useContext(todoTitle);
  const { selectedOption } = useContext(selectedOptionApi);

  useEffect(() => {
    // Filter the todos where todo.complete is true and set it in the state
    const completedTodos = todos.filter((todo) => todo.complete === true);
    setCompletedTodos(completedTodos.map((todo) => todo.title));
  }, [todos, setCompletedTodos]);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  return (
    <Row className={` ${styles.container} `}>
      <Col
        className={` ${styles.dashBoardMainContent} ${styles.defaultMargin} `}
        md={{ span: "12" }}
      >
        {<div className={styles.ssHeaders}>{selectedOption}</div>}
        <div className={` ${styles.container}`}>
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
            <h5>projects</h5>
          </div>
          {showInfo && (
            <div
              className={` ${styles.dashBoardContentMenu} ${styles.defaultMargin} `}
              md={{ span: "12", offset: "" }}
            >
              <ul>
                {todos.map((todo) => (
                  <li key={todo.id}>
                    <input
                      className={`checkbox ${styles.checkbox}`}
                      type="checkbox"
                      checked={todo.complete}
                      onChange={() => handleComplete(todo)}
                    />
                    <div
                      className={`${todo.complete ? styles.clr : ""} ${
                        styles.navItems
                      }`}
                    >
                      <img src={todo.imageSrc} alt={todo.imageSrc} />
                      {todo.title}
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
