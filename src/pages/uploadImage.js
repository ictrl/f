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
    if (frame == 'Split Image') {
      return (
        <div className='row left-section' style={{ display: 'block' }}>
          <div className='col-sm-4'>
            <div className='split upload-image-preview'>
              <img src={productProperty.url} alt='' />
            </div>
            <input type='file' onChange={_handleImageChange} />
          </div>
          <div className='col-sm-4'>
            <div className='split upload-image-preview'>
              <img src={productProperty.url} alt='' />
            </div>
            <input type='file' onChange={_handleImageChange} />
          </div>
          <div className='col-sm-4'>
            <div className='split upload-image-preview'>
              <img src={productProperty.url} alt='' />
            </div>
            <input type='file' onChange={_handleImageChange} />
          </div>
        </div>
      );
    } else if (frame == 'Wall Displays') {
      return <h1>Wall Displays</h1>;
    } else if (frame == 'Collage Image') {
      return <h1>Collage Image</h1>;
    } else {
      if (frame == 'Single Print') {
        return (
          <div className='row left-section' style={{ display: 'block' }}>
            {' '}
            <div className='col-sm-12 center'>
              <div class='upload-image-preview split'>
                <img src={productProperty.url} alt='' />
              </div>
              <input type='file' onChange={_handleImageChange} />
            </div>
          </div>
        );
      }
    }
  };

  return (
    <Fragment>
      <div className='center'>
        <div className='col-sm-12' style={{ marginBottom: '30px' }}>
          <h3 className='center' style={{ color: '#ff9900' }}>
            <b>CREATE YOUR OWN CANVAS</b>
          </h3>
          <h4 className='center'>
            ({productProperty.material}: <b id='title'>{productProperty.styleName}</b>)
          </h4>
        </div>
        {mainSection()}

        <div className='row' style={{ marginTop: '20px' }}>
          <div className='col-sm-6 center'>
            <Link to='/CanvasPrint' className='btn btn-default' value='Input Button'>
              <button className='btn'>Select Style</button>
            </Link>
          </div>
          <div className='col-sm-6 center'>
            <Link to='/cart'>
              <button className='btn '> Add to cart </button>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
