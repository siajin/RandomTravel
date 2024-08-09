import { useState, useContext, useEffect, Fragment } from "react";
import "../static/pages/Main.scss";
import { useNavigate } from "react-router-dom";
import {
  Small,
  Medium,
  Large,
  RoundBox,
} from "../components/styled/Box.styled";
import { LilitaOne } from "../components/styled/Font.styled";
function Main() {
  const navigate = useNavigate();
  var bgLines = new Array();
  for (var i = 0; i < 15; i++) {
    var bgTexts = new Array();
    for (var j = 0; j < 15; j++) {
      bgTexts.push("Random Travel");
    }
    bgLines.push(bgTexts);
  }
  return (
    <Fragment>
      <div className="bg">
        {bgLines.map((line, i) => (
          <div className={"line" + (i % 2 == 1 ? " left" : " right")} key={i}>
            {line.map((text, j) => (
              <LilitaOne key={j}>{text}</LilitaOne>
            ))}
          </div>
        ))}
      </div>

      <div className="main">
        <Small>
          <RoundBox>asdf</RoundBox>
        </Small>
        <Medium>
          <RoundBox>asdf</RoundBox>
        </Medium>
        <Large>
          <RoundBox>asdf</RoundBox>
        </Large>
      </div>
    </Fragment>
  );
}

export default Main;
