import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

export default function uploadImage() {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const content = () => (
    <div>
      <div class='center  jumbotron jumbotron-fluid'>
        <div class='container'>
          <h1 class='display-4'>Under Construction!</h1>
          {clearLocalStorage()}
        </div>
      </div>
      {/**<Link to='/cart' className='btn btn-default' value='Input Button'>
        <h1>Add to cart</h1>
      </Link> */}
    </div>
  );

  return <Fragment>{content()}</Fragment>;
}
