import React from "react";

export default function contact() {
  const handler = e => {
    e.preventDefault();
    document.getElementById("sucess").style.display = "block";
  };
  return (
    <div>
      <div className="container " style={{ marginTop: "6rem" }}>
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <h1
              class="p-3 mb-2 bg-success text-white center"
              id="sucess"
              style={{
                padding: "1.5rem",
                borderRadius: "5px",
                display: "none"
              }}
            >
              SUBMITED
            </h1>
            <br />
            <div className="well well-sm">
              <form className="form-horizontal" action method="">
                <fieldset>
                  <legend className="text-center">Contact us</legend>
                  {/* Name input*/}
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="name">
                      Name
                    </label>
                    <div className="col-md-9">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your name"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* Email input*/}
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="email">
                      Your E-mail
                    </label>
                    <div className="col-md-9">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        placeholder="Your email"
                        className="form-control"
                      />
                    </div>
                  </div>
                  {/* Message body */}
                  <div className="form-group">
                    <label className="col-md-3 control-label" htmlFor="message">
                      Your message
                    </label>
                    <div className="col-md-9">
                      <textarea
                        className="form-control"
                        id="message"
                        name="message"
                        placeholder="Please enter your message here..."
                        rows={5}
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  {/* Form actions */}
                  <div className="form-group">
                    <div className="col-md-12 text-right">
                      <button
                        onClick={handler}
                        type="submit"
                        className="btn btn-warning btn-lg"
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
