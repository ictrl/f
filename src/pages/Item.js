import React, { useState, Fragment } from 'react';
import { Link } from 'react-router-dom';
import CanvasPrint from './canvasPrint';

const Item = ({ frame = '', price = '', image = '' }) => {
  const [quantity, setQuantity] = useState('1');

  const handleChange = (event) => {
    setQuantity(event.target.value);
  };

  return (
    <Fragment>
      <div>
        <div className='well well-large col-md-12'>
          <div className='col-md-5'>
            <img
              src={image}
              alt=''
              className='cartImg'
              style={{ height: '21rem', verticalAlign: 'middle' }}
            />
          </div>
          <div className='col-md-4'>
            <div className='row'>
              <h3 style={{ marginLeft: '5rem', fontSize: '16px', fontWeight: 'bold' }}>
                {frame}
              </h3>
            </div>

            <div>
              <div
                className='input-group mb-3'
                style={{ marginLeft: '5rem', marginTop: '1.2rem' }}>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>Quantity</span>
                </div>
                <input
                  type='number'
                  className='form-control quantity'
                  value={quantity}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className='row'>
              <div className='col-md-6'>
                <span
                  className='text-primary'
                  style={{ marginTop: '2.5rem', fontSize: '24px', fontWeight: '700' }}>
                  ₹
                </span>
              </div>
              <div className='col-md-6'>
                <p
                  className='text-primary price'
                  style={{ marginTop: '1.2rem', fontSize: '24px', fontWeight: '700' }}>
                  {price * quantity}
                </p>
              </div>
            </div>

            {/** <Link style={{ lineHeight: '3rem' }} to=''>
              &times; Remove
            </Link>
            <br />
            <Link to='{/CanvasPrint}'>Edit Selection</Link> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Item;
