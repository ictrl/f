import React, { useState } from 'react';

export const ThemeContext = React.createContext({});

const ThemeProveider = ({ children }) => {
  const [productProperty, setProductProperty] = useState({
    material: '',
    style: '',
    sizeShape: '',
    price: ''
  });

  return (
    <ThemeContext.Provider value={{ productProperty, setProductProperty }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProveider;
