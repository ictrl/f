import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import CanvasPrint from '../pages/canvasPrint';

export default function CreateYourPrint() {
  return (
    <Fragment>
      <div className='row' style={{ marginBottom: '3rem' }}>
        <div className='col-sm-12 center' style={{ marginBottom: '30px' }}>
          <h3>
            <strong style={{ color: '#ff9900' }}>CREATE YOUR OWN CANVAS</strong>
          </h3>
          <h4>(Choose the perfect material)</h4>
        </div>

        <Link to='CanvasPrint'>
          <div className='col-sm-4'>
            <div className='card center canvas-card'>
              <img
                src={require('../images/material-card-1.png')}
                alt='Avatar'
                style={{ width: '100%' }}
              />
              <h4>
                <b>Canvas</b>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </p>
            </div>
          </div>
        </Link>

        <Link to='CanvasPrint'>
          <div className='col-sm-4'>
            <div className='card center canvas-card'>
              <img
                src={require('../images/material-card-2.png')}
                alt='Avatar'
                style={{ width: '100%' }}
              />
              <h4>
                <b>HD Metal</b>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </p>
            </div>
          </div>  
        </Link>

        <Link to='CanvasPrint'>
          <div className='col-sm-4'>
            <div className='card center canvas-card'>
              <img
                src={require('../images/material-card-3.png')}
                alt='Avatar'
                style={{ width: '100%' }}
              />
              <h4>
                <b>JAcrylic</b>
              </h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the
                1500s,
              </p>
            </div>
          </div>
        </Link>
      </div>
    </Fragment>
  );
}
