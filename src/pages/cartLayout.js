import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../themeContext';

export default function Layout({
	styleName = 'Single Print',
	material = 'Canvas',
	sizes = '10" X 10" ',
	price = 11,
	quantity = 1,
	image = 'https://samrat.online/images/pic.gif'
}) {
	const context = useContext(ProductContext);
	const { productProperty, setProductProperty } = context;
	// const handle = (e) => {
	//   setProductProperty({ ...productProperty, quantity: e.target.value,

	//    subPrice : productProperty.subPrice * productProperty.quantity,
	//     totalPrice: productProperty.subPrice + productProperty.shipping
	//   })

	//   var subP = parseInt(price) * parseInt(e.target.value);
	//   setProductProperty({
	//     ...productProperty,
	//     totalPrice: subP + 10,
	//     subPrice: subP
	//   });
	// };

	const clearContext = (event) => {
		setProductProperty({
			...productProperty,
			quantity: '',
			subPrice: '',
			totalPrice: '',
			shipping: ''
		});

		document.getElementById('checkout').remove();
	};

	const handleChange = (event) => {
		setProductProperty({
			...productProperty,
			quantity: event.target.value,

			//calculation bug
			subPrice: productProperty.subPrice * event.target.value,
			totalPrice: productProperty.subPrice * event.target.value + productProperty.shipping
		});
	};

	return (
		<tr>
			<td className="col-md-6">
				<div className="media">
					<a className="thumbnail pull-left" href="#">
						{' '}
						<img className="media-object cart-img" src={image} />{' '}
					</a>
					<div className="media-body cart-body">
						<h4 className="media-heading">
							<a href="#">{material}</a> <br />
							<a href="#">{styleName}</a>
						</h4>
						<h6 className="media-heading">Size : {sizes}</h6>
					</div>
				</div>
			</td>
			<td className="col-md-1" style={{ textAlign: 'center' }}>
				{/* <input type='number' className='form-control' id='quantity' value={productProperty.quantity} onChange={handle}  />  */}
				<input
					type="number"
					className="form-control quantity"
					value={productProperty.quantity}
					onChange={handleChange}
				/>
			</td>
			<td className="col-md-1 text-center">
				<strong>₹ {price}</strong>
			</td>
			<td className="col-md-1 text-center">
				<strong>₹ {productProperty.subPrice} </strong>
			</td>
			<td className="col-md-1">
				<Link to="/CreateYourPrint">
					<button type="button" className="btn btn-success">
						<span className="glyphicon glyphicon-pencil" /> Edit
					</button>
				</Link>
			</td>
			<td className="col-md-1">
				<button
					type="button"
					className="btn btn-danger"
					onClick={(e) => {
						var parentNode = e.target.parentNode.parentNode;
						console.log(parentNode);
						parentNode.remove();
						clearContext();
						// var listItems = document.querySelectorAll("li");
						// var ul = document.getElementById("ul");
						// li.parentNode.removeChild(li);
					}}
				>
					<span className=""> &times; </span> Remove
				</button>
			</td>
		</tr>
	);
}
