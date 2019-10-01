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
