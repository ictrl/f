import { API } from '../config';
let i = 1;
export const addItem = (image, price, frame, quantity, next) => {
  localStorage.setItem(i, JSON.stringify({ image, price, frame, quantity }));
  next();
  i++;
};

export const getCart = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart'));
    }
  }
  return [];
};

export const user = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('User')) {
      return JSON.parse(localStorage.getItem('User'));
    }
  }
  return [];
};

export const o1 = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('1')) {
      return JSON.parse(localStorage.getItem('1'));
    }
  }
  return [];
};

export const o2 = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('2')) {
      return JSON.parse(localStorage.getItem('2'));
    }
  }
  return [];
};

export const o3 = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('3')) {
      return JSON.parse(localStorage.getItem('3'));
    }
  }
  return [];
};

export const itemTotal = () => {
  if (typeof window !== 'undefined') {
    if (localStorage.getItem('cart')) {
      return JSON.parse(localStorage.getItem('cart')).length;
    }
  }
  return 0;
};

// export const saveOrder = (cart) => {
//   console.log('cart-->', cart);
//   return fetch(`${API}/order`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(cart)
//   })
//     .then((response) => {
//       return response.json();
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

export const getSizeList = () => {
  return fetch(`${API}/sizeList`, {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const getStyleList = () => {
  return fetch(`${API}/styleList`, {
    method: 'GET'
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};