import React, { useContext } from 'react';
import { ThemeContext } from '../App';
import { API } from '../config';

export default function NewCheckOut() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;

  const createPost = (order) => {
    console.log('createpost starts');
    return fetch(`${API}/bid/pay`, {
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify(order)
    })
      .then((res) => res.text())
      .then((text) => (window.location.href = text))
      .catch((err) => {
        console.log(err);
      });
  };

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
    {
      /**setProductProperty({ ...productProperty, user: JSON.stringify(formdata) }); */
    }

    const order = {
      purpose: 'GalleriQ Payment',
      amount: productProperty.totalPrice,
      frame: productProperty.material + " " + productProperty.styleName,
      buyer_name: f,
      email: e,
      phone: p,
      address: a,
      // image:  productProperty.images[0],
      image:  productProperty.preview,
      quantity:  productProperty.quantity,
      user_id: '101',
      // redirect_url: `http://localhost:8001/bid/callback?user_id=${user.id}`,
      //redirect_url: `${API}/bid/callback?user_id=101`,
      redirect_url: 'http://157.245.101.109/bid/callback?user_id=1010',
      webhook_url: '/webhook/'
    };

    createPost(order);

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
                      placeholder="John"
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
                      placeholder="Don"
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
                      placeholder="My address"
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
                      placeholder="My city"
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
                      placeholder="My state"
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
                      placeholder="My postal code"
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
                      placeholder="8492785928"
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
                      placeholder="example@mail.com"
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    
                    <div className='col-md-6 col-sm-6 col-xs-12'>
                      {/**<Link to='/payment-complete'> */}
                      <button type='submit' className='btn btn-warning btn-submit-fix'>
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6" >
              {/*REVIEW ORDER*/}
              <div className='panel panel-warning'>
                <div className='panel-heading heading-warning'>
                  Review Order{' '}
                  <div className='pull-right'>
                    <small>
                      {/* <a className='afix-1' href='#'>
                        Edit Cart
                      </a> */}
                    </small>
                  </div>
                </div>
                <div className='panel-body'>
                  <div className='form-group'>
                    <div className='col-sm-3 col-xs-3'>
                      <img
                        className='img-responsive'
                        src={ productProperty.images[0] }
                      />
                    </div>
                    <div className='col-sm-6 col-xs-6'>
                      <div className='col-xs-12'>{ productProperty.material +  productProperty.styleName}</div>
                      <div className='col-xs-12'>
                        <small>
                          Quantity:<span> { productProperty.quantity} </span>
                        </small>
                      </div>
                    </div>
                    <div className='col-sm-3 col-xs-3 text-right'>
                      <h6>
                        <span>₹ </span> { productProperty.subPrice}
                      </h6>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-xs-12'>
                      <strong>Subtotal</strong>
                      <div className='pull-right'>
                        <span> ₹ </span>
                        <span>{ productProperty.subPrice}</span>
                      </div>
                    </div>
                    <div className='col-xs-12'>
                      <small>Shipping</small>
                      <div className='pull-right'>
                        <span> ₹ { productProperty.shipping}</span>
                      </div>
                    </div>
                  </div>
                  <div className='form-group'>
                    <hr />
                  </div>
                  <div className='form-group'>
                    <div className='col-xs-12'>
                      <strong>Order Total</strong>
                      <div className='pull-right'>
                        <span>₹</span>
                        <span>{ productProperty.totalPrice}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*REVIEW ORDER END*/}
              </div>
          </form>
        </div>
        <div className='row cart-footer'></div>
      </div>
    </div>
  );
}
