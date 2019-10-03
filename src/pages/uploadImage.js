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
    };

    reader.readAsDataURL(file);
  };

  const mainSection = () => {
    var frame = productProperty.styleName;
    if (frame == 'Single Print') {
      return (
        <div className='row left-section ' style={{ display: 'block' }}>
          {' '}
          <div className='col-sm-12'>
            <div class='upload-image-preview split'>
              <img src={productProperty.url} alt='' />
            </div>
            <input type='file' onChange={_handleImageChange} />
          </div>
        </div>
      );
    } else if (frame == 'Split Image') {
      return <h1>Split Frame</h1>;
      //   <div className='row left-section' style={{ display: 'block' }}>
      //   <div className='col-sm-4'>
      //     <div className='split upload-image-preview'>
      //       <img src={productProperty.url} alt='' />
      //     </div>
      //     <input type='file' onChange={_handleImageChange} />
      //   </div>
      //   <div className='col-sm-4'>
      //     <div className='split upload-image-preview'>
      //       <img src={productProperty.url} alt='' />
      //     </div>
      //     <input type='file' onChange={_handleImageChange} />
      //   </div>
      //   <div className='col-sm-4'>
      //     <div className='split upload-image-preview'>
      //       <img src={productProperty.url} alt='' />
      //     </div>
      //     <input type='file' onChange={_handleImageChange} />
      //   </div>
      // </div>
    } else if (frame == 'Wall Displays') {
      return <h1>Wall Displays</h1>;
    } else {
      return <h1>Collage Image</h1>;
    }
  };

  return (
    <Fragment>
      <div className='center'>
        {mainSection()}

        <Link to='/cart'>
          <button className='btn '> Add to cart </button>
        </Link>
      </div>
    </Fragment>
  );
}
