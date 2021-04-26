import React, { useEffect, useState } from "react";
import { Route, Link, Switch, Router, useHistory } from "react-router-dom";
import {
  Button,
  Collapse,
  CardBody,
  Card,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";
import "./Intro.css";
import SignIn from "../components/user/SignIn";
import Main from "./Main";
import { Container, Row, Col } from "reactstrap";

const Intro = () => {
  const history = useHistory();
  const [toggleSignIn, setToggleSignIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const onClick = () => {
    history.push({
      pathname: `/signUp`,
    });
  };
  const goMain = () => {
    history.push({
      pathname: `/main`,
    });
  };
  const toggleSignInBtn = (e) => {
    setToggleSignIn(!toggleSignIn);
  };
  //컴포넌트가 mount 될 때 실행되는 것
  useEffect(() => {
    if (sessionStorage.getItem("email")) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div className="IntroContainer">
      {isLoggedIn === false ? (
        <div>
          <button
            className="LogInOutBtn"
            onClick={(e) => {
              toggleSignInBtn(e);
            }}
          >
            로그인
          </button>

          <button className="MiddleBtn" onClick={onClick}>
            계정 만들기
          </button>
        </div>
      ) : (
        <div>
          <button className="LogInOutBtn">logout</button>
          <button className="MiddleBtn" onClick={goMain}>
            미팅 즐기러 가기
          </button>
        </div>
      )}

      <Container>
        <Modal isOpen={toggleSignIn} style={{ width: "30%" }}>
          <ModalBody isOpen={toggleSignIn}>
            <button
              onClick={(e) => {
                toggleSignInBtn(e);
              }}
              style={{
                background: "transparent",
                border: "none",
                position: "absolute",
                left: "90%",
              }}
            >
              X
            </button>

            <Row>
              <SignIn />
            </Row>
          </ModalBody>
        </Modal>
      </Container>
    </div>
  );
};

export default Intro;
