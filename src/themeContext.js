import React, { useState } from 'react';

export const ThemeContext = React.createContext({});

const ThemeProveider = ({ children }) => {
  const [productProperty, setProductProperty] = useState({
    material: '',
    style: '',
    sizeShape: '',
    price: '',
    image: '',
    url: '',
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
