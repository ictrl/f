import React, { useState, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../styles/imgupload.css';
import { ThemeContext } from '../themeContext';

export default function CanvasPrint() {
  //2 oct
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;
  //2oct ~
  // const [styleImage, setStyleImage] = useState(null);

  // const handleChange = (event) => {
  //   console.log('call');
  //   const file = URL.createObjectURL(event.target.files[0]);

  //   setStyleImage(file);
  // };
  // const [styleName, setStyleName] = useState('Single Print');
  // const [styleDiv, setStyleDiv] = useState(
  //   <div className='row left-section' style={{ display: 'block' }}>
  //     <div className='col-sm-12'>
  //       <div className='split'>
  //         <img src alt='' />
  //       </div>
  //     </div>
  //   </div>
  // );

  const splitHandler = (e, productStyle, productPrice) => {
    //2 oct
    setProductProperty({ ...productProperty, style: productStyle, price: productPrice });
    //2oct~
    // if (e.target.classList[2] == 'i1') {
    //   setStyleName('Single Print');
    //   setStyleDiv(
    //     <div className='row left-section' style={{ display: 'block' }}>
    //       <div className='col-sm-12'>
    //         <div className='split'>
    //           <img src alt='' />
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else if (e.target.classList[2] == 'i2') {
    //   setStyleName('Split Image');
    //   setStyleDiv(
    //     <div className='row left-section' style={{ display: 'block' }}>
    //       <div className='col-sm-4'>
    //         <div className='split'>
    //           <img src alt='' />
    //         </div>
    //       </div>
    //       <div className='col-sm-4'>
    //         <div className='split'>
    //           <img src alt='' />
    //         </div>
    //       </div>
    //       <div className='col-sm-4'>
    //         <div className='split'>
    //           <img src alt='' />
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else if (e.target.classList[2] == 'i3') {
    //   setStyleName('Wall Display');
    //   setStyleDiv(
    //     <div className='row left-section' style={{ display: 'block' }}>
    //       <div className='col-sm-6'>
    //         <div className='row'>
    //           <div className='col-sm-12'>
    //             <div className='split2'>
    //               <img src alt='' />
    //             </div>
    //           </div>
    //         </div>
    //         <div className='row'>
    //           <div className='col-sm-12'>
    //             <div className='split2'>
    //               <img src alt='' />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-sm-6'>
    //         <div className='split'>
    //           <img src alt='' />
    //         </div>
    //       </div>
    //     </div>
    //   );
    // } else {
    //   setStyleName('Collage Image');
    //   setStyleDiv(
    //     <div className='row left-section' style={{ display: 'block' }}>
    //       <div className='col-sm-5'>
    //         <div className='row'>
    //           <div className='col-sm-12'>
    //             <div className='split2'>
    //               <img src alt='' />
    //             </div>
    //           </div>
    //         </div>
    //         <div className='row'>
    //           <div className='col-sm-12'>
    //             <div className='split2'>
    //               <img src alt='' />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-sm-2'>
    //         <div className='row'>
    //           <div className='col-sm-12'>
    //             <div className='split2 collage1'>
    //               <img src alt='' />
    //             </div>
    //           </div>
    //         </div>
    //         <div className='row'>
    //           <div className='col-sm-12'>
    //             <div className='split2 collage2'>
    //               <img src alt='' />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className='col-sm-5'>
    //         <div className='row'>
    //           <div className='col-sm-12'>
    //             <div className='split2'>
    //               <img src alt='' />
    //             </div>
    //           </div>
    //         </div>
    //         <div className='row'>
    //           <div className='col-sm-12'>
    //             <div className='split2'>
    //               <img src alt='' />
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   );
    // }
  };

  return (
    <Fragment>
      <div className='row' style={{ margin: '0 40px 50px 40px' }}>
        <div className='col-sm-12' style={{ marginBottom: '30px' }}>
          <h3 className='center' style={{ color: '#ff9900' }}>
            <b>CREATE YOUR OWN CANVAS</b>
          </h3>

          <h4 className='center'>
            {/**(Acrylic Premium Prints: <b id='title'>{styleName}</b>) */}
            (Acrylic Premium Prints: <b id='title'>'styleName'</b>)
          </h4>
        </div>
        <div className='col-sm-6'>
          'styleDiv'
          {/**{styleDiv} */}
          <div className='row' style={{ marginTop: '20px' }}>
            <div
              className='col-sm-6 ce
            nter'>
              <Link
                to='/CreateYourPrint'
                className='btn btn-default'
                value='Input Button'>
                <img src={require('../images/back.png')} alt='' />
              </Link>
            </div>
            <div className='col-sm-6 center'>
              <Link to='/UploadImage' className='btn btn-warning' value='Input Button'>
                <img src={require('../images/upload.png')} alt='' />
                <input type='file' id='file' accept='image/*' />
              </Link>
            </div>
          </div>
        </div>
        <div className='col-sm-6'>
          <div className='row'>
            <div className='col-sm-12' style={{ margin: '20px 0px' }}>
              <h4>
                <strong>1. Select Styles</strong>
              </h4>
            </div>
            <div className='col-sm-3 x i1' onClick={splitHandler('Single Print', '1177')}>
              <div className='card collage-thumbnail i1'>
                <img className='x xx i1' src={require('../images/single.png')} alt='' />
                <h5 className='x xx i1'>
                  Single <br />
                  Print
                </h5>
                <p className='x xx i1'>₹1177.00</p>
              </div>
            </div>
            <div className='col-sm-3 x i2' onClick={splitHandler('Split Image', '1177')}>
              <div className='card collage-thumbnail i2'>
                <img src={require('../images/split.png')} alt='' className='x xx i2' />
                <h5 className='x xx i2'>
                  Split
                  <br />
                  Image
                </h5>
                <p className='x xx i2'> ₹1177.00</p>
              </div>
            </div>
            <div
              className='col-sm-3 x i3'
              onClick={splitHandler('Wall Displays', '1177')}>
              <div className='card collage-thumbnail i3'>
                <img src={require('../images/wall.png')} alt='' className='x xx i3' />
                <h5 className='x xx i3'>
                  Wall
                  <br />
                  Displays
                </h5>
                <p className='x xx i3'> ₹1177.00</p>
              </div>
            </div>
            <div className='col-sm-3 i4' onClick={splitHandler('Collage Image', '1177')}>
              <div className='card collage-thumbnail '>
                <img src={require('../images/collage.png')} alt='' />
                <h5>
                  Collage
                  <br />
                  Image
                </h5>
                <p>₹1177.00</p>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-sm-12' style={{ margin: '20px 0px' }}>
              <h4>
                <strong>2. Select size &amp; shape</strong>
              </h4>
            </div>
            <div className='col-sm-12'>
              <select className='browser-default custom-select custom-select-lg mb-3 shape'>
                <option selected>*Please select value &nbsp;</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
              <span className='arrow-down'>▼</span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
