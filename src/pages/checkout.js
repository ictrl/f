// import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// export default function PaymentComplete() {
//   const clearLocalStorage = () => {
//     localStorage.clear();
//   };

//   const content = () => (
//     <div class='center  jumbotron jumbotron-fluid'>
//       <div class='container'>
//         <h1 class='display-4'>checkout</h1>
//         {clearLocalStorage()}
//         <Link to='/summary'>
//           <button>Summary</button>
//         </Link>
//       </div>
//     </div>
//   );

//   return <Fragment>{content()}</Fragment>;
// }

import React from 'react';

export default function newCheckout() {
  return (
    <div>
      <div>
        <div className='row cart-body'>
          <form className='form-horizontal' method='post' action>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-push-6 col-sm-push-6'>
              {/*REVIEW ORDER*/}
              <div className='panel panel-warning'>
                <div className='panel-heading heading-warning'>
                  Review Order{' '}
                  <div className='pull-right'>
                    <small>
                      <a className='afix-1' href='#'>
                        Edit Cart
                      </a>
                    </small>
                  </div>
                </div>
                <div className='panel-body'>
                  <div className='form-group'>
                    <div className='col-sm-3 col-xs-3'>
                      <img
                        className='img-responsive'
                        src={require('../images/material-card-1.png')}
                      />
                    </div>
                    <div className='col-sm-6 col-xs-6'>
                      <div className='col-xs-12'>Product name</div>
                      <div className='col-xs-12'>
                        <small>
                          Quantity:<span>1</span>
                        </small>
                      </div>
                    </div>
                    <div className='col-sm-3 col-xs-3 text-right'>
                      <h6>
                        <span>$</span>25.00
                      </h6>
                    </div>
                  </div>
                  <div className='form-group'>
                    <hr />
                  </div>
                  <div className='form-group'>
                    <div className='col-sm-3 col-xs-3'>
                      <img
                        className='img-responsive'
                        src={require('../images/material-card-2.png')}
                      />
                    </div>
                    <div className='col-sm-6 col-xs-6'>
                      <div className='col-xs-12'>Product name</div>
                      <div className='col-xs-12'>
                        <small>
                          Quantity:<span>1</span>
                        </small>
                      </div>
                    </div>
                    <div className='col-sm-3 col-xs-3 text-right'>
                      <h6>
                        <span>$</span>25.00
                      </h6>
                    </div>
                  </div>
                  <div className='form-group'>
                    <hr />
                  </div>
                  <div className='form-group'>
                    <div className='col-sm-3 col-xs-3'>
                      <img
                        className='img-responsive'
                        src={require('../images/material-card-3.png')}
                      />
                    </div>
                    <div className='col-sm-6 col-xs-6'>
                      <div className='col-xs-12'>Product name</div>
                      <div className='col-xs-12'>
                        <small>
                          Quantity:<span>2</span>
                        </small>
                      </div>
                    </div>
                    <div className='col-sm-3 col-xs-3 text-right'>
                      <h6>
                        <span>$</span>50.00
                      </h6>
                    </div>
                  </div>
                  <div className='form-group'>
                    <hr />
                  </div>
                  <div className='form-group'>
                    <div className='col-xs-12'>
                      <strong>Subtotal</strong>
                      <div className='pull-right'>
                        <span>$</span>
                        <span>200.00</span>
                      </div>
                    </div>
                    <div className='col-xs-12'>
                      <small>Shipping</small>
                      <div className='pull-right'>
                        <span>-</span>
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
                        <span>$</span>
                        <span>150.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*REVIEW ORDER END*/}
            </div>
            <div className='col-lg-6 col-md-6 col-sm-6 col-xs-12 col-md-pull-6 col-sm-pull-6'>
              {/*SHIPPING METHOD*/}
              <div className='panel panel-warning'>
                <div className='panel-heading heading-warning'>Address</div>
                <div className='panel-body'>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <h4>Shipping Address</h4>
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-12'>
                      <strong>Country:</strong>
                    </div>
                    <div className='col-md-12'>
                      <input
                        type='text'
                        className='form-control'
                        name='country'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-6 col-xs-12'>
                      <strong>First Name:</strong>
                      <input
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
                        type='text'
                        name='email_address'
                        className='form-control'
                        defaultValue
                      />
                    </div>
                  </div>
                  <div className='form-group'>
                    <div className='col-md-6 col-sm-6 col-xs-12'>
                      <Link to="/summary">
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
