import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '../themeContext';

export default function NewCheckOut() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;

  const saveUser = (e) => {
    e.preventDefault();
    var f = document.getElementById('f').value;
    var l = document.getElementById('l').value;
    var a = document.getElementById('a').value;
    var c = document.getElementById('c').value;
    var s = document.getElementById('s').value;
    var z = document.getElementById('z').value;
    var p = document.getElementById('p').value;
    var e = document.getElementById('e').value;
    const formdata = {
      fname: f,
      lname: l,
      address: a,
      city: c,
      state: s,
      zip: z,
      email: e,
      phone: p
    };
    setProductProperty({ ...productProperty, user: JSON.stringify(formdata) });

    console.log(JSON.parse(productProperty.user));
  };
  return (
    <div>
      <div>
        <div className='row cart-body'>
          <form className='form-horizontal' onSubmit={saveUser}>
            <div className='mx-auto col-lg-6 '>
              <div className='panel panel-warning'>
                <div className='panel-heading heading-warning'>Address</div>
                <div className='panel-body'>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <h4>Shipping Address</h4>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-6 col-xs-12'>
                      <strong>First Name:</strong>
                      <input
                        id='f'
                        type='text'
                        name='first_name'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                    <div className='span1' />
                    <div className='col-md-6 col-xs-12'>
                      <strong>Last Name:</strong>
                      <input
                        id='l'
                        type='text'
                        name='last_name'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <strong>Address:</strong>
                    </div>
                    <div className='col-md-12'>
                      <input
                        id='a'
                        type='text'
                        name='address'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <strong>City:</strong>
                    </div>
                    <div className='col-md-12'>
                      <input
                        id='c'
                        type='text'
                        name='city'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <strong>State:</strong>
                    </div>
                    <div className='col-md-12'>
                      <input
                        id='s'
                        type='text'
                        name='state'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <strong>Zip / Postal Code:</strong>
                    </div>
                    <div className='col-md-12'>
                      <input
                        id='z'
                        type='text'
                        name='zip_code'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <strong>Phone Number:</strong>
                    </div>
                    <div className='col-md-12'>
                      <input
                        id='p'
                        type='text'
                        name='phone_number'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <strong>Email Address:</strong>
                    </div>
                    <div className='col-md-12'>
                      <input
                        id='e'
                        type='text'
                        name='email_address'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-6 col-sm-6 col-xs-12'>
                      <Link to='/payment-complete'>
                        <button type='submit' className='btn btn-warning btn-submit-fix'>
                          Place Order
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className='row cart-footer'></div>
      </div>
    </div>
  );
}
