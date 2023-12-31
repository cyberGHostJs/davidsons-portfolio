import { Col, Row } from "react-bootstrap";
import styles from "./project.module.css";
import { useCallback, useContext, useEffect, useState } from "react";
import solidDown from "../about-screen/img/solidDown.png";
import closeIcon from "../home-screen/img/closeIcon.png";
import { reducerContext, todoTitle } from "../home-screen/Home";
import { profileData } from "../utils/Data";
import { Link } from "react-router-dom";
import { SmallScreenHeader } from "../utils/Utils";

export const ProjectDashBoardCntent = () => {
  const { completTodos } = useContext(todoTitle);
  const { dispatch } = useContext(reducerContext);

  const handleReset = useCallback(() => {
    dispatch({ type: "RESET" });
  },[dispatch])
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
          }}
        >
          <div className={` ${styles.headerCover} ${styles.ssNoborder}`}>
            <div
              className={`${styles.header} ${styles.ssNoborder}`}
            >{`${completTodos}`} {completTodos < 1 ? '// projects / all': ''}</div>
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
    <div>
      <h5 className={styles.projectHead}><span>project {data.id}</span>//_{data.name}</h5>
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
      <button className="" style={{ marginBottom: '5%'}}>
        <Link className={styles.projectLink} target="_blank" to={data.link}>
          view-project
        </Link>
      </button>
    </div>
    </div>
  );
};

export const ProjectDashBoard = () => {
  const [showInfo, setShowInfo] = useState(true);
  const { todos, dispatch } = useContext(reducerContext);
  const { setCompletedTodos } = useContext(todoTitle);

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
        <SmallScreenHeader />
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
