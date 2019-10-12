import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import util from "util";
// import Cart from "./Cart";

export const cartContext = React.createContext({});

export default function Layout({
  styleName = "",
  material = "",
  sizes = "",
  price = null,
  image = ""
}) {
  const [quantity, setQuantity] = useState(1);
  const [calculatedPrice, setCalculatedPrice] = useState(price);

  const handleChange = event => {
    const value =
      event.target.value <= 0 ? (event.target.value = 1) : event.target.value;
    setQuantity(value);
    setCalculatedPrice(value * price);
  };

  useEffect(() => {}, []);

  return (
    <>
      {/* <cartContext.Provider value={{ calculatedPrice, setCalculatedPrice }}>
        <Cart />
      </cartContext.Provider> */}

      <tr>
        <td className="col-md-6">
          <div className="media">
            <a className="thumbnail pull-left" href="#">
              {" "}
              <img className="media-object cart-img" src={image} />
            </a>
            <div className="media-body cart-body">
              <h4 className="media-heading">
                <a href="#">{material}</a> <br />
                <a href="#">{styleName}</a>
              </h4>
              <h6 className="media-heading">Size : {sizes}</h6>
            </div>
          </div>
        </td>
        <td className="col-md-1" style={{ textAlign: "center" }}>
          <input
            type="number"
            className="form-control quantity"
            value={quantity}
            onChange={handleChange}
          />
        </td>
        <td className="col-md-1 text-center">
          <strong>₹ {price}</strong>
        </td>
        <td className="col-md-1 text-center">
          <strong>₹ {calculatedPrice} </strong>
        </td>
        <td className="col-md-1">
          <Link to="/CreateYourPrint">
            <button type="button" className="btn btn-success">
              <span className="glyphicon glyphicon-pencil" /> Edit
            </button>
          </Link>
        </td>
        <td className="col-md-1">
          <button type="button" className="btn btn-danger">
            <span className=""> &times; </span> Remove
          </button>
        </td>
      </tr>
    </>
  );
}
