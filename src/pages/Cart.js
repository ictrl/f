// import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
// import Item from './Item';
// import { getCart } from './cartHelpers';

// var xquantity = 0;
// var xprice = 0;

// const updateCart = () => {
//   for (var i = 0; i < localStorage.length; i++) {
//     xquantity = xquantity + parseInt(document.querySelectorAll('.quantity')[i].value);
//     xprice = xprice + parseInt(document.querySelectorAll('.price')[i].innerText);
//   }

//   var existing = localStorage.getItem('User');

//   existing = existing ? JSON.parse(existing) : {};

//   existing['quantity'] = '';
//   existing['quantity'] = xquantity;
//   existing['price'] = '';
//   existing['price'] = xprice;

//   localStorage.setItem('cart', JSON.stringify(existing));
// };

// const Cart = () => {
//   return (
//     <Fragment>
//       <div className='container'>
//         <div className='row'>
//           <h1 style={{ color: '#F1B000', textAlign: 'center' }}>Shopping Cart </h1>
//           <div className=' col-md-8 offset'>
//             {(function(rows, i, len) {
//               while (++i <= len) {
//                 rows.push(
//                   <Item
//                     key={i}
//                     frame={JSON.parse(localStorage[i]).frame}
//                     image={JSON.parse(localStorage[i]).image}
//                     price={JSON.parse(localStorage[i]).price}
//                   />
//                 );
//               }
//               return rows;
//             })([], 0, localStorage.length)}

//             <Link to='checkout'>
//               <button
//                 onClick={updateCart}
//                 className='offset-btn btn btn-primary btn-2 '
//                 type='submit'>
//                 Proceed to checkout
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </Fragment>
//   );
// };

// export default Cart;

import React, { Fragment } from 'react';

export default function PaymentComplete() {
  const clearLocalStorage = () => {
    localStorage.clear();
  };

  const content = () => (
    <div class='center  jumbotron jumbotron-fluid'>
      <div class='container'>
        <h1 class='display-4'>cart page</h1>
        {clearLocalStorage()}
        <Link to='/checkout'>
          <button>checkout</button>
        </Link>
      </div>
    </div>
  );

  return <Fragment>{content()}</Fragment>;
}
