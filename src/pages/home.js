import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';

import CreateYourPrint from '../components/CreateYourPrint';

export default function Home() {
  const [insta, setInsta] = useState();
  const clg = () => {
    console.log('cool');
  };

  return (
    <Fragment>
      <div id='myCarousel' className='carousel slide' data-ride='carousel'>
        <ol className='carousel-indicators'>
          <li data-target='#myCarousel' data-slide-to={0} className='active' />
          <li data-target='#myCarousel' data-slide-to={1} />
          <li data-target='#myCarousel' data-slide-to={2} />
        </ol>
        <div className='carousel-inner'>
          <div className='item active'>
            <img src={require('../images/banner1.png')} alt='Los Angeles' />
          </div>
          <div className='item'>
            <img src={require('../images/banner1.png')} alt='Chicago' />
          </div>
          <div className='item'>
            <img src={require('../images/banner1.png')} alt='New York' />
          </div>
        </div>
        <a className='left carousel-control' href='#myCarousel' data-slide='prev'></a>
        <a className='right carousel-control' href='#myCarousel' data-slide='next'></a>
      </div>
      <div className='row' style={{ padding: '20px 0', backgroundColor: '#EFEFEF' }}>
        <div className='col-sm-2' />
        <div className='col-sm-2  second-sec'>
          <img src={require('../images/shipping.png')} alt='' />
          <div>
            FREE <br /> SHIPPING
          </div>
        </div>
        <div className='col-sm-2 second-sec'>
          <img src={require('../images/cod.png')} alt='' />
          <div>
            COD <br /> AVAILABLE
          </div>
        </div>
        <div className='col-sm-2  second-sec'>
          <img src={require('../images/payment.png')} alt='' />
          <div>
            SECURE <br /> PAYMENT
          </div>
        </div>
        <div className='col-sm-2  second-sec' style={{ borderRight: 'none' }}>
          <img src={require('../images/service.png')} alt='' />
          <div>
            FRIENDLY <br /> SERVICE
          </div>
        </div>
        <div className='col-sm-2' />
      </div>
      <div className='row' style={{ marginTop: '2rem' }}>
        <div className='col-sm-12 center'>
          <h2>
            Choose the perfect material and
            <br />
            style for your home
          </h2>
          <p>
            {' '}
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum
            <br /> has been the industry's standard dummy text ever since the 1500s,
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>
        </div>
      </div>
      <div className='container' style={{ padding: '20px 40px' }}>
        <div className=' col-md-4  col-xs-12'>
          <div className='hovereffect'>
            <img className='img-responsive' src={require('../images/sub-1.png')} alt='' />
            <div className='overlay'>
              <h2>
                Wall <br />
                Art
              </h2>
              <Link className='info' to='/catalog'>
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className=' col-md-4  col-xs-12'>
          <div className='hovereffect'>
            <img className='img-responsive' src={require('../images/sub-2.png')} alt='' />
            <div className='overlay'>
              <h2>
                Canvas <br />
                Ideas
              </h2>
              <Link className='info' to='/catalog'>
                Explore More
              </Link>
            </div>
          </div>
        </div>
        <div className=' col-md-4  col-xs-12'>
          <div className='hovereffect'>
            <img className='img-responsive' src={require('../images/sub-3.png')} alt='' />
            <div className='overlay'>
              <h2>
                Premium <br />
                Prints
              </h2>
              <Link className='info' to='/catalog'>
                Explore More
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row canvas'>
        <div className='col-sm-8 canvas-inner'>
          <h1 className='canvas-heading'>
            Create
            <br />
            your own
            <br />
            Canvas
          </h1>
          <p className='canvas-paragaraph'>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem <br />
            Ipsum has been the industry's standard dummy text ever since the 1500s,
          </p>
          <p className='canvas-paragaraph'>
            <Link to='/CreateYourPrint' className='btn btn-warning' role='button'>
              Get Started Now
            </Link>
          </p>
        </div>
        <div className='col-sm-4'></div>
      </div>
      ;
      <div>
        <h3 className='center ' style={{ fontWeight: '700' }}>
          SHOP BY COLLECTION
        </h3>
      </div>
      <div className='row'>
        <div class='col-sm-6 canvas-left'>
          <img
            className='banner-img'
            src={require('../images/banner-image-1.png')}
            alt=''
          />
          <h4 className='center'>Single Canvas Print</h4>
        </div>
        <div className='col-sm-6 canvas-right'>
          <img
            className='banner-img'
            src={require('../images/banner-image-2.png')}
            alt=''
          />
          <h4 className='center'>Canvas Collages</h4>
        </div>
        <div className='col-sm-12'>
          <img
            className='banner-img'
            src={require('../images/banner-image-3.png')}
            alt=''
          />
          <h4 className='center' style={{ fontWeight: '700' }}>
            CANVAS SPLIT IMAGE
          </h4>
        </div>
        <div className='col-sm-6 canvas-left'>
          <img
            className='banner-img'
            src={require('../images/last-left-banner.png')}
            alt=''
          />
          <h4 className='center'>Floating Frame Canvas</h4>
        </div>
        <div className='col-sm-6 canvas-right'>
          <img
            className='banner-img'
            src={require('../images/banner-image-5.png')}
            alt=''
          />
          <h4 className='center'>Large Canvas Print</h4>
        </div>
        <div className='col-sm-12'>
          <img className='banner-img' src={require('../images/womenSmile.png')} alt='' />
          <h4 className='center'>Acrylic Premium Prints</h4>
        </div>
      </div>
      <div>
        <p
          className='center testimonial-upper'
          style={{ letterSpacing: '4px', fontSize: '30px', fontWeight: '10' }}>
          CUSTOMER TESTIMONIALS
        </p>
        <div
          id='myCarousel'
          className='carousel carousel1  slide testimonial-div'
          data-ride='carousel'>
          <div className='carousel-inner'>
            <div className='item carousel-item active'>
              <div className='img-box'>
                <img src={require('../images/testimonial.png')} alt='' />
              </div>
              <div className='testmonial-quote testmonial-quote-up'>
                <img
                  className='testmonial-img'
                  src={require('../images/quotes.png')}
                  alt=''
                />
              </div>
              <p className='testimonial'>
                I have ordered many, many items from Galleriq and have always been
                satisfied. The
                <br />
                process the quick. The items are packaged with care and have
                <br />
                never been damaged. I have never had a complaint.
              </p>
              <div className='testmonial-quote testmonial-quote-down'>
                <img
                  className='testmonial-img'
                  src={require('../images/quotes.png')}
                  alt=''
                />
              </div>
              <p className='overview'>
                <p>- Nitesh Upraity</p>
              </p>
              <div className='star-rating'>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star-o' />
                  </li>
                </ul>
              </div>
            </div>
            <div className='item carousel-item'>
              <div className='img-box'>
                <img src={require('../images/testimonial.png')} alt='' />
              </div>
              <div className='testmonial-quote testmonial-quote-up'>
                <img
                  className='testmonial-img'
                  src={require('../images/quotes.png')}
                  alt=''
                />
              </div>
              <p className='testimonial'>
                I have ordered many, many items from Galleriq and have always been
                satisfied. The
                <br />
                process the quick. The items are packaged with care and have
                <br />
                never been damaged. I have never had a complaint.
              </p>
              <div className='testmonial-quote testmonial-quote-down'>
                <img
                  className='testmonial-img'
                  src={require('../images/quotes.png')}
                  alt=''
                />
              </div>
              <p className='overview'>
                <p>- Nitesh Upraity</p>
              </p>
              <div className='star-rating'>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star-o' />
                  </li>
                </ul>
              </div>
            </div>
            <div className='item carousel-item'>
              <div className='img-box'>
                <img src={require('../images/testimonial.png')} alt='' />
              </div>
              <div className='testmonial-quote testmonial-quote-up'>
                <img
                  className='testmonial-img'
                  src={require('../images/quotes.png')}
                  alt=''
                />
              </div>
              <p className='testimonial'>
                I have ordered many, many items from Galleriq and have always been
                satisfied. The
                <br />
                process the quick. The items are packaged with care and have
                <br />
                never been damaged. I have never had a complaint.
              </p>
              <p className='overview'>
                <div className='testmonial-quote testmonial-quote-down'>
                  <img
                    className='testmonial-img'
                    src={require('../images/quotes.png')}
                    alt=''
                  />
                </div>
                <p>- Nitesh Upraity</p>
              </p>
              <div className='star-rating'>
                <ul className='list-inline'>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star' />
                  </li>
                  <li className='list-inline-item'>
                    <i className='fa fa-star-half-o' />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row' style={{ paddingBottom: 50 }}>
        <div className='col-sm-8'>
          <img
            className='banner-img'
            src={require('../images/bottom-banner.png')}
            alt=''
          />
        </div>
        <div className='col-sm-4'>
          <div className='bottom-banner-right'>
            <div className='right-inner'>
              <h2>
                LATEST <strong>NEWS</strong> FROM THE <br />
                GALLERIQ <strong>BLOG</strong>
              </h2>
              <hr />
              <p>11 Mar’19:</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud. Excepteur sint.
              </p>
              <a href='#' className='btn'>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
      ;
      <div className='row'>
        <div className='col-sm-12 center'>
          <img src={require('../images/Instagram_icon@1X.png')} alt='' />
          <h3>GALLERIQ ON INSTAGRAM</h3>
          <hr style={{ width: '7rem', border: '2px solid grey', borderRadius: ' 2px' }} />
          <div style={{ margin: '0 2rem', marginBottom: '3rem' }}>
            <div id='instafeed_gallery' style={{ padding: '2rem 1rem' }}></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
