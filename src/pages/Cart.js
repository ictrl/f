import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./cartLayout";
import { ThemeContext, ssContext } from "../App";

export default function NewCart() {
  const context = useContext(ThemeContext);
  const contextt = useContext(ssContext);
  const { setProductProperty } = context;
  const { summaryDetails, setSummaryDetails } = contextt;
  const [products, setProducts] = useState([]);
  let temp = [];
  let tempSubtotal = 0;
  const clearContext = () => {
    setProductProperty({});
  };

  const getProducts = () => {
    let temp = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      var key = localStorage.key(i);
      if (key.slice(0, 7) == "Product") {
        var element = localStorage.getItem(key);
        element = JSON.parse(element);
        element.key = key;
        element = JSON.stringify(element);
        temp.push(element);
      }
    }
    setProducts(temp);
  };

  const setLayout = () => {
    if (products.length === 0) {
      return (
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <div className="jumbotron center">
            <h1> Your Cart is Empty</h1>
            <a>Continue Shopping!</a>
          </div>
        </Link>
      );
    } else {
      for (let i = 0; i < products.length; i++) {
        tempSubtotal = tempSubtotal + JSON.parse(products[i]).productPrice;
        temp.push(
          <Layout
            material={JSON.parse(products[i]).material}
            styleName={JSON.parse(products[i]).styleName}
            sizes={JSON.parse(products[i]).size}
            productPrice={JSON.parse(products[i]).productPrice}
            image={JSON.parse(products[i]).preview}
            productKey={JSON.parse(products[i]).key}
          />
        );
      }
      return temp;
    }
  };

  const updateCart = () => {
    if (products.length === 0) {
      setSummaryDetails({
        ...summaryDetails,
        subtotal: 0,
        total: 0,
        tax: 0,
        shipping: 0
      });
    } else {
      setSummaryDetails({
        ...summaryDetails,
        subtotal: tempSubtotal,
        total: summaryDetails.subtotal + 200,
        tax: 100,
        shipping: 100
      });
    }
  };

  useEffect(() => {
    getProducts();
    clearContext();
    updateCart();
  }, [summaryDetails]);

  return (
    <div className=" col-md-12" style={{ padding: "0 8rem 2rem 5rem" }}>
      <div className="col-md-12">
        <center>
          <h2>SHOPPING CART</h2>
        </center>
      </div>
      <div className="col-md-12">
        <div className="col-md-9 cart-products">
          <div
            className="col-md-12"
            style={{ padding: "0 3rem", marginTop: "2rem" }}
          >
            <div className="col-md-12" style={{ padding: 0 }}>
              <div className="col-md-7 col-xs-7" style={{ padding: 0 }}>
                <h5 className="product-property-item" align=" left">
                  ITEM{" "}
                </h5>
              </div>
              <div className="col-md-5 col-xs-5 product-property-item ">
                <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                  <div className="  col-md-4 col-sm-4 col-lg-4  col-xs-4 ">
                    <h5 align="center">PRICE</h5>
                  </div>
                  <div className="col-xs-4">
                    <h5 align="center">QTY</h5>
                  </div>
                  <div className="col-xs-4">
                    <h5 align="center">SUBTOTAL</h5>
                  </div>
                </div>
              </div>
            </div>
            <hr style={{ border: "0.25px solid rgb(198, 196, 196)" }} />

            {setLayout()}

            <div className="col-md-12 col-xs-12" style={{ padding: "0" }}>
              <h4 style={{ fontSize: 16, margin: "5px 0" }}>
                {" "}
                Apply Discount Code{" "}
              </h4>
            </div>
            <div
              className="col-md-12"
              style={{ display: "flex", padding: "0" }}
            >
              <input
                type="text"
                className="text-discount "
                placeholder="Enter Discount Code"
              />
              <input
                className="text-apply-discount"
                type="button"
                defaultValue="APPLY DISCOUNT"
              />
            </div>
          </div>
        </div>
        <div className="col-md-3  payment-summary ">
          <div className="col-md-12 ">
            <h3 className="summary-header">Summary</h3>
          </div>
          <div className=" col-md-12 " style={{ padding: 0 }}>
            <hr style={{ border: "0.25px solid rgb(206, 205, 205)" }} />
            <div className="col-md-12 col-xs-12" style={{ padding: 0 }}>
              <div className="col-md-6 col-xs-6" style={{ padding: 0 }}>
                <h5 align=" left">SUBTOTAL</h5>
              </div>
              <div className="col-md-6" style={{ padding: 0 }}>
                <h5 align="right"> ₹{summaryDetails.subtotal}</h5>
              </div>
            </div>
            <div className="col-md-12" style={{ padding: 0 }}>
              <div className="col-md-8" style={{ padding: 0 }}>
                <h5 align="left">SHIPPING</h5>
              </div>
              <div className="col-md-4" style={{ padding: 0 }}>
                <h5 align="right">₹{summaryDetails.shipping}</h5>
              </div>
            </div>
            <div className="col-md-12" style={{ padding: 0 }}>
              <div className="col-md-6" style={{ padding: 0 }}>
                <h5 align=" left">TAX</h5>
              </div>
              <div className="col-md-6" style={{ padding: 0 }}>
                <h5 align="right">₹{summaryDetails.tax}</h5>
              </div>
              <hr style={{ border: "0.5px solid rgb(168, 167, 167)" }} />
              <div
                className="col-md-12"
                style={{ padding: 0, marginTop: "-1rem" }}
              >
                <div className="col-md-8" style={{ padding: 0 }}>
                  <h4 style={{ fontWeight: 540 }} align="left">
                    ORDER TOTAL
                  </h4>
                </div>
                <div className="col-md-4" style={{ padding: 0 }}>
                  <h4 style={{ fontWeight: 600 }} align="right">
                    ₹{summaryDetails.total}
                  </h4>
                </div>
              </div>
              <center>
                {" "}
                <Link to="/checkout">
                  <button
                    type="submit"
                    style={{
                      borderRadius: 3,
                      width: "23rem",
                      marginTop: "3rem"
                    }}
                    className="btn btn-cart cart-checkout"
                  >
                    Checkout
                    <i className="fa fa-chevron-right" />
                  </button>
                </Link>
                <center></center>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
