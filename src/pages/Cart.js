import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../themeContext';

export default function NewCart() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;
  return (
    <div>
      <div className='container' style={{ marginTop: 50, marginBottom: 50 }}>
        <div className='row'>
          <div className='col-sm-12 col-md-10 col-md-offset-1'>
            <div className='table-responsive'>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th className='text-center'>Price</th>
                    <th className='text-center'>Total</th>
                    <th>&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className='col-sm-8 col-md-6'>
                      <div className='media'>
                        <a className='thumbnail pull-left ' href='#'>
                          {' '}
                          <img
                            className='media-object cart-img'
                            src='assets/images/material-card-1.png'
                          />{' '}
                        </a>
                        <div className='media-body cart-body'>
                          <h4 className='media-heading'>
                            <a href='#'>Product name</a>
                          </h4>
                          <h6 className='media-heading'>Size : 20 x 20</h6>
                          <h5 className='media-heading'>
                            {' '}
                            by <a href='#'>Galleriq</a>
                          </h5>
                          <span>Status: </span>
                          <span className='text-success'>
                            <strong>In Stock</strong>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='col-sm-1 col-md-1' style={{ textAlign: 'center' }}>
                      <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        defaultValue={3}
                      />
                    </td>
                    <td className='col-sm-1 col-md-1 text-center'>
                      <strong>$4.87</strong>
                    </td>
                    <td className='col-sm-1 col-md-1 text-center'>
                      <strong>$14.61</strong>
                    </td>
                    <td className='col-sm-1 col-md-1'>
                      <button type='button' className='btn btn-success'>
                        <span className='glyphicon glyphicon-pencil' /> Edit
                      </button>
                    </td>
                    <td className='col-md-1'>
                      <button type='button' className='btn btn-danger'>
                        <span className='glyphicon glyphicon-remove' /> Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className='col-md-6'>
                      <div className='media'>
                        <a className='thumbnail pull-left' href='#'>
                          {' '}
                          <img
                            className='media-object cart-img'
                            src='assets/images/material-card-2.png'
                          />{' '}
                        </a>
                        <div className='media-body cart-body'>
                          <h4 className='media-heading'>
                            <a href='#'>Product name</a>
                          </h4>
                          <h6 className='media-heading'>Size : 20 x 20</h6>
                          <h5 className='media-heading'>
                            {' '}
                            by <a href='#'>Galleriq</a>
                          </h5>
                          <span>Status: </span>
                          <span className='text-warning'>
                            <strong>Leaves warehouse in 2 - 3 weeks</strong>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td className='col-md-1' style={{ textAlign: 'center' }}>
                      <input
                        type='email'
                        className='form-control'
                        id='exampleInputEmail1'
                        defaultValue={2}
                      />
                    </td>
                    <td className='col-md-1 text-center'>
                      <strong>$4.99</strong>
                    </td>
                    <td className='col-md-1 text-center'>
                      <strong>$9.98</strong>
                    </td>
                    <td className='col-md-1'>
                      <button type='button' className='btn btn-success'>
                        <span className='glyphicon glyphicon-pencil' /> Edit
                      </button>
                    </td>
                    <td className='col-md-1'>
                      <button type='button' className='btn btn-danger'>
                        <span className='glyphicon glyphicon-remove' /> Remove
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td className='text-right'>
                      <h5>
                        <strong>$24.59</strong>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <h5>Estimated shipping</h5>
                    </td>
                    <td className='text-right'>
                      <h5>
                        <strong>$6.94</strong>
                      </h5>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <h3>Total</h3>
                    </td>
                    <td className='text-right'>
                      <h3>
                        <strong>$31.53</strong>
                      </h3>
                    </td>
                  </tr>
                  <tr>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td> &nbsp; </td>
                    <td>
                      <button type='button' className='btn btn-default'>
                        <span className='glyphicon glyphicon-shopping-cart' /> Continue
                        Shopping
                      </button>
                    </td>
                    <td>
                      <Link to='/checkout'>
                        <button type='button' className='btn btn-warning'>
                          Checkout <span className='glyphicon glyphicon-play' />
                        </button>
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
