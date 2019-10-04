import React, { useState } from 'react';
import { getSizeList, getStyleList } from '../src/pages/cartHelpers';
export const ThemeContext = React.createContext({});

const ThemeProveider = ({ children }) => {

  const [productProperty, setProductProperty] = useState({
    user: {},
    material: 'Canvas',
    styleName: 'Single Print',
    stylePrice: null,
    size: '',
    sizePrice: null,
    images: [],
    preview:'',
    shipping: null,
    quantity: 1,
    subPrice: null,
    totalPrice: null,
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
