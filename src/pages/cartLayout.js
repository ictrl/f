import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../themeContext';

export default function Layout({
  title = 'Title',
  size = 'Size',
  status = 'Status',
  price = 11,
  quantity = 1,
  image = 'https://samrat.online/images/pic.gif'
}) {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;
  const handle = (e) => {
    setProductProperty({ ...productProperty, quantity: e.target.value });

    var subP = parseInt(price) * parseInt(e.target.value);
    setProductProperty({
      ...productProperty,
      totalPrice: subP + 10,
      subPrice: subP
    });
  };
  return (
    <tr>
      <td className='col-md-6'>
        <div className='media'>
          <a className='thumbnail pull-left' href='#'>
            {' '}
            <img className='media-object cart-img' src={image} />{' '}
          </a>
          <div className='media-body cart-body'>
            <h4 className='media-heading'>
              <a href='#'>{title}</a>
            </h4>
            <h6 className='media-heading'>Size : {size}</h6>
          </div>
        </div>
      </td>
      <td className='col-md-1' style={{ textAlign: 'center' }}>
        <input type='number' className='form-control' id='quantity' onChange={handle} />
      </td>
      <td className='col-md-1 text-center'>
        <strong>₹ {price}</strong>
      </td>
      <td className='col-md-1 text-center'>
        <strong>₹ {productProperty.subPrice} </strong>
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
  );
}
