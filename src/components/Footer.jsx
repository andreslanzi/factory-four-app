import React from "react";
import { Footer as Footer2 } from "antd/lib/layout/layout";
import "../App.css";

const Footer = () => {
  return (
    <Footer2 style={{ textAlign: "center" }}>
      Created by{" "}
      <a
        href="https://andreslanziportfo.netlify.app/"
        target="_blank"
        rel="noreferrer"
      >
        <span>Andres Lanzi</span>
      </a>
    </Footer2>
  );
};

export default Footer;
