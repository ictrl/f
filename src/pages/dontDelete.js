//fisrt

 <div className='row left-section' style={{ display: 'block' }}>
      <div className='col-sm-12'>
        <div>
          <img src={styleImage} />
          <input
            type='file'
            accept='image/*'
            onChange={handleChange}
            style={{ border: '20px solid red' }}
          />
        </div>
      </div>
    </div>


    //second

    <div className='row left-section' style={{ display: 'block' }}>
          <div className='col-sm-12 upload-image'>
            <div className='upload-image-preview'>
              <img src={styleImage} />
              <input
                type='file'
                accept='image/*'
                onChange={handleChange}
                style={{ border: '20px solid gold' }}
              />
            </div>
          </div>
  </div>
        
  //working
  import React, { useState, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/imgupload.css';

export default function CanvasPrint() {
  const [file, setFile] = useState(null);

  const handleChange = (event) => {
    console.log('call');
    const file = URL.createObjectURL(event.target.files[0]);

    setFile(file);
  };
  return (
    <div>
      <img src={file} />
      <input type='file' onChange={handleChange} style={{ border: '2px solid red' }} />
    </div>
  );
}
