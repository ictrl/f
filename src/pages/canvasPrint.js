import React, { useState, useEffect, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import { getSizeList, getStyleList } from "./cartHelpers";

export default function CanvasPrint() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;
  const [sizes, setSizeList] = useState([]);
  const [div, setDiv] = useState([
    <div className="row left-section " style={{ display: "block" }}>
      {" "}
      <div className="col-sm-12">
        <div className="split">
          <img src alt="" />
        </div>
      </div>
    </div>
  ]);
  const [styles, setStyleList] = useState([{}, {}, {}, {}]);

  const loadSizes = () => {
    getSizeList().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSizeList(data);
      }
    });
  };

  const loadStyles = () => {
    getStyleList().then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStyleList(data);
      }
    });
  };

  const splitHandler = e => {
    if (e.target.classList[2] === "i1") {
      setProductProperty({
        ...productProperty,
        styleName: "Single Print",
        stylePrice: styles[0].price,
        num: 1
      });
      setDiv(
        <div className="row left-section" style={{ display: "block" }}>
          <div className="col-sm-12">
            <div class="upload-image-preview split" id="uploadImg">
              <img src={productProperty.url} alt="" />
            </div>
          </div>
        </div>
      );
    } else if (e.target.classList[2] === "i2") {
      setProductProperty({
        ...productProperty,
        num: 2,
        styleName: "Split Image",
        stylePrice: styles[1].price
      });
      setDiv(
        <div className="row left-section" style={{ display: "block" }}>
          <div className="col-sm-4">
            <div className="split">
              <img src alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="split">
              <img src alt="" />
            </div>
          </div>
          <div className="col-sm-4">
            <div className="split">
              <img src alt="" />
            </div>
          </div>
        </div>
      );
    } else if (e.target.classList[2] === "i3") {
      setProductProperty({
        ...productProperty,
        num: 3,
        styleName: "Wall Display",
        stylePrice: styles[2].price
      });
      setDiv(
        <div className="row left-section" style={{ display: "block" }}>
          <div className="col-sm-6">
            <div className="row">
              <div className="col-sm-12">
                <div className="split2">
                  <img src alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="split2">
                  <img src alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="split">
              <img src alt="" />
            </div>
          </div>
        </div>
      );
    } else {
      setProductProperty({
        ...productProperty,
        styleName: "Collage Image",
        num: 4,
        stylePrice: styles[3].price
      });
      setDiv(
        <div className="row left-section" style={{ display: "block" }}>
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-12">
                <div className="split2">
                  <img src alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="split2">
                  <img src alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-2">
            <div className="row">
              <div className="col-sm-12">
                <div className="split2 collage1">
                  <img src alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="split2 collage2">
                  <img src alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-5">
            <div className="row">
              <div className="col-sm-12">
                <div className="split2">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <div className="split2">
                  <img src alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  };

  const handleChange = e => {
    var str = e.target.value;

    var pos = str.search("₹");
    var size = str.slice(" ", pos);
    var price = str.slice(pos + 2);
    setProductProperty({
      ...productProperty,
      size: size,
      sizePrice: parseInt(price)
    });
  };

  useEffect(() => {
    loadSizes();
    loadStyles();
  }, []);

  return (
    <Fragment>
      <div className="row" style={{ margin: "0 40px 50px 40px" }}>
        <div className="col-sm-12" style={{ marginBottom: "30px" }}>
          <h3 className="center" style={{ color: "#ff9900" }}>
            <b>CREATE YOUR OWN CANVAS</b>
          </h3>
          <h4 className="center">
            ({productProperty.material}:{" "}
            <b id="title">{productProperty.styleName}</b>)
          </h4>
        </div>
        <div className="col-sm-6">
          {div}

          <div className="row" style={{ marginTop: "20px" }}>
            <div className="col-sm-6 center">
              <Link
                to="/CreateYourPrint"
                className="btn btn-default"
                value="Input Button"
              >
                <img src={require("../images/back.png")} alt="" />
              </Link>
            </div>
            <div className="col-sm-6 center">
              <Link
                to="/UploadImage"
                className="btn btn-warning"
                value="Input Button"
              >
                <img src={require("../images/upload.png")} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
            <div className="col-sm-12" style={{ margin: "20px 0px" }}>
              <h4>
                <strong>1. Select Styles</strong>
              </h4>
            </div>
            <div className="col-sm-3 x i1" onClick={splitHandler}>
              <div className="card collage-thumbnail i1">
                <img
                  className="x xx i1"
                  src={require("../images/single.png")}
                  alt=""
                />
                <h5 className="x xx i1">
                  Single <br />
                  Print
                </h5>
                <p className="x xx i1">₹ {styles[0].price} </p>
              </div>
            </div>
            <div className="col-sm-3 x i2" onClick={splitHandler}>
              <div className="card collage-thumbnail i2">
                <img
                  src={require("../images/split.png")}
                  alt=""
                  className="x xx i2"
                />
                <h5 className="x xx i2">
                  Split
                  <br />
                  Image
                </h5>
                <p className="x xx i2">₹ {styles[1].price}</p>
              </div>
            </div>
            <div className="col-sm-3 x i3" onClick={splitHandler}>
              <div className="card collage-thumbnail i3">
                <img
                  src={require("../images/wall.png")}
                  alt=""
                  className="x xx i3"
                />
                <h5 className="x xx i3">
                  Wall
                  <br />
                  Displays
                </h5>
                <p className="x xx i3"> ₹ {styles[2].price} </p>
              </div>
            </div>
            <div className="col-sm-3 i4" onClick={splitHandler}>
              <div className="card collage-thumbnail ">
                <img src={require("../images/collage.png")} alt="" />
                <h5>
                  Collage
                  <br />
                  Image
                </h5>
                <p>₹{styles[3].price}</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12" style={{ margin: "20px 0px" }}>
              <h4>
                <strong>2. Select size &amp; shape</strong>
              </h4>
            </div>
            <div className="col-sm-12">
              <select
                id="slct"
                onChange={handleChange}
                className="browser-defaul,ethisstom-select custom-select-lg mb-3 shape"
              >
                <option value="">Select options</option>
                {sizes.map((p, i) => (
                  <option
                    value={p.value + " ₹ " + p.price}
                    key={i}
                    id={p.value}
                    className={p.price}
                  >
                    {p.value}
                    &nbsp;&nbsp;&nbsp; ₹{p.price}
                  </option>
                ))}
              </select>
              <span className="arrow-down">▼</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
