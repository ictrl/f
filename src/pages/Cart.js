import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Layout from "./cartLayout";
import util from "util";

export default function NewCart() {
  const [products, setProducts] = useState([]);
  const temp = [];

  let key = localStorage.length;
  const getProducts = () => {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      var key = localStorage.key(i);
      var element = localStorage.getItem(key);
      temp.push(element);
      setProducts(...products, temp);
    }
  };

  const setLayout = () => {
    if (key === 1 && products == !null) {
      return (
        <>
          <Layout
            material={"JSON.parse(products[0].material)"}
            styleName={"JSON.parse(products[0].styleName)"}
            sizes={"JSON.parse(products[0].size)"}
            price={"JSON.parse(products[0]).productPrice "}
            image={"JSON.parse(products[0].preview)"}
          />
        </>
      );
    } else if (key === 2 && products[0] == !null) {
      return (
        <>
          <Layout
            material={products[0].material}
            styleName={products[0].styleName}
            sizes={products[0].size}
            price={products[0].productPrice}
            image={products[0].preview}
          />
          <Layout
            material={products[1].material}
            styleName={products[1].styleName}
            sizes={products[1].size}
            price={products[1].productPrice}
            image={products[1].preview}
          />
        </>
      );
    } else if (key === 3 && products[0] == !null) {
      return (
        <>
          <Layout
            material={products[0].material}
            styleName={products[0].styleName}
            sizes={products[0].size}
            price={products[0].productPrice}
            image={products[0].preview}
          />
          <Layout
            material={products[1].material}
            styleName={products[1].styleName}
            sizes={products[1].size}
            price={products[1].productPrice}
            image={products[1].preview}
          />
          <Layout
            material={products[2].material}
            styleName={products[2].styleName}
            sizes={products[2].size}
            price={products[2].productPrice}
            image={products[2].preview}
          />
        </>
      );
    } else if (key === 4 && products[0] == !null) {
      return (
        <>
          <Layout
            material={products[0].material}
            styleName={products[0].styleName}
            sizes={products[0].size}
            price={products[0].productPrice}
            image={products[0].preview}
          />
          <Layout
            material={products[1].material}
            styleName={products[1].styleName}
            sizes={products[1].size}
            price={products[1].productPrice}
            image={products[1].preview}
          />
          <Layout
            material={products[2].material}
            styleName={products[2].styleName}
            sizes={products[2].size}
            price={products[2].productPrice}
            image={products[2].preview}
          />
          <Layout
            material={products[3].material}
            styleName={products[3].styleName}
            sizes={products[3].size}
            price={products[3].productPrice}
            image={products[3].preview}
          />
        </>
      );
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          console.log(
            util.inspect(JSON.parse(products[0]).productPrice, {
              depth: null
            })
          );
        }}
      >
        {" "}
        productPrice
      </button>
      <button
        onClick={() => {
          console.log(
            util.inspect(products, {
              depth: null
            })
          );
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
                        <strong>₹ {"Total Product Price"}</strong>
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
