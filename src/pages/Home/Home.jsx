import React from "react";
import Spline from "@splinetool/react-spline";
import "./home.css";

import { FaBolt, FaCode, FaSquareFull } from "react-icons/fa";

import LiveClockUpdate from "../../components/LiveClockUpdate/LiveClockUpdate";

const Home = () => {
  return (
    <>
      <div
        style={{
          position: "relative",
          width: "100vw",
          height: "100vh",
          zIndex: 0,
        }}
      >
        <Spline scene="https://prod.spline.design/BNaurVSeS57NeyWI/scene.splinecode" />
      </div>

      <div className="hero-header">
        <h1>Coding and Engineering</h1>
        <h1>By Uma Mahesh</h1>
      </div>

      <div className="home-logo">
        <FaBolt size="20px" style={{ color: "#fff" }} />
      </div>

      <div className="live-clock">
        <LiveClockUpdate />
      </div>
    </>
  );
};

export default Home;
