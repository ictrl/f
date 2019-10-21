import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";

import CreateYourPrint from "../components/CreateYourPrint";

export default function Home() {
  const [insta, setInsta] = useState();

  return (
    <Fragment>
      {/* carousel start */}
      <div
        id="myCarousel"
        className="carousel slide"
        data-ride="carousel"
        data-interval="2000"
      >
        {/* Indicators */}
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to={0} className="active" />
          <li data-target="#myCarousel" data-slide-to={1} />
          <li data-target="#myCarousel" data-slide-to={2} />
        </ol>
        {/* Wrapper for slides */}
        <div className="carousel-inner">
          <div className="item active">
            <img src={require("../images/banner1.png")} alt="Los Angeles" />
          </div>
          <div className="item">
            <img src={require("../images/banner2.jpg")} alt="Chicago" />
          </div>
          <div className="item">
            <img src={require("../images/banner1.png")} alt="New York" />
          </div>
        </div>
        {/* Left and right controls */}
        <a className="left carousel-control" to="#myCarousel" data-slide="prev">
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="right carousel-control"
          to="#myCarousel"
          data-slide="next"
        >
          <span className="sr-only">Next</span>
        </a>
      </div>
      <div
        
        className="row"
        style={{ padding: "20px 0", backgroundColor: "#EFEFEF" }}
      >
        <div className="col-sm-2" />
        <div className="col-sm-2  second-sec">
          <img src={require("../images/shipping.png")} alt="" />
          <div  style={{fontSize: '13px'}}>
            FREE <br /> SHIPPING
          </div>
        </div>
        <div style={{fontSize: '13px'}} className="col-sm-2 second-sec">
          <img src={require("../images/cod.png")} alt="" />
          <div>
            COD <br /> AVAILABLE
          </div>
        </div>
        <div style={{fontSize: '13px'}} className="col-sm-2  second-sec">
          <img src={require("../images/payment.png")} alt="" />
          <div>
            SECURE <br /> PAYMENT
          </div>
        </div>
        <div style={{fontSize: '13px'}} className="col-sm-2  second-sec" style={{ borderRight: "none" }}>
          <img src={require("../images/service.png")} alt="" />
          <div>
            FRIENDLY <br /> SERVICE
          </div>
        </div>
        <div className="col-sm-2" />
      </div>
      <div className="row" style={{ marginTop: "2rem" }}>
        <div className="col-sm-12 center">
          <h2 style={{ fontWeight:'700', fontSize: '23px'}}>
            Choose the perfect material and
            <br />
            style for your home
          </h2>
          <br/>
          <p style={{fontSize: '14px'}}>
          
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum
            <br /> has been the industry's standard dummy text ever since the
            1500s,
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
      </div>
      <div className="container" style={{ padding: "20px 40px" }}>
        <div className=" col-md-4  col-xs-12">
          <div className="hovereffect">
            <img
              className="img-responsive"
              src={require("../images/sub-1.png")}
              alt=""
            />
            <div className="overlay">
              <h2 style={{fontSize: '30px'}}>
                Caanvas <br />
                Print
              </h2>
              <Link style={{fontSize: '15px'}} className="info" to="/catalog">
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className=" col-md-4  col-xs-12">
          <div className="hovereffect">
            <img
              className="img-responsive"
              src={require("../images/sub-2.png")}
              alt=""
            />
            <div className="overlay">
              <h2 style={{fontSize: '30px'}}>
                Wall <br />
                Art
              </h2>
              <Link style={{fontSize: '15px'}} className="info" to="/wallArt">
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className=" col-md-4  col-xs-12">
          <div className="hovereffect">
            <img
              className="img-responsive"
              src={require("../images/sub-3.png")}
              alt=""
            />
            <div className="overlay">
              <h2 style={{fontSize: '30px'}}>
                Premium <br />
                Prints
              </h2>
              <Link style={{fontSize: '15px'}} className="info" to="/premiumPrints">
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row canvas">
        <div className="col-sm-8 canvas-inner">
          <h1 style={{fontSize: '40px',lineHeight:'46px'}} className="canvas-heading">
            Create
            <br />
            your own
            <br />
            Canvas
          </h1>
            <br />

          <p style={{fontSize: '13px',lineHeight:'23px'}} className="canvas-paragaraph">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem <br />
            Ipsum has been the industry's standard dummy text ever since the
            1500s,
          </p>
          <p className="canvas-paragaraph">
            <br />

            <Link style={{fontSize: '15px'}}
              to="/CreateYourPrint"
              className="btn btn-warning"
              role="button"
            >
              Get Started Now
            </Link>
          </p>
        </div>
        <div className="col-sm-4"></div>
      </div>
      ;
      <div>
        <h3 className="center " style={{fontSize: '28px'}} style={{ fontWeight: "700" }}>
          SHOP BY COLLECTION
        </h3>
      </div>
      <div className="row">
        <div class="banner-content col-sm-6 canvas-left">
          <Link to="/singleCanvasPrint">
            <div className="banner-content-overlay left-overlay" />

            <img
              className="banner-content-image banner-img"
              src={require("../images/banner-image-1.png")}
              alt=""
            />
            <div className="banner-content-details  fadeIn-left">
              <h3 className="banner-content-title" >Single Canvas Print</h3>
              <p className="banner-content-text">This is a short description</p>
            </div>
          </Link>
          <h4 className="center" style={{fontSize: '20px'}}>Single Canvas Print</h4>
        </div>

        <div class="banner-content col-sm-6 canvas-right">
          <Link to="/canvasCollages">
            <div className="banner-content-overlay right-overlay" />

            <img
              className="banner-content-image banner-img"
              src={require("../images/banner-image-2.png")}
              alt=""
            />
            <div className="banner-content-details  fadeIn-right">
              <h3 className="banner-content-title">Canvas Collages</h3>
              <p className="banner-content-text">This is a short description</p>
            </div>
          </Link>
          <h4 className="center" style={{fontSize: '20px'}}>Canvas Collages</h4>
        </div>

        <div class="banner-content col-sm-12">
          <Link to="/canvasSplitImage">
            <div className="banner-content-overlay full-overlay" />

            <img
              className="banner-content-image banner-img"
              src={require("../images/banner-image-3.png")}
              alt=""
            />
            <div className="banner-content-details  fadeIn-bottom">
              <h3 className="banner-content-title">CANVAS SPLIT IMAGE</h3>
              <p className="banner-content-text">This is a short description</p>
            </div>
          </Link>

          <h4 className="center" style={{fontSize: '20px'}}>CANVAS SPLIT IMAGE</h4>
        </div>

        <div class="banner-content col-sm-6 canvas-left">
          <Link to="/floatingFrameCanvas">
            <div className="banner-content-overlay left-overlay" />

            <img
              className="banner-content-image banner-img"
              src={require("../images/last-left-banner.png")}
              alt=""
            />
            <div className="banner-content-details  fadeIn-left">
              <h3 className="banner-content-title">Floating Frame Canvas</h3>
              <p className="banner-content-text">This is a short description</p>
            </div>
          </Link>
          <h4 className="center" style={{fontSize: '20px'}}>Floating Frame Canvas</h4>
        </div>

        <div class="banner-content col-sm-6 canvas-right">
          <Link to="/largeCanvasPrints">
            <div className="banner-content-overlay right-overlay" />

            <img
              className="banner-content-image banner-img"
              src={require("../images/banner-image-5.png")}
              alt=""
            />
            <div className="banner-content-details  fadeIn-right">
              <h3 className="banner-content-title">Large Canvas Print</h3>
              <p className="banner-content-text">This is a short description</p>
            </div>
          </Link>
          <h4 className="center" style={{fontSize: '20px'}}>Large Canvas Print</h4>
        </div>

        <div class="banner-content col-sm-12">
          <Link to="/acrylicPremiumPrints">
            <div className="banner-content-overlay full-overlay" />

            <img
              className="banner-content-image banner-img"
              src={require("../images/womenSmile.png")}
              alt=""
            />
            <div className="banner-content-details  fadeIn-bottom">
              <h3 className="banner-content-titler">Acrylic Premium Prints</h3>
              <p className="banner-content-text">This is a short description</p>
            </div>
          </Link>

          <h4 className="center" style={{fontSize: '20px'}}>Acrylic Premium Prints</h4>
        </div>
      </div>
      <div>
        <p
          className="center testimonial-upper"
          style={{ letterSpacing: "6px", fontSize: "30px", fontWeight: "10" }}
        >
          CUSTOMER TESTIMONIALS
        </p>
        <div
          id="myCarousel"
          className="carousel carousel1  slide testimonial-div"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="item carousel-item active">
              <div className="img-box">
                <img src={require("../images/testimonial.png")} alt="" />
              </div>
              <div className="testmonial-quote testmonial-quote-up">
                <img
                  className="testmonial-img"
                  src={require("../images/quotes.png")}
                  alt=""
                />
              </div>
              <p className="testimonial">
                I have ordered many, many items from Galleriq and have always
                been satisfied. The
                <br />
                process the quick. The items are packaged with care and have
                <br />
                never been damaged. I have never had a complaint.
              </p>
              <div className="testmonial-quote testmonial-quote-down">
                <img
                  className="testmonial-img"
                  src={require("../images/quotes.png")}
                  alt=""
                />
              </div>
              <p className="overview">
                <p style={{fontSize: '14px'}}>- Nitesh Upraity</p>
              </p>
              <div className="star-rating">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="item carousel-item">
              <div className="img-box">
                <img src={require("../images/testimonial.png")} alt="" />
              </div>
              <div className="testmonial-quote testmonial-quote-up">
                <img
                  className="testmonial-img"
                  src={require("../images/quotes.png")}
                  alt=""
                />
              </div>
              <p className="testimonial">
                I have ordered many, many items from Galleriq and have always
                been satisfied. The
                <br />
                process the quick. The items are packaged with care and have
                <br />
                never been damaged. I have never had a complaint.
              </p>
              <div className="testmonial-quote testmonial-quote-down">
                <img
                  className="testmonial-img"
                  src={require("../images/quotes.png")}
                  alt=""
                />
              </div>
              <p className="overview">
                <p style={{fontSize: '14px'}}>- Nitesh Upraity</p>
              </p>
              <div className="star-rating">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li> 
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star-o" />
                  </li>
                </ul>
              </div>
            </div>
            <div className="item carousel-item">
              <div className="img-box">
                <img src={require("../images/testimonial.png")} alt="" />
              </div>
              <div className="testmonial-quote testmonial-quote-up">
                <img
                  className="testmonial-img"
                  src={require("../images/quotes.png")}
                  alt=""
                />
              </div>
              <p className="testimonial">
                I have ordered many, many items from Galleriq and have always
                been satisfied. The
                <br />
                process the quick. The items are packaged with care and have
                <br />
                never been damaged. I have never had a complaint.
              </p>
              <p className="overview">
                <div className="testmonial-quote testmonial-quote-down">
                  <img
                    className="testmonial-img"
                    src={require("../images/quotes.png")}
                    alt=""
                  />
                </div>
                <p style={{fontSize: '14px'}}> - Nitesh Upraity</p>
              </p>
              <div className="star-rating">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star" />
                  </li>
                  <li className="list-inline-item">
                    <i className="fa fa-star-half-o" />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row" style={{ paddingBottom: 50 }}>
        <div className="col-sm-8">
          <img
            className="banner-img"
            src={require("../images/bottom-banner.png")}
            alt=""
          />
        </div>
        <div className="col-sm-4">
          <div className="bottom-banner-right" style={{background:'#424242'}}>
            <div className="right-inner">
              <p style={{fontSize: '30px'}}>
                LATEST <strong>NEWS</strong> FROM THE <br />
                GALLERIQ <strong>BLOG</strong>
              </p>
              <hr align="left" width="3110" />
              <p style={{ fontSize: '15px' }}>11 Mar’19:</p>
              <br />
              <p style={{fontSize: '12px'}}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud. Excepteur sint.
              </p>
              <br />
              <Link style={{fontSize: '14px'}} to="/" className="btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 center">
          <img width="40" src={require("../images/Instagram_icon@1X.png")} alt="" />
          <h3>GALLERIQ ON INSTAGRAM</h3>
          <hr
            style={{
              width: "7rem",
              border: "2px solid grey",
              borderRadius: " 2px"
            }}
          />
          <div style={{ margin: "0 2rem", marginBottom: "3rem" }}>
            {/**<div id='instafeed_gallery' style={{ padding: '2rem 1rem' }}></div> */}




            <div id="" style={{ padding: "2rem 1rem" }}>


              <div class="col-md-3 ">
                <img 
                  src="https://scontent.cdninstagram.com/vp/ee82adb66f3869fb1f4f233f54c18fe4/5E352120/t51.2885-15/sh0.08/e35/s640x640/54732081_2480255758651162_2082569370229781734_n.jpg?_nc_ht=scontent.cdninstagram.com"
                  className="img-responsive overley-hover"  alt="--"
                />
              </div>
              
              <div className="col-md-3 ">
                <img
                  src="https://scontent.cdninstagram.com/vp/57dbf4ab6a4836aa69149760daaeda61/5E19C9F8/t51.2885-15/sh0.08/e35/s640x640/53931056_553119818509947_4756748281490530144_n.jpg?_nc_ht=scontent.cdninstagram.com"
                  className="img-responsive overley-hover"  alt="--"
                />
              </div>
              <div className="col-md-3 ">
                <img
                  src="https://scontent.cdninstagram.com/vp/8d2aad4c01caea949c1812be869fe5f1/5E1B517B/t51.2885-15/sh0.08/e35/s640x640/52382697_1969205423206223_242070823319389570_n.jpg?_nc_ht=scontent.cdninstagram.com"
                  className="img-responsive overley-hover"  alt="--"
                />
              </div>
              <div className="col-md-3 ">
                <img
                  src="https://scontent.cdninstagram.com/vp/f2ed4263496f583eb944491aaef8c41f/5E1B6633/t51.2885-15/sh0.08/e35/s640x640/52673355_584651762009851_2514136196853131759_n.jpg?_nc_ht=scontent.cdninstagram.com"
                  className="img-responsive overley-hover"  alt="--"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
