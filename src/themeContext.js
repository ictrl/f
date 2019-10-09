// import React, { useState } from 'react';
// export const ThemeContext = React.createContext({});

// const ThemeProveider = ({ children }) => {
// 	const [ productProperty, setProductProperty ] = useState({
// 		user: {},
// 		material: null,
// 		styleName: null,
// 		stylePrice: null,
// 		size: null,
// 		sizePrice: null,
// 		images: 'sas',
// 		preview: null,
// 		shipping: 100,
// 		quantity: 1,
// 		subPrice: null,
// 		calculatedPrice: null,
// 		totalPrice: null,
// 		num: 1
// 		// div: (
// 		// 	<div className="row left-section " style={{ display: 'block' }}>
// 		// 		{' '}
// 		// 		<div className="col-sm-12">
// 		// 			<div className="split">
// 		// 				<img src alt="" />
// 		// 			</div>
// 		// 		</div>
// 		// 	</div>
// 		// )
// 	});

// 	return <ThemeContext.Provider value={{ productProperty, setProductProperty }}>{children}</ThemeContext.Provider>;
// };

// export default ThemeProveider;

// // ///////
// // import React, { useState, Fragment } from 'react';
// // export const ThemeContext = React.createContext({});
// // const util = require('util');

// // const ThemeProveider = ({ children }) => {
// // 	const productJson = {
// // 		material: null,
// // 		styleName: null,
// // 		stylePrice: null,
// // 		size: null,
// // 		sizePrice: null,
// // 		images: [],
// // 		quantity: null,
// // 		subPrice: null,
// // 		calculatedPrice: null,
// // 		subPrice: null,
// // 		calculatedPrice: null
// // 	};
// // 	const index = 0;
// // 	const initalState = [
// // 		{
// // 			material: null,
// // 			styleName: null,
// // 			stylePrice: null,
// // 			size: null,
// // 			sizePrice: null,
// // 			images: [ '' ],
// // 			quantity: null,
// // 			subPrice: null,
// // 			calculatedPrice: null,
// // 			subPrice: null,
// // 			calculatedPrice: null
// // 		}
// // 	];

// // 	const [ productProperty, setProductProperty ] = useState(initalState);

// // 	const materialUpdate = () => {
// // 		productProperty.map((product) => {
// // 			product.material = 'HD';
// // 		});
// // 		console.log(util.inspect(initalState, { showHidden: false, depth: null }));
// // 	};
// // 	const materialUpdate2 = () => {
// // 		productProperty.map((product) => {
// // 			product.material = 'HD 2';
// // 		});
// // 		console.log(util.inspect(initalState, { showHidden: false, depth: null }));
// // 	};

// // 	const imagesUpdate = () => {
// // 		productProperty.map((product) => {
// // 			product.images.map((image) => {
// // 				product.images.push('http://AdiJha.com/profissle.jpg');
// // 			});
// // 		});
// // 		console.log(util.inspect(initalState, { showHidden: false, depth: null }));
// // 	};

// // 	const undoImagesUpdate = () => {
// // 		productProperty.map((product) => {
// // 			product.images.map((image) => {
// // 				product.images.splice('http://AdiJha.com/profile.jpg');
// // 			});
// // 		});
// // 		console.log(util.inspect(initalState, { showHidden: false, depth: null }));
// // 	};

// // 	const newProduct = () => {
// // 		initalState.push(productJson);
// // 		console.log(util.inspect(initalState, { showHidden: false, depth: null }));
// // 	};

// // 	return (
// // 		<Fragment>
// // 			<ThemeContext.Provider value={{ productProperty, setProductProperty }}>{children}</ThemeContext.Provider>
// // 			<button onClick={newProduct}>push array</button>
// // 			<button onClick={materialUpdate}>material</button>
// // 			<button onClick={materialUpdate2}>material2</button>
// // 			<button onClick={imagesUpdate}>Add Images</button>
// // 			<button onClick={undoImagesUpdate}>remove Images</button>
// // 			{console.log(util.inspect(initalState, { showHidden: false, depth: null }))}
// // 		</Fragment>
// // 	);
// // };

// // export default ThemeProveider;
