import React, { useState, useContext } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import { ssContext } from "../App";

export const cartContext = React.createContext({});

export default function Layout({
  styleName = "",
  material = "",
  sizes = "",
  productPrice = null,
  image = "",
  productKey = ""
}) {
  const contextt = useContext(ssContext);
  const { summaryDetails, setSummaryDetails } = contextt;

  const [setQuantity] = useState(1);
  const [totalProductPrice, setTotalProductPrice] = useState(productPrice);

  const handleChange = event => {
    const value =
      event.target.value <= 0 ? (event.target.value = 1) : event.target.value;
    setQuantity(value);
    setTotalProductPrice(value * productPrice);
  };

  const deleteProduct = e => {
    localStorage.removeItem(e.target.alt);
    setSummaryDetails({ ...summaryDetails });
  };

  return (
    <>
      <div className="col-md-12" style={{ padding: 0 }}>
        <div className="col-md-7 col-xs-7" style={{ padding: 0 }}>
          <div className="com-md-12" style={{ padding: 0 }}>
            <div className="col-md-8 col-xs-8" style={{ padding: 0 }}>
              <div className="col-md-3 col-xs-3" style={{ padding: 0 }}>
                <img style={{ padding: 0 }} src={image} width={64} alt />
              </div>
              <div className=" col-md-9 cart-img">
                <p align="left">
                  <b> {material} </b> {styleName}{" "}
                </p>
                <p style={{ width: "170px" }}>
                  <span style={{ fontWeight: "600", width: "170px" }}>
                    Size:
                  </span>{" "}
                  {sizes}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-xs-5">
          <div className="col-md-4 col-xs-4">
            <h5 align="center">₹ {productPrice}</h5>
          </div>
          <div className="col-md-4 col-xs-4" style={{ textAlign: "center" }}>
            <input
              style={{
                width: 40,
                padding: "4px 7px",
                border: "0.4px solid rgb(216, 214, 214)"
              }}
              type="number"
              defaultValue={1}
              min={1}
              max={190}
              // onChange={handleChange}
              value="1"
            />
          </div>
          <div className="col-md-4">
            <h5 align="center">₹ {totalProductPrice}</h5>
          </div>
        </div>
      </div>
      <div
        className="col-md-12 col-xs-12"
        style={{ padding: 0, marginBottom: "2rem" }}
      >
        <div className="col-md-7 col-xs-7" style={{ padding: 0 }}></div>
        <div className="col-md-5 col-xs-5">
          <div className="col-md-4 col-xs-4"></div>
          <div className="col-md-4 col-xs-4"></div>
          <div className="col-md-4 col-xs-4 text-right">
            <Link to="/createYourPrint">
              <img
                onClick={deleteProduct}
                src={require("../images/edit.png")}
                height="20px"
                width="20px"
                alt={productKey}
              />
            </Link>
            &nbsp;
            <img
              onClick={deleteProduct}
              src={require("../images/trash.png")}
              height="20px"
              width="20px"
              alt={productKey}
            />
          </div>
        </div>
      </div>
      <hr style={{ border: "0.25px solid rgb(198, 196, 196)" }} />
    </>
  );
}
