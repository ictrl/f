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

  const handler = e => {
    var children = e.children;
    // console.log(e.target.classList[3]);
    console.log(children);
    // const appp = children[0];
    // const aooo = children[2];
    // const price = aooo.children;
    // const pri = price[1].innerHTML;
    // console.log(pri);
    // console.log(appp.alt);
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
              <div>
                <div>
                  <button
                    type="button"
                    className="btn  btn-lg shape"
                    data-toggle="modal"
                    data-target="#myModal"
                  >
                    Please select size*
                  </button>
                  <span className="arrow-down">▼</span>
                  {/* Modal  fade*/}
                  <div
                    id="myModal"
                    className="  modal fade"
                    role="dialog"
                    style={{ marginTop: "8rem", marginLeft: "11rem" }}
                  >
                    <div
                      className="modal-dialog modal-lg"
                      style={{ height: "51rem" }}
                    >
                      {/* Modal content*/}
                      <div
                        className="modal-content"
                        style={{ height: "51rem", width: "70.2rem" }}
                      >
                        {/* <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h5 class="modal-title">Modal Header</h5>
      </div> */}
                        {/* <div class="modal-body"> */}
                        {/* <div class="container" style="margin-top: 30px"> */}
                        <div class="popup-window ">
                          <div
                            id="MyAccountsTab"
                            className="tabbable tabs-left"
                            style={{ height: "50rem", width: "70rem" }}
                          >
                            <ul
                              className="nav nav-tabs col-md-2"
                              style={{
                                height: "42.5rem",
                                background: "rgb(238, 238, 238)"
                              }}
                            >
                              <li
                                className="active"
                                style={{ cursor: "pointer" }}
                              >
                                <div data-target="#lA" data-toggle="tab">
                                  <div className="center">
                                    <span className="account-type">
                                      <img src="80x70.png" alt />
                                    </span>
                                    <br />
                                    <span className="account-amount-1">
                                      Rectangle
                                    </span>
                                    <br />
                                    <p>From ₹ 150</p>
                                  </div>
                                </div>
                              </li>
                              <li style={{ cursor: "pointer" }}>
                                <div data-target="#lB" data-toggle="tab">
                                  <div className="center">
                                    <span className="account-type">
                                      <img src="30x60.png" alt />
                                    </span>
                                    <br />
                                    <span className="account-amount-1">
                                      Square
                                    </span>
                                    <br />
                                    <p>From ₹ 200</p>
                                  </div>
                                </div>
                              </li>
                              <li style={{ cursor: "pointer" }}>
                                <div data-target="#lC" data-toggle="tab">
                                  <div className="center">
                                    <span className="account-type">
                                      <img
                                        src={require("../images/40x60.png")}
                                        alt
                                      />
                                    </span>
                                    <br />
                                    <span className="account-amount-1">
                                      Panoramic
                                    </span>
                                    <br />
                                    <p>From ₹ 250</p>
                                  </div>
                                </div>
                              </li>
                              <li style={{ cursor: "pointer" }}>
                                <div data-target="#lD" data-toggle="tab">
                                  <div className="center">
                                    <span className="account-type">
                                      <img src="80x70.png" alt />
                                    </span>
                                    <br />
                                    <span className="account-amount-1">
                                      Custom Size
                                    </span>
                                    <br />
                                    <p>From ₹ 300</p>
                                  </div>
                                </div>
                              </li>
                            </ul>
                            <div
                              className="tab-content col-md-10 col-size"
                              style={{ overflowY: "hidden" }}
                            >
                              <div
                                className="tab-pane active"
                                id="lA"
                                style={{ height: "41.6rem" }}
                              >
                                <div
                                  className=" row"
                                  style={{ width: "48rem", height: "45rem" }}
                                >
                                  {/* onclick=(handler(this)) */}
                                  <div
                                    className=" col-sm-3 center  box 80x70"
                                    onClick={handler}
                                  >
                                    <img src="80x70.png" alt="80 x 70" />
                                    <h5>80 x 70 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="30x60.png" alt=" 30 x 60" />
                                    <h5>30 x 60 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="40x60.png" alt="40 x 60" />
                                    <h5>40 x 60 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="80x70.png" alt=" 80 x 70" />
                                    <h5>80 x 70 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="30x60.png" alt="30 x 60" />
                                    <h5>30 x 60 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="40x60.png" alt="40x60" />
                                    <h5>40 x 60 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="80x70.png" alt="80x70" />
                                    <h5>80 x 70 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="80x70.png" alt="80x70" />
                                    <h5>80 x 70 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="80x70.png" alt="80x70" />
                                    <h5>80 x 70 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="80x70.png" alt="80x70" />
                                    <h5>80 x 70 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="80x70.png" alt="80x70" />
                                    <h5>80 x 70 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                  <div
                                    className=" col-sm-3 center  box"
                                    onClick={handler}
                                  >
                                    <img src="80x70.png" alt="80x70" />
                                    <h5>80 x 70 cm</h5>
                                    <div style={{ display: "flex" }}>
                                      <strike
                                        style={{
                                          color: "#808080",
                                          fontSize: 14
                                        }}
                                      >
                                        16
                                      </strike>
                                      &nbsp; &nbsp;
                                      <p style={{ color: "#ff0000" }}>13</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane"
                                id="lB"
                                style={{ width: "48rem", height: "45rem" }}
                              >
                                {/* <div class="row"> */}
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="30x60.png" alt="30x60" />
                                  <h5>30 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="40x60.png" alt="40x60" />
                                  <h5>40 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="30x60.png" alt="30x60" />
                                  <h5>30 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="40x60.png" alt="40x60" />
                                  <h5>40 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="40x60.png" alt="40x60" />
                                  <h5>40 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="40x60.png" alt="40x60" />
                                  <h5>40 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane"
                                id="lC"
                                style={{ width: "50rem", height: "50rem" }}
                              >
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80 x 70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="30x60.png" alt=" 30 x 60" />
                                  <h5>30 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="40x60.png" alt="40 x 60" />
                                  <h5>40 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt=" 80 x 70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="30x60.png" alt="30 x 60" />
                                  <h5>30 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="40x60.png" alt="40x60" />
                                  <h5>40 x 60 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <p style={{ color: "#ff0000" }}>13</p>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <hp style={{ color: "#ff0000" }}>13</hp>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <hp style={{ color: "#ff0000" }}>13</hp>
                                  </div>
                                </div>
                                <div
                                  className=" col-sm-3 center  box"
                                  onClick={handler}
                                >
                                  <img src="80x70.png" alt="80x70" />
                                  <h5>80 x 70 cm</h5>
                                  <div style={{ display: "flex" }}>
                                    <strike
                                      style={{ color: "#808080", fontSize: 14 }}
                                    >
                                      16
                                    </strike>
                                    &nbsp; &nbsp;
                                    <hp style={{ color: "#ff0000" }}>13</hp>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="tab-pane"
                                id="lD"
                                style={{ width: "50rem", height: "50rem" }}
                              >
                                <div className="center ">
                                  <h3>Custom Size</h3>
                                  <form action>
                                    <div className="btn-group">
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                      >
                                        cm
                                      </button>
                                      <button
                                        type="button"
                                        className="btn btn-primary"
                                      >
                                        inch
                                      </button>
                                    </div>
                                    <div
                                      className="form-group"
                                      style={{ marginTop: 15 }}
                                    >
                                      <label
                                        htmlFor="width"
                                        className="col-sm-3 control-label"
                                      >
                                        Input width
                                      </label>
                                      <div className="input-group col-sm-9">
                                        <input
                                          type="text"
                                          name="width"
                                          className="form-control"
                                        />
                                        <span className="input-group-addon">
                                          cm
                                        </span>
                                      </div>
                                    </div>
                                    <div className="form-group">
                                      <label
                                        htmlFor="height"
                                        className="col-sm-3 control-label"
                                      >
                                        Input height
                                      </label>
                                      <div className="input-group col-sm-9">
                                        <input
                                          type="text"
                                          name="height"
                                          className="form-control"
                                        />
                                        <span className="input-group-addon">
                                          cm
                                        </span>
                                      </div>
                                    </div>
                                  </form>
                                  <div className="form-group">
                                    <label
                                      className="col-sm-3 control-label"
                                      style={{ marginTop: 25 }}
                                    >
                                      PRICE
                                    </label>
                                    <div className=" col-sm-9">
                                      <label
                                        id="price"
                                        className="text-warning"
                                        style={{ color: "#f00" }}
                                      >
                                        <h5>
                                          <del>$50</del>
                                        </h5>
                                      </label>
                                      <label
                                        id="discount-price"
                                        className="text-success "
                                        style={{ color: "#0f0" }}
                                      >
                                        <h2>$30</h2>
                                      </label>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="modal-footer col-md-12">
                              <button
                                type="button"
                                className="btn btn-default"
                                data-dismiss="modal"
                              >
                                Cancel
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* <select
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
              <span className="arrow-down">▼</span> */}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
