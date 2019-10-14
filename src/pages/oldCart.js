import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./cartLayout";
import util from "util";
import { ThemeContext } from "../App";

export default function NewCart() {
  const context = useContext(ThemeContext);
  const { setProductProperty } = context;
  const [products, setProducts] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  let temp = [];
  let tempSubtotal = 0;
  const clearContext = () => {
    setProductProperty({});
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
            price={JSON.parse(products[i]).productPrice}
            image={JSON.parse(products[i]).preview}
          />
        );
      }
      return temp;
    }
  };

  useEffect(() => {
    getProducts();
    clearContext();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          console.log(JSON.parse(products[4]).material);
        }}
      >
        {" "}
        products
      </button>
      <div className="container" style={{ marginTop: 50, marginBottom: 50 }}>
        <div className="row">
          <div className="col-sm-12 col-md-10 col-md-offset-1">
            <div className="table-responsive">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th className="text-center">Price</th>
                    <th className="text-center">Total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {setLayout()}
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td className="text-right">
                      <h5>
                        <strong>₹ {tempSubtotal}</strong>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <h5>Estimated shipping</h5>
                    </td>
                    <td className="text-right">
                      <h5>
                        <strong>₹ {"Shipping Price Algo"}</strong>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <h3>Total</h3>
                    </td>
                    <td className="text-right">
                      <h3>
                        <strong>₹ {"Total Price"}</strong>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <Link to="/CreateYourPrint">
                        <button type="button" className="btn btn-default">
                          Continue Shopping
                        </button>
                      </Link>
                    </td>
                    <td>
                      <Link to="/checkout">
                        <button
                          type="button"
                          id="checkout"
                          className="btn btn-warning"
                        >
                          Checkout
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
