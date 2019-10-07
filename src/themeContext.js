import React, { useReducer, Fragment, useEffect } from 'react';
// export const ThemeContext = React.createContext({});

const inintalProducts = [
	{
		material: 'defalut maetiral',
		style: '',
		stylePrice: null,
		size: '',
		sizePrice: null,
		quantity: 1,
		images: [ 'https://samrat.online/images/pic.gif' ],
		subPrice: null,
		calculatedPrice: null
	}
];
const reducer = (state, action) => {
	switch (action.type) {
		case 'material':
			return state.map((product) => {
				return { ...product, material: action.value };
			});

		case 'images':
			return state.map((product) => {
				product.images[0] = action.value;
				return { ...product };
			});
		case 'images-push':
			return state.map((product) => {
				product.images.push(action.value);
				return { ...product };
			});

		default:
			return state;
	}
};

export const ProductContext = React.createContext();

const ThemeProveider = ({ children }) => {
	const [ products, dispatch ] = useReducer(reducer, inintalProducts);
	return (
		<Fragment>
			<ProductContext.provider>
				<createYourPrint value={{ productState: products, productDispatch: dispatch }} />
			</ProductContext.provider>
		</Fragment>
	);
};

export default ThemeProveider;
