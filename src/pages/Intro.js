import { useState, useContext, useEffect, Fragment } from "react";
import "../static/pages/Intro.scss";
import { LilitaOne } from "../components/styled/Font.styled";
import { useNavigate } from "react-router-dom";
import {
  Small,
  Medium,
  Large,
  RoundBox,
} from "../components/styled/Box.styled";
function Intro() {
  const navigate = useNavigate();

  return (
    <div className="intro">
      <LilitaOne>
        <div className="title">
          <div>Random</div>
          <div>Travel</div>
        </div>
        <div className="startBtn" onClick={() => navigate("/main")}>
          start
        </div>
      </LilitaOne>
    </div>
  );
}

export default Intro;
