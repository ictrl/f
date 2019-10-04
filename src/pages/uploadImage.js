import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../themeContext';
import htmlToImage from 'html-to-image';
let arr = [];
export default function UploadImage() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;

  const _handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      arr.push(reader.result);
      setProductProperty({ ...productProperty, images: arr});
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
              <img src={productProperty.images[0]} alt='' />
            </div>
            <input type='file' onChange={_handleImageChange} />
          </div>
          <div className='col-sm-4'>
            <div className='split upload-image-preview'>
              <img src={productProperty.images[1]} alt='' />
            </div>
            <input type='file' onChange={_handleImageChange} />
          </div>
          <div className='col-sm-4'>
            <div className='split upload-image-preview'>
              <img src={productProperty.images[2]} alt='' />
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
        // return (
        //   <div className='row left-section' style={{ display: 'block' }}>
        //     {' '}
        //     <div className='col-sm-12 center'>
        //       <div class='upload-image-preview split'>
        //         <img src={productProperty.images[0]} alt='' />
        //       </div>
        //       <input type='file' onChange={_handleImageChange} />
        //     </div>
        //   </div>
        return (
          <div className='row left-section' style={{ display: 'block' }}>
            <div className='col-sm-4'>
              <div className='split upload-image-preview'>
                <img src={productProperty.images[0]} alt='' />
              </div>
              <input type='file' onChange={_handleImageChange} />
            </div>
            <div className='col-sm-4'>
              <div className='split upload-image-preview'>
                <img src={productProperty.images[1]} alt='' />
              </div>
              <input type='file' onChange={_handleImageChange} />
            </div>
            <div className='col-sm-4'>
              <div className='split upload-image-preview'>
                <img src={productProperty.images[2]} alt='' />
              </div>
              <input type='file' onChange={_handleImageChange} />
            </div>
          </div>
        );
      }
    }
  };

  const savePreview  = () => {

    var node = document.getElementById('preview');
 
    htmlToImage.toPng(node)
      .then(function (dataUrl) {
        console.log("pre",dataUrl);
        
        setProductProperty({ ...productProperty, preview: dataUrl});
      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });
    
  }
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
      <div id="preview">
      {mainSection()}
      </div>

        <div className='row' style={{ marginTop: '20px' }}>
          {/* <div className='col-sm-6 center'> */}
            {/* <Link to='/CanvasPrint' className='btn btn-default' value='Input Button'>
              <button className='btn'>Select Style</button>
            </Link> */}
          {/* </div> */}
          {/* <div className='col-sm-6 center'> */}
            <Link to='/cart'>
              <button className='btn btn-warning' style={{fontSize:"2rem"}} onClick={savePreview}> Add to cart </button>
            </Link>
          {/* </div> */}
        </div>
      </div>
    </Fragment>
  );
}
