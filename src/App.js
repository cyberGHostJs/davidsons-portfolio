import { createContext, useState } from "react";
import "./App.css";
// import { Route, Routes } from 'react-router-dom';
import Home from "./components/home-screen/Home";
import styles from "./components/home-screen/home.module.css";
// import About from './components/about-screen/About';

export const selectedOptionApi = createContext();
export const showApi = createContext();

function App() {
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState("_hello");

  const handleClick = (label) => {
    setShow(false);
    setSelectedOption(label);
  };

  return (
    <showApi.Provider value={{ setShow }}>
      <selectedOptionApi.Provider value={{ selectedOption, setSelectedOption }}>
        <>
          {
            <div
              className={`${styles.ssMenu} ${
                show ? styles["slide-in"] : styles["slide-out"]
              }`}
            >
              <ul>
                <li
                  className={`${styles.marginTopLi} ${
                    selectedOption === "_hello" ? "currentItem" : ""
                  }`}
                  onClick={() => handleClick("_hello")}
                >
                  _hello
                </li>
                <li
                  onClick={() => handleClick("_about-me")}
                  className={`${
                    selectedOption === "_about-me" ? "currentItem" : ""
                  }`}
                >
                  _about-me
                </li>
                <li
                  onClick={() => handleClick("_projects")}
                  className={`${
                    selectedOption === "_projects" ? "currentItem" : ""
                  }`}
                >
                  _projects
                </li>
                <li
                  onClick={() => handleClick("_contact-me")}
                  className={`${styles.borderbottom} ${
                    selectedOption === "_contact-me" ? "currentItem" : ""
                  }`}
                >
                  _contact-me
                </li>
              </ul>

              <li>two</li>
            </div>
          }
          <Home />
          {/* <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>  */}
        </>
      </selectedOptionApi.Provider>
    </showApi.Provider>
  );
}

export default App;
