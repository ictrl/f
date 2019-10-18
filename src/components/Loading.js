import React from "react";
import ReactLoading from "react-loading";

const Loading = ({ type, color }) => (
  <ReactLoading
    type="spinningBubbles"
    color="#FF9900"
    height="10%"
    width="10%"
    className="mx-auto"
  />
);
export default Loading;
