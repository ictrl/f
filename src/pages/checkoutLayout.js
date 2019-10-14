import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import { ssContext } from "../App";

export const cartContext = React.createContext({});

export default function Layout({
  styleName = "",
  material = "",
  sizes = "",
  productPrice = null,
  image = ""
}) {
  return (
    <>
      <div className="col-md-12 p-04">
        <div className="col-md-8 pa-0">
          <div className="col-md-4 p-04">
            <img src={image} width={80} alt />
          </div>
          <div className="col-md-8">
            <p style={{ verticalAlign: "50%" }}>
              <b>{material}</b> <br /> {styleName}{" "}
              <span style={{ float: "right" }}>₹{productPrice}</span>
            </p>
            <p>Qty: 1</p>
            <p>Size: {sizes}</p>
          </div>
        </div>
        <div className="col-md-4"></div>
      </div>
    </>
  );
}
