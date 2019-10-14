import React, { Fragment } from "react";
import { Link } from "react-router-dom";

export default function Urban() {
  return (
    <Fragment>
      {/* top banner */}
      <div className="row canvas top-banner">
        <div className="col-sm-6"></div>
        <div className="col-sm-6">
          <h1 className="canvas-heading" style={{ marginTop: 89 }}>
            Urban
          </h1>
          <p className="canvas-paragaraph" style={{ marginBottom: 100 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </p>
        </div>
      </div>
      {/* category */}
      <div className="row" style={{ marginTop: 50 }}>
        <div className="col-md-4" />
        <div className="col-md-4">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search"
                id="txtSearch"
              />
              <div className="input-group-btn">
                <button className="btn btn-warning" type="submit">
                  <img src={require("../images/search.png")} />
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-4" />
      </div>
      <div className="container" style={{ marginTop: 50, marginBottom: 50 }}>
        <div className="row">
          <div className="col-sm-4">
            {/* category img */}
            <div className="row category">
              <div className="col-sm-12 center">
                <h4>Popular Categories</h4>
              </div>
              <div className="col-sm-4">
                <img src={require("../images/m9.jpg")} className="thumbnail" />
                <p>demo</p>
              </div>
              <div className="col-sm-4">
                <img src={require("../images/m10.jpg")} className="thumbnail" />
                <p>demo</p>
              </div>
              <div className="col-sm-4">
                <img src={require("../images/m13.jpg")} className="thumbnail" />
                <p>demo</p>
              </div>
              <div className="col-sm-4">
                <img src={require("../images/m9.jpg")} className="thumbnail" />
                <p>demo</p>
              </div>
              <div className="col-sm-4">
                <img src={require("../images/m10.jpg")} className="thumbnail" />
                <p>demo</p>
              </div>
              <div className="col-sm-4">
                <img src={require("../images/m13.jpg")} className="thumbnail" />
                <p>demo</p>
              </div>
            </div>
          </div>
          {/* galary */}
          <div className="col-sm-8" style={{ border: "1px solid #999" }}>
            <div className="row gallary">
              <div className="col-sm-12 center">
                <h4>Landscapes art canvas prints</h4>
              </div>
              <div className="col-sm-4">
                <Link to="/createYourPrint">
                  <img
                    src={require("../images/m1.jpg")}
                    className="thumbnail"
                  />
                </Link>
              </div>
              <div className="col-sm-4">
                <Link to="/createYourPrint">
                  <img
                    src={require("../images/m2.jpg")}
                    className="thumbnail"
                  />
                </Link>
              </div>
              <div className="col-sm-4">
                <Link to="/createYourPrint">
                  <img
                    src={require("../images/m32.jpg")}
                    className="thumbnail"
                  />
                </Link>
              </div>
              <div className="col-sm-4">
                <Link to="/createYourPrint">
                  <img
                    src={require("../images/m29.jpg")}
                    className="thumbnail"
                  />
                </Link>
              </div>
              <div className="col-sm-4">
                <Link to="/createYourPrint">
                  <img
                    src={require("../images/m20.jpg")}
                    className="thumbnail"
                  />
                </Link>
              </div>
              <div className="col-sm-4">
                <Link to="/createYourPrint">
                  <img
                    src={require("../images/m22.jpg")}
                    className="thumbnail"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
