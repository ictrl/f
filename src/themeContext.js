import React, { useState } from 'react';

export const ThemeContext = React.createContext({});

const ThemeProveider = ({ children }) => {
  const [productProperty, setProductProperty] = useState({
    material: 'Canvas',
    styleName: 'Single Prints',
    show: false,
    sizeShape: '',
    price: 11,
    image: [],
    shipping: 10,
    url: [],
    quantity: 1,
    subPrice: 11,
    user: {},
    totalPrice: 21,
    div: (
      <div className='row left-section ' style={{ display: 'block' }}>
        {' '}
        <div className='col-sm-12'>
          <div className='split'>
            <img src alt='' />
          </div>
        </div>
      </div>
    )
  });

  return (
    <ThemeContext.Provider value={{ productProperty, setProductProperty }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProveider;
