import React, { Fragment, useContext } from "react";
import { ThemeContext } from "../App";

import { Link } from "react-router-dom";

export default function SingleCanvasPrints() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;

  var costomHeight = '';
  var customWidth = '';

  const customSizeh = (e) => {
    costomHeight = e.target.value
  }
  const customSizew = (e) => {
    customWidth = e.target.value
    
  }
  
  
  const radioSubmit = (e) =>{
    const str = e.target.value
    const strr = e.target.value
    // console.log(str);
    // console.log(strr);
    const i = str.indexOf(' ');
    
    var res = str.slice(0, i);
    var rest = parseInt(strr.slice(i, ))
    
    // console.log(res)
    // console.log(rest)
    setProductProperty({ ...productProperty, size: res, sizePrice: rest ,productPrice:  rest + productProperty.stylePrice});
    
    
  }
  
  const sizeAndPrice = () => {

    const customSize = `${costomHeight}x${customWidth}`

    setProductProperty({ ...productProperty, size: customSize, sizePrice: 3047,productPrice:  3047 + productProperty.stylePrice});
    
  }
  // const customsizeAndPrice = () => {

  //   const customSize = `${costomHeight}x${customWidth}`

  //   setProductProperty({ ...productProperty, size: customSize, sizePrice: "3047" });
    
  // }

  return (
    <Fragment>
      <div className="row canvas top-banner">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <h1 className="canvas-heading" style={{ marginTop: 89 }}>
            Canvas Single Prints
          </h1>
          <p className="canvas-paragaraph" style={{ marginBottom: 100 }}>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-1" />
        <div className="col-sm-10">
          <h3 className="center" style={{ margin: "30px 0" }}>
            <strong>
              AVAILABLE SIZES
              <strong />
            </strong>
          </h3>
          <strong>
            <strong>
              <form action className="table-responsive">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th />
                      <th>Size</th>
                      <th />
                      <th>Price</th>
                      <th />
                      <th>Orders</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div className="radio-item">
                          <input
          
                            type="radio"
                            id={1}
                            name="option"
                            value="8x8 299"
                            defaultValue={1}
                            onClick={radioSubmit}
                          />
                          <label htmlFor={1} />
                        </div>
                      </td>
                      <td>8"x8"</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>₹ 299</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>
                        <Link  className="btn btn-warning" to="/uploadImage">
                          Submit
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-item">
                          <input
                            type="radio"
                            id={2}
                            name="option"
                            value="12x8 634"
                            onClick={radioSubmit}
                            defaultValue={2}
                          />
                          <label htmlFor={2} />
                        </div>
                      </td>
                      <td>12"x8"</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>₹ 634</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>
                        <Link className="btn btn-warning"  to="/uploadImage">
                          Submit
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-item">
                          <input
                            type="radio"
                            id={3}
                            name="option"
                            value="10x10 660"
                            onClick={radioSubmit}
                            defaultValue={3}
                          />
                          <label htmlFor={3} />
                        </div>
                      </td>
                      <td>10"x10"</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>₹ 660</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>
                        <Link className="btn btn-warning"  to="/uploadImage">
                          Submit
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-item">
                          <input
                            type="radio"
                            id={4}
                            name="option"
                            defaultValue={4}
                            value="16x20 1177"
                            onClick={radioSubmit}
                          />
                          <label htmlFor={4} />
                        </div>
                      </td>
                      <td>16"x20"</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>₹ 1177</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>
                        <Link className="btn btn-warning"  to="/uploadImage">
                          Submit
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-item">
                          <input
                            type="radio"
                            id={5}
                            name="option"
                            defaultValue={5}
                            value="20x30 3047"
                            onClick={radioSubmit}
                          />
                          <label htmlFor={5} />
                        </div>
                      </td>
                      <td>20"x30"</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>₹ 3047</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>
                        <Link className="btn btn-warning"  to="/uploadImage">
                          Submit
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <div className="radio-item">
                          <input
                            type="radio"
                            id={6}
                            name="option"
                            defaultValue={6}
                          />
                          <label htmlFor={6} />
                        </div>
                      </td>
                      <td>
                        <div>Custom Size</div>
                        <div className="form-inline">
                          <div className="form-group">
                            <input
                              type="text"
                              className="form-control"
                              id="height"
                              style={{ width: 50 }}
                              onChange={customSizeh }
                            />
                          </div>
                          <span>x</span>
                          <div className="form-group">
                            <input
                              type="text"
                              onChange={customSizew}
                              className="form-control"
                              id="width"
                              style={{ width: 50 }}
                            />
                          </div>
                        </div>
                      </td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>₹ 3047</td>
                      <td>
                        <img src={require("../images/arrow.png")} alt />
                      </td>
                      <td>
                        <Link className="btn btn-warning" onClick={sizeAndPrice} to="/uploadImage">
                          Submit
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            </strong>
          </strong>
        </div>
        <strong>
          <strong>
            <div className="col-sm-1" />
          </strong>
        </strong>
      </div>
      <strong>
        <strong>
          <div className="row" style={{ margin: 20, paddingBottom: 50 }}>
            <div className="col-sm-12">
              <h3 className="center" style={{ margin: "30px 0" }}>
                <strong>EXPLORE MORE CATEGORIES</strong>
              </h3>
            </div>
            <div className="col-sm-6 cat-galary">
              <img
                className="banner-img"
                src={require("../images/banner-image-1.png")}
                alt
              />
            </div>
            <div className="col-sm-6 cat-galary">
              <h4 className>Canvas Collages</h4>
              <p className>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />
                Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </p>
              <p className>
                <a href="#" className="btn btn-warning" role="button">
                  Get Started Now
                </a>
              </p>
            </div>
            <div className="col-sm-6 cat-galary right">
              <h4 className>Canvas Collages</h4>
              <p className>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />
                Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </p>
              <p className>
                <a href="#" className="btn btn-warning" role="button">
                  Get Started Now
                </a>
              </p>
            </div>
            <div className="col-sm-6 cat-galary">
              <img
                className="banner-img"
                src={require("../images/banner-image-2.png")}
                alt
              />
            </div>
            <div className="col-sm-6 cat-galary">
              <img
                className="banner-img"
                src={require("../images/banner-image-1.png")}
                alt
              />
            </div>
            <div className="col-sm-6 cat-galary">
              <h4 className>Canvas Collages</h4>
              <p className>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />
                Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </p>
              <p className>
                <a href="#" className="btn btn-warning" role="button">
                  Get Started Now
                </a>
              </p>
            </div>
            <div className="col-sm-6 cat-galary right">
              <h4 className>Canvas Collages</h4>
              <p className>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />
                Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </p>
              <p className>
                <a href="#" className="btn btn-warning" role="button">
                  Get Started Now
                </a>
              </p>
            </div>
            <div className="col-sm-6 cat-galary">
              <img
                className="banner-img"
                src={require("../images/banner-image-4.png")}
                alt
              />
            </div>
            <div className="col-sm-6 cat-galary">
              <img
                className="banner-img"
                src={require("../images/banner-image-5.png")}
                alt
              />
            </div>
            <div className="col-sm-6 cat-galary">
              <h4 className>Canvas Collages</h4>
              <p className>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem <br />
                Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </p>
              <p className>
                <a href="#" className="btn btn-warning" role="button">
                  Get Started Now
                </a>
              </p>
            </div>
          </div>
        </strong>
      </strong>
    </Fragment>
  );
}
