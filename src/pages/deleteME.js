import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../themeContext';

export default function UploadImage() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;

  const _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setProductProperty({ ...productProperty, image: file });
      setProductProperty({ ...productProperty, url: reader.result });
      console.log('image', file);
      console.log('url', reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <Fragment>
      <div className='center'>
        <div className='row left-section ' style={{ display: 'block' }}>
          {' '}
          <div className='col-sm-12'>
            <div class='upload-image-preview split' id='uploadImg'>
              <img src={productProperty.url} alt='' />
            </div>
            <input type='file' onChange={_handleImageChange} />
          </div>
        </div>

        <Link to='/cart'>
          <button className='btn '> Add to cart </button>
        </Link>
      </div>
    </Fragment>
  );
}
