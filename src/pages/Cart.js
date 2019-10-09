import React, { useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import Layout from './cartLayout';

export default function NewCart() {
	const context = useContext(ThemeContext);
	const { productProperty, setProductProperty } = context;
	console.log('CartPage', productProperty.quantity);

	return (
		<div>
			<div className="container" style={{ marginTop: 50, marginBottom: 50 }}>
				<div className="row">
					{console.log(productProperty)}
					<div className="col-sm-12 col-md-10 col-md-offset-1">
						<div className="table-responsive">
							<table className="table table-hover">
								<thead>
									<tr>
										<th>Product</th>
										<th>Quantity</th>
										<th className="text-center">Price</th>
										<th className="text-center">Total</th>
										<th>&nbsp;</th>
									</tr>
								</thead>
								<tbody>
									<Layout
										material={productProperty.material}
										styleName={productProperty.styleName}
										sizes={productProperty.size}
										price={productProperty.subPrice}
										// image={productProperty.images[0]}
										image={productProperty.preview}
									/>
									<tr>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td>
											<h5>Subtotal</h5>
										</td>
										<td className="text-right">
											<h5>
												<strong>₹ {productProperty.calculatedPrice}</strong>
											</h5>
										</td>
									</tr>
									<tr>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td>
											<h5>Estimated shipping</h5>
										</td>
										<td className="text-right">
											<h5>
												<strong>₹ {productProperty.shipping}</strong>
											</h5>
										</td>
									</tr>
									<tr>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td>
											<h3>Total</h3>
										</td>
										<td className="text-right">
											<h3>
												<strong>₹ {productProperty.totalPrice}</strong>
											</h3>
										</td>
									</tr>
									<tr>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td> &nbsp; </td>
										<td>
											<Link to="/CreateYourPrint">
												<button type="button" className="btn btn-default">
													Continue Shopping
												</button>
											</Link>
										</td>
										<td>
											<Link to="/checkout">
												<button type="button" id="checkout" className="btn btn-warning">
													Checkout
												</button>
											</Link>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
