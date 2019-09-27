<Item
  frame={JSON.parse(localStorage[i]).frame}
  image={JSON.parse(localStorage[i]).image}
  price={JSON.parse(localStorage[i]).price}
/>;

{
  objects.map((object, i) => <ObjectRow obj={object} key={i} />);
}

const myExample = () => {
  let myObj = {};
  for (let i = 0; i < 5; i++) {
    myObj.push(<MyComponent />);
  }
  return myArray;
};

//... in JSX

<tbody>{myExample()}</tbody>;

//////////







//////

/////// create your print old
<div className='container'>
        <hr size='30'></hr>
        <div class='panel panel-default'>
          <div class='panel-body'>
            <div className=' text-centre'>
              <h2 style={{ color: '#F1B000' }}>Create Your Canavs</h2>
              <hr size='30'></hr>
              <h3 style={{ color: '#666666' }}>Select Suitable Material</h3>
            </div>
            <div className='card-deck'>
              <div className='card'>
                <Link to='CanvasPrint'>
                  <img className='card-img-top' src={canvas} alt='Card  cap' />
                </Link>
                <div className='card-body text-centre'>
                  <Link to='CanvasPrint'>
                    <h5
                      className='card-title'
                      style={{ color: '#F1B000', fontSize: '18px' }}>
                      Canvas
                    </h5>
                  </Link>
                  <p className='card-text text-centre'>
                    This is a longer card It's a broader card with text below as a natural
                    lead-in to extra content. This content is a little longer. This
                    content is a little bit longer.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div className='card'>
                <Link to=''>
                  <img className='card-img-top' src={HDmetal} alt='Card  cap' />
                </Link>
                <div className='card-body text-centre'>
                  <Link to=''>
                    <h5
                      className='card-title'
                      style={{ color: '#F1B000', fontSize: '18px' }}>
                      HD Metal
                    </h5>
                  </Link>
                  <p className='card-text'>
                    This card has supporting text below as a natural lead-in to additional
                    content. This content is a little longer. This content is a little bit
                    longer.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
              <div className='card'>
                <Link to=''>
                  <img className='card-img-top' src={acrylic} alt='Card  cap' />
                </Link>
                <div className='card-body text-centre'>
                  <Link to=''>
                    <h5
                      className='card-title'
                      style={{ color: '#F1B000', fontSize: '18px' }}>
                      Acrylic
                    </h5>
                  </Link>
                  <p className='card-text'>
                    It's a broader card with text below as a natural lead-in to extra
                    content. This content is a little longer.This card has even longer
                    content than the first to show that equal height action.
                  </p>
                  <p className='card-text'>
                    <small className='text-muted'>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      ////


      ////


///////////////////////////////////


import React, { useState, Fragment, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { addItem, getSizeList, getStyleList } from './cartHelpers';

import '../styles/imgupload.css';
export default function CanvasPrint() {
  const [image, setImage] = useState('https://img.icons8.com/officel/2x/add-image.png');
  let [sizePrice, setSizePrice] = useState('50');
  let [stylePrice, setStylePrice] = useState('100');
  const [style, setStyle] = useState('Single Print');
  const [size, setSize] = useState('18" X 12"');
  const [error, setError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [sizes, setSizeList] = useState([]);
  const [styles, setStyleList] = useState([]);

  const loadSizes = () => {
    getSizeList().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setSizeList(data);
      }
    });
  };

  const loadStyles = () => {
    getStyleList().then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        setStyleList(data);
      }
    });
  };

  const handleChange = (e) => {
    if (e.target.files[0].size < 999999) {
      setError(true);
    } else {
      setError('');
      setImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const handleChangeStyle = (e) => {
    setStyle(e.target.value);
    stylePrice = document.getElementById(e.target.value).getAttribute('class');
    setStylePrice(stylePrice);
  };

  const handleChangeSize = (e) => {
    setSize(e.target.value);
    sizePrice = document.getElementById(e.target.value).getAttribute('class');
    setSizePrice(sizePrice);
  };

  const showError = () => {
    if (error) {
      return <h3 className='text-danger alert alert-danger'>Image size is too small</h3>;
    }
  };

  // const calculatePrice = () => {
  //   const w = parseInt(document.querySelector('#width').value);
  //   setWidth(w);
  //   const h = parseInt(document.querySelector('#height').value);
  //   setHeight(h);
  //   setPrice((w * h) / 3);
  // };

  const addToCart = () => {
    const frame = document.querySelector('#frame').innerHTML;
    addItem(image, stylePrice * sizePrice, frame, '1', () => {
      setRedirect(true);
    });
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };
  const showAddtoCartButton = () => {
    return (
      <button onClick={addToCart} className='btn-2 '>
        Add to cart
      </button>
    );
  };

  useEffect(() => {
    loadSizes();
    loadStyles();
  }, []);

  return (
    <Fragment>
      <div className='container'>
        {shouldRedirect(redirect)}
        <hr size='30'></hr>
        <div class='panel panel-default'>
          <div class='panel-body'>
            <div className=' text-centre'>
              <h2 style={{ color: '#F1B000' }}>Create Your Prints</h2>
              <hr size='30'></hr>
              {showError()}
              <div className='col-md-6'>
                <h3 id='frame' className style={{ color: '#666666', fontWeight: 'bold' }}>
                  {style},{size}
                </h3>
                <img src={image} className='upload-image' alt='-' id='upload-image' />
                <input type='file' id='file' accept='image/*' onChange={handleChange} />
                <label for='file' class='btn-2'>
                  Upload Image
                </label>
              </div>
              {/*    
                <div className='col-md-6'>
                <h3>Custom Size</h3>
                <input
                  type='number'
                  class='form-control'
                  name='width'
                  id='width'
                  placeholder='18 inch Width'
                  onChange={calculatePrice}
                />
                <input
                  type='number'
                  class='form-control'
                  name='height'
                  id='height'
                  placeholder='12 inch height'
                  onChange={calculatePrice}
                />*/}

              <div className='col-md-6'>
                <h3 style={{ marginTop: '3rem' }}>Select Style</h3>
                <div className='select' style={{ marginLeft: '12rem' }}>
                  <select name='slct' id='slct' onChange={handleChangeStyle}>
                    {styles.map((p, i) => (
                      <option value={p.value} key={i} id={p.value} className={p.price}>
                        {p.value}
                        &nbsp;&nbsp;&nbsp; ₹{p.price}
                      </option>
                    ))}
                  </select>
                </div>
                <h3 style={{ marginTop: '3rem' }}>Select Size</h3>
                <div className='select' style={{ marginLeft: '12rem' }}>
                  <select name='slct' id='slct' value={size} onChange={handleChangeSize}>
                    {sizes.map((p, i) => (
                      <option className={p.price} key={i} id={p.value} value={p.value}>
                        {p.value}
                        &nbsp;&nbsp;&nbsp; ₹{p.price}
                      </option>
                    ))}
                  </select>
                </div>
                <h2 style={{ marginTop: '4rem' }}>Price: {stylePrice * sizePrice} </h2>
              </div>
              {showAddtoCartButton()}
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

///jquery for functionality
$(document).ready(function () {
  $(".i1").click(function(){
    $(".left-section").css("display", "none");
    $("#title").html("Single Print");
    $( ".left-section:nth-child(1)" ).css("display", "block");
  });
  $(".i2").click(function(){
    $(".left-section").css("display", "none");
    $("#title").html("Split Image");
    $( ".left-section:nth-child(2)" ).css("display", "block");
  });
  $(".i3").click(function(){
    $(".left-section").css("display", "none");
    $("#title").html("Wall Displays");
    $( ".left-section:nth-child(3)" ).css("display", "block");
  });
  $(".i4").click(function(){
    $(".left-section").css("display", "none");
    $("#title").html("Collage Image");
    $( ".left-section:nth-child(4)" ).css("display", "block");
  });
});



//////new canvas print

<div className="row" style={{margin: '0 40px 50px 40px'}}>
  <div className="col-sm-12" style={{marginBottom: '30px'}}>
    <h3 className="center" style={{color: '#ff9900'}}><b>CREATE YOUR OWN CANVAS</b></h3>
    <h4 className="center">(Acrylic Premium Prints: <b id="title">Single Print</b>)</h4>
  </div>
  <div className="col-sm-6">
    <div className="row left-section" style={{display: 'block'}}>
      <div className="col-sm-12">
        <div className="split"><img src alt="" /></div>
      </div>
    </div>
    <div className="row left-section" style={{display: 'none'}}>
      <div className="col-sm-4">
        <div className="split"><img src alt="" /></div>
      </div>
      <div className="col-sm-4">
        <div className="split"><img src alt="" /></div>
      </div>
      <div className="col-sm-4">
        <div className="split"><img src alt="" /></div>
      </div>
    </div>
    <div className="row left-section" style={{display: 'none'}}>
      <div className="col-sm-6">
        <div className="row">
          <div className="col-sm-12">
            <div className="split2"><img src alt="" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="split2"><img src alt="" /></div>
          </div>
        </div>
      </div>
      <div className="col-sm-6">
        <div className="split"><img src alt="" /></div>
      </div>
    </div>
    <div className="row left-section" style={{display: 'none'}}>
      <div className="col-sm-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="split2"><img src alt="" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="split2"><img src alt="" /></div>
          </div>
        </div>
      </div>
      <div className="col-sm-2">
        <div className="row">
          <div className="col-sm-12">
            <div className="split2 collage1"><img src alt="" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="split2 collage2"><img src alt="" /></div>
          </div>
        </div>
      </div>
      <div className="col-sm-5">
        <div className="row">
          <div className="col-sm-12">
            <div className="split2"><img src alt="" /></div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <div className="split2"><img src alt="" /></div>
          </div>
        </div>
      </div>
    </div>
    <div className="row" style={{marginTop: '20px'}}>
      <div className="col-sm-6 center">
        <a className="btn btn-default" value="Input Button"><img src="assets/images/back.png" alt="" /></a>
      </div>
      <div className="col-sm-6 center">
        <a className="btn btn-warning" value="Input Button"><img src="assets/images/upload.png" alt="" /></a>
      </div>
    </div>
  </div>
  <div className="col-sm-6">
    <div className="row">
      <div className="col-sm-12" style={{margin: '20px 0px'}}>
        <h4><strong>1. Select Styles</strong></h4>
      </div>
      <div className="col-sm-3">
        <div className="card collage-thumbnail i1">
          <img src="assets/images/single.png" alt="" />
          <h5>Single <br />Print</h5>
          <p>₹1177.00</p>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card collage-thumbnail i2">
          <img src="assets/images/split.png" alt="" />
          <h5>Split<br />Image</h5>
          <p>₹1177.00</p>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card collage-thumbnail i3">
          <img src="assets/images/wall.png" alt="" />
          <h5>Wall<br />Displays</h5>
          <p>₹1177.00</p>
        </div>
      </div>
      <div className="col-sm-3">
        <div className="card collage-thumbnail i4">
          <img src="assets/images/collage.png" alt="" />
          <h5>Collage<br />Image</h5>
          <p>₹1177.00</p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12" style={{margin: '20px 0px'}}>
        <h4><strong>2. Select size &amp; shape</strong></h4>
      </div>
      <div className="col-sm-12">
        <select className="browser-default custom-select custom-select-lg mb-3" style={{border: '2px solid #ff9900', padding: '10px'}}>
          <option selected>Open this select menu</option>
          <option value={1}>One</option>
          <option value={2}>Two</option>
          <option value={3}>Three</option>
        </select>
      </div>
    </div>
  </div>
</div>



////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////















