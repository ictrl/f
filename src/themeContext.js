import React, { useState } from 'react';
export const ThemeContext = React.createContext({});

const ThemeProveider = ({ children }) => {
	const [ productProperty, setProductProperty ] = useState({
		user: {},
		// product: [ {} ]
		material: 'Canvas',
		styleName: 'Single Printss',
		stylePrice: 100,
		size: '10" X 10"',
		sizePrice: 50,
		images: '',
		preview: '',
		shipping: 100,
		quantity: 1,
		subPrice: 100,
		calculatedPrice: 100,
		totalPrice: 200,
		num: 1,
		div: (
			<div className="row left-section " style={{ display: 'block' }}>
				{' '}
				<div className="col-sm-12">
					<div className="split">
						<img src alt="" />
					</div>
				</div>
			</div>
		)
	});

	return <ThemeContext.Provider value={{ productProperty, setProductProperty }}>{children}</ThemeContext.Provider>;
};

export default ThemeProveider;
