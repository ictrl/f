import React, { useState, Fragment } from 'react';

export default function tried() {
const initalState = [
	{
		material: 'Canvas',
		styleName: 'Single Printss',
		stylePrice: 100,
		size: '10" X 10"',
		sizePrice: 50,
		images: [ 'http://adijha.com/profile.jpg' ],
		quantity: 1,
		subPrice: 100,
		calculatedPrice: 100,
		subPrice: null,
		calculatedPrice: null
	}
]


const [ productProperty, setProductProperty ] = useState(initalState);


const materialUpdate = () => {
	productProperty.map(product => {
		product.material = 'HD';
	})
}

const imagesUpdate = ( ) => {
	productProperty.map(product => {
		product.images.map(image => {
			product.images.push('http://AdiJha.com/profile.jpg');
		})
	} )
}

const undoImagesUpdate = ( ) => {
	productProperty.map(product => {
		product.images.map(image => {
			product.images.splice('http://AdiJha.com/profile.jpg');
		})
	} )
}


	return (
		<Fragment>
			{console.log(productProperty)}

			<button onClick={ ()=> {
				materialUpdate();
				console.log('second',productProperty)
			} }>HD </button>
			<button onClick={ ()=> {
				imagesUpdate();
				console.log('AdiJha',productProperty)
			} }>Adijha </button>
			<button onClick={ ()=> {
				undoImagesUpdate('http://AdiJha.com/profile.jpg' );
				console.log('AdiJha',productProperty)
			} }>Adijha undo </button>


		</Fragment>
	);
}