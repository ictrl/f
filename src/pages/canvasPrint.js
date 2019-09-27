import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
import { addItem, getSizeList, getStyleList } from './cartHelpers';

import '../styles/imgupload.css';

export default function canvasPrint() {
  return (
    <Fragment>
      <div className='row' style={{ margin: '0 40px 50px 40px' }}>
        <div className='col-sm-12' style={{ marginBottom: '30px' }}>
          <h3 className='center' style={{ color: '#ff9900' }}>
            <b>CREATE YOUR OWN CANVAS</b>
          </h3>
          <h4 className='center'>
            (Acrylic Premium Prints: <b id='title'>Single Print</b>)
          </h4>
        </div>
        <div className='col-sm-6'>
          <div className='row left-section' style={{ display: 'block' }}>
            <div className='col-sm-12'>
              <div className='split'>
                <img src alt='' />
              </div>
            </div>
          </div>
          <div className='row left-section' style={{ display: 'none' }}>
            <div className='col-sm-4'>
              <div className='split'>
                <img src alt='' />
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='split'>
                <img src alt='' />
              </div>
            </div>
            <div className='col-sm-4'>
              <div className='split'>
                <img src alt='' />
              </div>
            </div>
          </div>
          <div className='row left-section' style={{ display: 'none' }}>
            <div className='col-sm-6'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='split2'>
                    <img src alt='' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='split2'>
                    <img src alt='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-6'>
              <div className='split'>
                <img src alt='' />
              </div>
            </div>
          </div>
          <div className='row left-section' style={{ display: 'none' }}>
            <div className='col-sm-5'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='split2'>
                    <img src alt='' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='split2'>
                    <img src alt='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-2'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='split2 collage1'>
                    <img src alt='' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='split2 collage2'>
                    <img src alt='' />
                  </div>
                </div>
              </div>
            </div>
            <div className='col-sm-5'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='split2'>
                    <img src alt='' />
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='split2'>
                    <img src alt='' />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row' style={{ marginTop: '20px' }}>
            <div className='col-sm-6 center'>
              <a className='btn btn-default' value='Input Button'>
                <img src={require('../images/back.png')} alt='' />
              </a>
            </div>
            <div className='col-sm-6 center'>
              <a className='btn btn-warning' value='Input Button'>
                <img src={require('../images/upload.png')} alt='' />
                <input type='file' id='file' accept='image/*' />
              </a>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='row'>
            <div className='col-sm-12' style={{ margin: '20px 0px' }}>
              <h4>
                <strong>1. Select Styles</strong>
              </h4>
            </div>
            <div className='col-sm-3'>
              <div className='card collage-thumbnail i1'>
                <img src={require('../images/single.png')} alt='' />
                <h5>
                  Single <br />
                  Print
                </h5>
                <p>₹1177.00</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card collage-thumbnail i2'>
                <img src={require('../images/split.png')} alt='' />
                <h5>
                  Split
                  <br />
                  Image
                </h5>
                <p>₹1177.00</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card collage-thumbnail i3'>
                <img src={require('../images/wall.png')} alt='' />
                <h5>
                  Wall
                  <br />
                  Displays
                </h5>
                <p>₹1177.00</p>
              </div>
            </div>
            <div className='col-sm-3'>
              <div className='card collage-thumbnail i4'>
                <img src={require('../images/collage.png')} alt='' />
                <h5>
                  Collage
                  <br />
                  Image
                </h5>
                <p>₹1177.00</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12' style={{ margin: '20px 0px' }}>
              <h4>
                <strong>2. Select size &amp; shape</strong>
              </h4>
            </div>
            <div className='col-sm-12'>
              <select
                className='browser-default custom-select custom-select-lg mb-3'
                style={{ border: '2px solid #ff9900', padding: '10px' }}>
                <option selected>Open this select menu</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
