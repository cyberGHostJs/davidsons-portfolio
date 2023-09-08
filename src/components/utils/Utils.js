import React, { useState, useEffect, useCallback } from "react";
import { Col, Row } from "react-bootstrap";
import menuIcon from "../home-screen/img/menuIcon.png";
// import closeIcon from "../home-screen/img/closeIcon.png";
import arrowUp from "../home-screen/img/UpArrow.png";
import arrowsDwn from "../home-screen/img/DownArrow.png";
import arrowLeft from "../home-screen/img/LeftArrow.png";
import arrowRight from "../home-screen/img/RightArrow.png";
import facebook from "../home-screen/img/facebook.png";
import twitter from "../home-screen/img/twitter.png";
import github from "../home-screen/img/github.png";
import bolt from "../home-screen/img/bolt-up-right.png";
import boltDwnL from "../home-screen/img/bolt-down-left.png";
import boltDnwR from "../home-screen/img/bolt-down-right.png";
// import SnakeFood1 from "../home-screen/img/SnakeFood1.png";

// snake game constants
const numRows = 20;
const numCols = 20;
const initialSnake = [{ row: 5, col: 5 }];
const initialDirection = "RIGHT";
const initialFood = { row: 10, col: 10 };
const snakeFeed = 10;

// navItems
const navItems = [
  { label: "_hello" },
  { label: "_about-me" },
  { label: "_projects" },
];

//  handles navigation clicks
const handleDefault = (menuItem, setSelectedOption) => {
  setSelectedOption(menuItem);
};
// numbersArray {reps how much food user must feed the snake to win}
const numbersArray = Array.from({ length: snakeFeed }, (_, index) => index + 1);

// SnakeGame
export const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [direction, setDirection] = useState(initialDirection);
  const [food, setFood] = useState(initialFood);
  const [isGameOver, setIsGameOver] = useState(false);

  useEffect(() => {
    const handleKeyPress = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection("LEFT");
          break;
        case "ArrowDown":
          setDirection("RIGHT");
          break;
        case "ArrowLeft":
          setDirection("UP");
          break;
        case "ArrowRight":
          setDirection("DOWN");
          break;
        default:
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const moveSnake = useCallback(() => {
    if (isGameOver) return;

    const newSnake = [...snake];
    let head = { ...newSnake[0] };

    switch (direction) {
      case "UP":
        head.row -= 1;
        break;
      case "DOWN":
        head.row += 1;
        break;
      case "LEFT":
        head.col -= 1;
        break;
      case "RIGHT":
        head.col += 1;
        break;
      default:
        break;
    }

    newSnake.unshift(head);

    if (head.row === food.row && head.col === food.col) {
      // Snake eats the food
      const newFood = {
        row: Math.floor(Math.random() * numRows),
        col: Math.floor(Math.random() * numCols),
      };
      setFood(newFood);
    } else {
      newSnake.pop(); // Remove the tail segment
    }

    setSnake(newSnake);

    // Check for game over conditions (e.g., collision with walls or self)
    if (
      head.row < 0 ||
      head.row >= numRows ||
      head.col < 0 ||
      head.col >= numCols ||
      newSnake
        .slice(1)
        .some((segment) => segment.row === head.row && segment.col === head.col)
    ) {
      setIsGameOver(true);
    }
  }, [direction, food, isGameOver, snake]);

  useEffect(() => {
    const gameInterval = setInterval(moveSnake, 200);

    return () => {
      clearInterval(gameInterval);
    };
  }, [moveSnake]);

  const restartGame = () => {
    setSnake(initialSnake);
    setDirection(initialDirection);
    setFood(initialFood);
    setIsGameOver(false);
    // setScore(0); // Reset the score
  };

  return (
    <div>
      <h1>Snake Game</h1>
      <div className="game-board">
        {Array.from({ length: numRows }).map((_, rowIndex) => (
          <div key={rowIndex} className="row">
            {Array.from({ length: numCols }).map((_, colIndex) => (
              <div
                key={colIndex}
                className={`cell ${
                  snake.some(
                    (segment) =>
                      segment.row === rowIndex && segment.col === colIndex
                  )
                    ? "snake"
                    : ""
                } ${
                  food.row === rowIndex && food.col === colIndex ? "food" : ""
                }`}
              ></div>
            ))}
          </div>
        ))}
      </div>
      {isGameOver && (
        <>
          {" "}
          <p>Game Over</p> <button onClick={restartGame}>Restart</button>{" "}
          {/* Restart button */}
        </>
      )}
    </div>
  );
};

// ------------------ TOP NAVIGATION ------------------------//
export const TopNavigation = ({ setSelectedOption, selectedOption }) => {
  return (
    <Row className="TopNavigationContainer ">
      <LogoAndMenuIcon />
      <NavItems
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <ContactMe
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </Row>
  );
};

// LogoAndMenuIcon
const LogoAndMenuIcon = () => {
  return (
    <>
      <Col className=" nameLogo" md="2">
        <h5>Davidson Onyebuchi</h5>
      </Col>
      {/* the menuIcon only displays in small screen */}
      <div className="menuBtnn">
        <img src={menuIcon} alt={menuIcon} />
      </div>
    </>
  );
};

// NavItems
const NavItems = ({ selectedOption, setSelectedOption }) => {
  return (
    <Col className="mainNavMenuContainer" md={{ span: "4", offset: "1" }}>
      <ul className="mainNavMenu">
        {navItems.map((dashboardMenu) => (
          <li
            className={` ${
              selectedOption === dashboardMenu.label ? "active" : ""
            }`}
            key={dashboardMenu.label}
            onClick={() =>
              handleDefault(dashboardMenu.label, setSelectedOption)
            }
          >
            {dashboardMenu.label}
          </li>
        ))}
      </ul>
    </Col>
  );
};

// ContactMe
const ContactMe = ({ selectedOption, setSelectedOption }) => {
  return (
    <Col className="contactMe" md={{ span: "2", offset: "3" }}>
      <div>
        <h5
          className={` ${selectedOption === "_contact-me" ? "active" : ""}`}
          onClick={() => handleDefault("_contact-me", setSelectedOption)}
        >
          _contact-me
        </h5>
      </div>
    </Col>
  );
};

// --------- BODY -----------//
export const Body = () => {
  return (
    <Row className="body-row relative">
      <Col className=" body-col right">
        {/* displays in bg of the hero-info for small screen*/}
        <BlurBgSmallS />
        <HeroInfo />
      </Col>
      <Col className="body-col displaySCreen">
        {/* displays in bg of the GameContainer for big screen*/}
        <BlurBgBigS />
        <GameContainer />
      </Col>
    </Row>
  );
};

// BlurBgSmall screeen
const BlurBgSmallS = () => {
  return (
    <>
      <div className="bg2_cl1 "></div>
      <div className="bg2_cl2 "></div>
    </>
  );
};

// HeroInfo
const HeroInfo = () => {
  return (
    <div className="info left ">
      <h5>Hi, I am</h5>
      <h1><span className="displaySCreen">I.O.</span> ERIC DAVIDSON</h1>
      <h4>&gt; Front-end developer</h4>
      {/* eslint-disable-next-line */}
      <p className="comment mrgTop displaySCreen">// complete the game to continue</p>
      {/* eslint-disable-next-line */}
      <p className="comment mdMarginTop">// find my profile on Github:</p>
      <p className="gitHubLinkCover">
        <span className="const">const</span>
        <span className="github"> githubLink</span> =
        <span className="link">“https://github.com/example/url”</span>
      </p>
    </div>
  );
};

// BlurBgBigS
const BlurBgBigS = () => {
  return (
    <>
      <div className="bg_cl1 "></div>
      <div className="bg_cl2 "></div>
    </>
  );
};

// GameContainer
const GameContainer = () => {
  return (
    <div className=" game_cover relative">
      <img
        src={bolt}
        alt={bolt}
        width="23px"
        height="23px"
        style={{ position: "absolute", top: "1%", left: "1%" }}
      />
      <img
        src={bolt}
        alt={bolt}
        width="23px"
        height="23px"
        style={{ position: "absolute", top: "1%", right: "1%" }}
      />
      <img
        src={boltDwnL}
        alt={boltDwnL}
        width="23px"
        height="23px"
        style={{ position: "absolute", bottom: "1%", left: "1%" }}
      />
      <img
        src={boltDnwR}
        alt={boltDnwR}
        width="23px"
        height="23px"
        style={{ position: "absolute", bottom: "1%", right: "1%" }}
      />
      <div className="game">
        <button>start-game</button>
      </div>
      <div className="game-params">
        <button className="skipBtn">skip</button>
        <GameInstruction />
        {/* eslint-disable-next-line  */}
        <p>// food left</p>
        <FoodLeft />
      </div>
    </div>
  );
};

// GameInstruction
const GameInstruction = () => {
  return (
    <div className="game-instructioin">
      <p>
        {/* eslint-disable-next-line  */}
        {/* eslint-disable-next-line  */}
        // use keyboard <br />
        {/* eslint-disable-next-line  */}
        {/* eslint-disable-next-line  */}
        // arrows to play
      </p>
      <div className="up">
        <img src={arrowUp} alt={arrowUp} width="100%" height="100%" />
      </div>
      <div className="arrowsContainer">
        <div className="up">
          <img src={arrowLeft} alt={arrowLeft} width="100%" height="100%" />
        </div>
        <div className="up">
          <img src={arrowsDwn} alt={arrowsDwn} width="100%" height="100%" />
        </div>
        <div className="up">
          <img src={arrowRight} alt={arrowRight} width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

// FoodLeft
const FoodLeft = () => {
  return (
    <div className="snakeFeed">
      {numbersArray.map((number, index) => (
        <span key={number}>
          {/* Insert a line break after every 5th number */}
          <input className="circle" disabled />
          {(index + 1) % 5 === 0 && <br />}
        </span>
      ))}
    </div>
  );
};

// ------------ BOTTOM NAVIGATION--------------------//
export const BottomNavigation = () => {
  return (
    <Row className="BottomNavigationContainer">
      <FindMeSocial />
      <GithubUserName />
    </Row>
  );
};

// FindMeSocial
const FindMeSocial = () => {
  return (
    <Col md={{ span: "3" }} className="BottomNavigationContainerCol">
      <div className="footerSectOne">
        <div className="footerSectOneTextCover">
          <h5 className="findMe">find me in:</h5>
        </div>
        <div className="socialLogoContainer">
          <img
            src={twitter}
            alt={twitter}
            width="23px"
            height="23px"
            className="img"
          />
        </div>
        <div className="socialLogoContainer">
          <img
            src={facebook}
            alt={facebook}
            width="23px"
            height="23px"
            className="img"
          />
        </div>
      </div>
    </Col>
  );
};

// GithubUserName
const GithubUserName = () => {
  return (
    <Col
      md={{ span: "", offset: "7" }}
      className="BottomNavigationContainerCol2"
    >
      <div className="">
        <h5 className="findMe">@cyberGHostJs</h5>
        <img src={github} alt={github} className="img" />
      </div>
    </Col>
  );
};
