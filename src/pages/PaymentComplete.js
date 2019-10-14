import React from "react";

export default function PaymentComplete() {
  const handler = e => {
    // var children = e.children;
    console.log(e.target.classList[3]);
    // const appp = children[0];
    // const aooo = children[2];
    // const price = aooo.children;
    // const pri = price[1].innerHTML;
    // console.log(pri);
    // console.log(appp.alt);
  };

  return (
    <div>
      <div>
        <button
          type="button"
          className="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#myModal"
        >
          Open Modal
        </button>
        {/* Modal  fade*/}
        <div id="myModal" className="modal fade" role="dialog">
          <div className="modal-dialog modal-lg" style={{ height: "51rem" }}>
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
              {/* <div class="row"> */}
              <div
                id="MyAccountsTab"
                className="tabbable tabs-left"
                style={{ height: "50rem", width: "70rem" }}
              >
                <ul
                  className="nav nav-tabs col-md-2"
                  style={{ height: "40rem", background: "rgb(238, 238, 238)" }}
                >
                  <li className="active" style={{ cursor: "pointer" }}>
                    <div data-target="#lA" data-toggle="tab">
                      <div className="center">
                        <span className="account-type">
                          <img src="80x70.png" alt />
                        </span>
                        <br />
                        <span className="account-amount">Rectangle</span>
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
                        <span className="account-amount">Square</span>
                        <br />
                        <p>From ₹ 200</p>
                      </div>
                    </div>
                  </li>
                  <li style={{ cursor: "pointer" }}>
                    <div data-target="#lC" data-toggle="tab">
                      <div className="center">
                        <span className="account-type">
                          <img src="40x60.png" alt />
                        </span>
                        <br />
                        <span className="account-amount">Panoramic</span>
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
                        <span className="account-amount">Custom Size</span>
                        <br />
                        <p>From ₹ 300</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <div
                  className="tab-content col-md-10 "
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
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="30x60.png" alt=" 30 x 60" />
                        <h5>30 x 60 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="40x60.png" alt="40 x 60" />
                        <h5>40 x 60 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="80x70.png" alt=" 80 x 70" />
                        <h5>80 x 70 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="30x60.png" alt="30 x 60" />
                        <h5>30 x 60 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="40x60.png" alt="40x60" />
                        <h5>40 x 60 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="80x70.png" alt="80x70" />
                        <h5>80 x 70 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="80x70.png" alt="80x70" />
                        <h5>80 x 70 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="80x70.png" alt="80x70" />
                        <h5>80 x 70 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="80x70.png" alt="80x70" />
                        <h5>80 x 70 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="80x70.png" alt="80x70" />
                        <h5>80 x 70 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
                            16
                          </strike>
                          &nbsp; &nbsp;
                          <p style={{ color: "#ff0000" }}>13</p>
                        </div>
                      </div>
                      <div className=" col-sm-3 center  box" onClick={handler}>
                        <img src="80x70.png" alt="80x70" />
                        <h5>80 x 70 cm</h5>
                        <div style={{ display: "flex" }}>
                          <strike style={{ color: "#808080", fontSize: 14 }}>
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
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="30x60.png" alt="30x60" />
                      <h5>30 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="40x60.png" alt="40x60" />
                      <h5>40 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="30x60.png" alt="30x60" />
                      <h5>30 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="40x60.png" alt="40x60" />
                      <h5>40 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="40x60.png" alt="40x60" />
                      <h5>40 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="40x60.png" alt="40x60" />
                      <h5>40 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
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
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80 x 70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="30x60.png" alt=" 30 x 60" />
                      <h5>30 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="40x60.png" alt="40 x 60" />
                      <h5>40 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt=" 80 x 70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="30x60.png" alt="30 x 60" />
                      <h5>30 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="40x60.png" alt="40x60" />
                      <h5>40 x 60 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <p style={{ color: "#ff0000" }}>13</p>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <hp style={{ color: "#ff0000" }}>13</hp>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
                          16
                        </strike>
                        &nbsp; &nbsp;
                        <hp style={{ color: "#ff0000" }}>13</hp>
                      </div>
                    </div>
                    <div className=" col-sm-3 center  box" onClick={handler}>
                      <img src="80x70.png" alt="80x70" />
                      <h5>80 x 70 cm</h5>
                      <div style={{ display: "flex" }}>
                        <strike style={{ color: "#808080", fontSize: 14 }}>
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
                          <button type="button" className="btn btn-primary">
                            cm
                          </button>
                          <button type="button" className="btn btn-primary">
                            inch
                          </button>
                        </div>
                        <div className="form-group" style={{ marginTop: 15 }}>
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
                            <span className="input-group-addon">cm</span>
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
                            <span className="input-group-addon">cm</span>
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
      ;
    </div>
  );
}
