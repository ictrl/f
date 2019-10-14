import React, { useState, useContext, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { API } from "../config";
import Layout from "./checkoutLayout";

import { ssContext } from "../App";
let payMethod = "";

export default function Checkout() {
  const contextt = useContext(ssContext);
  const { summaryDetails, setSummaryDetails } = contextt;
  const [products, setProducts] = useState([]);
  let temp = [];
  let tempSubtotal = 0;

  const createPost = order => {
    // console.log(payMethod);
    // if (payMethod === "cod") {
    // console.log("equall");
    // return <Redirect to="/payment-complete" />;
    // } else {
    return fetch(`${API}/bid/pay`, {
      method: "POST",
      Accept: "application/json",
      "Content-Type": "application/json",
      body: JSON.stringify(order)
    })
      .then(res => res.text())
      .then(text => (window.location.href = text))
      .catch(err => {
        console.log(err);
      });
    // }
  };

  const saveUser = e => {
    // e.preventDefault();
    var f = document.getElementById("f").value;
    var l = document.getElementById("l").value;
    var a1 = document.getElementById("a1").value;
    var a2 = document.getElementById("a2").value;
    var a3 = document.getElementById("a3").value;
    var c = document.getElementById("c").value;
    var z = document.getElementById("z").value;
    var p = document.getElementById("p").value;
    var e = document.getElementById("e").value;

    if (document.getElementById("r1").checked) {
      payMethod = document.getElementById("r1").value;
    } else {
      payMethod = document.getElementById("r2").value;
    }

    const order = {
      purpose: "GalleriQ Payment",
      amount: summaryDetails.total,
      buyer_name: f + " " + l,
      email: e,
      phone: p,
      address: a1 + " " + a2 + " " + a3,
      user_id: "101",
      // redirect_url: `http://localhost:8001/bid/callback?user_id=${user.id}`,
      //redirect_url: `${API}/bid/callback?user_id=101`,
      redirect_url: "http://157.245.101.109/bid/callback?user_id=1010",
      webhook_url: "/webhook/"
    };
    createPost(order);
  };

  const getProducts = () => {
    let temp = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      var key = localStorage.key(i);
      var element = localStorage.getItem(key);
      temp.push(element);
    }
    setProducts(temp);
  };

  const setLayout = () => {
    if (products.length === 0) {
      return <h1>Your Cart is Empty</h1>;
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
          />
        );
      }
      return temp;
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="col-md-12" style={{ padding: "0 8rem 2rem 8rem" }}>
      <div className="col-md-12">
        <div className="col-md-3">
          <Link to="/login" style={{ textDecoration: "none", color: "black" }}>
            <p>
              Already have an account: <a href>Login here</a>
            </p>
          </Link>
        </div>
      </div>
      <div className="row" style={{ padding: 0 }}>
        <div
          id="checkout"
          className="col-lg-4 bg-f5"
          style={{ padding: 0, margin: 0 }}
        >
          <div className="col-md-12" style={{ padding: 0 }}>
            <div
              className="box-header p-04 btn-cart "
              style={{ display: "grid" }}
            >
              <h5
                className="mid-header p-04"
                style={{ textTransform: "uppercase", fontWeight: 550 }}
              >
                {" "}
                SHIPPING ADDRESS
              </h5>
            </div>
            <form
              method="get"
              action="shop-checkout2.html"
              className="chek-form1"
              style={{ padding: "0 1rem" }}
            >
              <div className="content">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="firstname">Email Address*</label>
                      <input type="email" id="e" className="form-control" />
                      <i>You Can Create An Account After Checkout</i>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="firstname">Firstname*</label>
                      <input id="f" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="lastname">Lastname*</label>
                      <input id="l" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="firstname">Street Address*</label>
                      <input id="a1" type="text" className="form-control" />
                      <br />
                      <input id="a2" type="text" className="form-control" />
                      <br />
                      <input id="a3" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="company">State/ Province*</label>
                      <select className="form-control">
                        <option value>Select</option>
                        <option value>Rajasthan</option>
                        <option value>Maharastra</option>
                        <option value>Gujrat</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="street">City*</label>
                      <input id="c" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="company">Zip/Postal Code*</label>
                      <input id="z" type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="form-group">
                      <label htmlFor="company">Country*</label>
                      <select className="form-control">
                        <option value>Select</option>
                        <option value>India</option>
                        <option value>USA</option>
                        <option value>UK</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-12">
                    <div className="form-group">
                      <label htmlFor="company">Phone Number*</label>
                      <input id="p" type="text" className="form-control" />
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="box mb-4  ">
            <div
              className="box-header p-04 btn-cart "
              style={{ display: "grid" }}
            >
              <h5
                className="mid-header p-04 "
                style={{ textTransform: "uppercase", fontWeight: 550 }}
              >
                SHIPPING AND HANDLING FEE
              </h5>
            </div>
            <div
              className="col-md-12 p-04 bg-f5"
              style={{ height: "10rem", marginBottom: "2rem" }}
            >
              <div className="col-md-6 p-04" style={{ marginTop: "3rem" }}>
                <h5 align="left">Shipping</h5>
              </div>
              <div className="col-md-6 p-04" style={{ marginTop: "3rem" }}>
                <h5 align="right">₹ {summaryDetails.shipping}</h5>
              </div>
            </div>
            <div
              className="box-header p-04 btn-cart  "
              style={{ display: "grid" }}
            >
              <h5
                className="mid-header p-04 "
                style={{ textTransform: "uppercase", fontWeight: 550 }}
              >
                PAYMENT METHOD
              </h5>
            </div>
            <div
              className="col-md-12  bg-f5 "
              style={{ wordSpacing: 3, letterSpacing: "0.8px" }}
            >
              <br />
              <input
                id="r1"
                type="radio"
                name="paymentMethod"
                defaultValue="online"
              />{" "}
              Pay Online By Credit/Debit Card, Netbanking
              <hr style={{ border: "0.4px solid rgb(221, 221, 221)" }} />
              <input
                id="r2"
                type="radio"
                name="paymentMethod"
                defaultValue="cod"
              />{" "}
              Cash On Delivery
              <br />
              <hr style={{ border: "0.4px solid rgb(221, 221, 221)" }} />
              <div className="col-md-12 col-xs-12" style={{ padding: 0 }}>
                <h4 style={{ fontSize: 16 }}> Apply Discount Code </h4>
              </div>
              <div
                className="col-md-12 "
                style={{ padding: 0, display: "flex" }}
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
        </div>
        <div className="col-lg-4 bg-f5">
          <div className="box mb-4 ">
            <div
              className="box-header p-04 btn-cart "
              style={{ display: "grid" }}
            >
              <h5
                className="mid-header p-04"
                style={{ textTransform: "uppercase", fontWeight: 550 }}
              >
                Order summary
              </h5>
            </div>
            <div className="col-md-12 p-04">
              <div className="col-md-6 p-04">
                <h5 align="left">CART SUBTOTAL</h5>
              </div>
              <div className="col-md-6 p-04">
                <h5 align="right">${summaryDetails.subtotal}</h5>
              </div>
            </div>
            <div className="col-md-12 p-04">
              <div className="col-md-6 p-04">
                <h5 align="left">SHIPPING</h5>
              </div>
              <div className="col-md-6 p-04">
                <h5 align="right">${summaryDetails.shipping}</h5>
              </div>
            </div>
            <div className="col-md-12 p-04">
              <div className="col-md-6 p-04">
                <h5 align="left">TAX</h5>
              </div>
              <div className="col-md-6 p-04">
                <h5 align="right">${summaryDetails.tax}</h5>
              </div>
            </div>
            <hr style={{ border: "0.4px solid rgb(221, 221, 221)" }} />
            <div className="col-md-12 p-04">
              <div className="col-md-6 p-04">
                <h4 style={{ fontWeight: 550 }} align="left">
                  ORDER TOTAL
                </h4>
              </div>
              <div className="col-md-6 p-04">
                <h4 style={{ fontWeight: 550 }} align="right">
                  ₹{summaryDetails.total}
                </h4>
              </div>
            </div>
            <div className="col-md-12 p-04">
              <h4 align="left">{products.length} Item in Cart</h4>
            </div>
            <hr style={{ border: "0.4px solid rgb(221, 221, 221)" }} />
            {setLayout()}
            <hr style={{ border: "0.4px solid rgb(221, 221, 221)" }} />
            <div className="col-md-12">
              <Link to="/payment-complete">
                <button
                  type="submit"
                  className="btn btn-cart p-04 m-top-3"
                  style={{ width: "100%" }}
                  onClick={saveUser}
                >
                  Place Order
                  <i className="fa fa-chevron-right" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
