import React from "react";
import { Spin } from "antd";

const Loader = () => (
  <>
    <div className="loader">
      <Spin size="large" />
      <h1>Loading</h1>
    </div>
  </>
);

export default Loader;
