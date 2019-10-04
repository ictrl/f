import React, { useState, Fragment } from 'react';
import { API } from '../config';

export default function CreateStyle() {

  const createStylePost = (a, b) => {
    return fetch(`${API}/createStyle`, {
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify({ value: a, price: b })
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clearInput = () => {
    var form1 = document.getElementById("Form1");
    var form2 = document.getElementById("Form2");
    form1.reset();
    form2.reset();
  };

  const createSizePost = (c, d) => {
    console.log("createSizePost");

    return fetch(`${API}/createSize`, {
      method: 'POST',
      Accept: 'application/json',
      'Content-Type': 'application/json',
      body: JSON.stringify({ value: c, price: d })
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const clickSubmitStyle = (e) => {
    e.preventDefault();
    
    const a = document.querySelector('#a').value;
    const b = document.querySelector('#b').value;
    
    createStylePost(a, b);
    clearInput();
  };
  const clickSubmitSize = (e) => {
    e.preventDefault();
    console.log("clickSubmitSize");
    
    const c = document.querySelector('#c').value;
    const d = document.querySelector('#d').value;
    
    createSizePost(c, d);
    clearInput();
  };

  const newCategoryFom = () => (
    <div className="col-md-12">  
    <div className="col-md-6">  
    <form onSubmit={clickSubmitStyle} id="Form1">
      <div className='form-group'>
        <h1>Create Style Price</h1>
        <select name="styleList" id="a" className="form-control">
          <option> *Please select style &nbsp;</option>
          <option value="Single Print">Single Print</option>
          <option value="Split Image">Split Image</option>
          <option value="Wall Display">Wall Display</option>
          <option value="Collage Image">Collage Image</option>
        </select>
        <input
          type='text'
          className='form-control'
          id='b'
          required
          placeholder='Style Price'
        />
      <button className='btn' style={{margin: '1rem'}}>Create Style </button>
        </div>
    </form>
  </div>
  <div className="col-md-6">  
<form onSubmit={clickSubmitSize} id="Form2">
        <h1>Create Size & Price</h1>
        <input
          type='text'
          id='c'
          className='form-control'
          required
          placeholder='Size'
        />
        <input
          type='text'
          id='d'
          className='form-control'
          required
          placeholder='Size Price'
        />
      <button className='btn' style={{margin: '1rem'}}>Create Size</button>
   
    </form>
    </div>
    </div>
  );

  return <Fragment>{newCategoryFom()}</Fragment>;
}
