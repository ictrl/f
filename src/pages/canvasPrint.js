import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import { getSizeList, getStyleList } from './cartHelpers';

export default function CanvasPrint() {
	const context = useContext(ThemeContext);
	const { productProperty, setProductProperty } = context;
	const [ sizes, setSizeList ] = useState([]);
	const [ div, setDiv ] = useState([
		<div className="row left-section " style={{ display: 'block' }}>
			{' '}
			<div className="col-sm-12">
				<div className="split">
					<img src alt="" />
				</div>
			</div>
		</div>
	]);
	const [ styles, setStyleList ] = useState([ {}, {}, {}, {} ]);

	const loadSizes = () => {
		getSizeList().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setSizeList(data);
			}
		});
	};

	const loadStyles = () => {
		getStyleList().then((data) => {
			if (data.error) {
				console.log(data.error);
			} else {
				setStyleList(data);
			}
		});
	};

	const removeBorder = () => {
		let x = document.getElementsByClassName('set-border');

		if (x.length > 0) {
			x[0].classList.remove('set-border');
		}
	};

	const setBorder = (num) => {
		if (num == 1) {
			document.getElementById('i1').classList.add('set-border');
		} else if (num == 2) {
			document.getElementById('i2').classList.add('set-border');
		} else if (num == 3) {
			document.getElementById('i3').classList.add('set-border');
		} else if (num == 4) {
			document.getElementById('i4').classList.add('set-border');
		}
	};

	const splitHandler = (e) => {
		removeBorder();
		if (e.target.classList[2] === 'i1') {
			setBorder(1);
			setProductProperty({
				...productProperty,
				styleName: 'Single Print',
				stylePrice: styles[0].price,
				num: 1
			});

			setDiv(
				<div className="row left-section" style={{ display: 'block' }}>
					<div className="col-sm-12">
						<div class="upload-image-preview split" id="uploadImg">
							<img src={productProperty.url} alt="" />
						</div>
					</div>
				</div>
			);
		} else if (e.target.classList[2] === 'i2') {
			setBorder(2);
			setProductProperty({
				...productProperty,
				num: 2,
				styleName: 'Split Image',
				stylePrice: styles[1].price
			});
			setDiv(
				<div className="row left-section" style={{ display: 'block' }}>
					<div className="col-sm-4">
						<div className="split">
							<img src alt="" />
						</div>
					</div>
					<div className="col-sm-4">
						<div className="split">
							<img src alt="" />
						</div>
					</div>
					<div className="col-sm-4">
						<div className="split">
							<img src alt="" />
						</div>
					</div>
				</div>
			);
		} else if (e.target.classList[2] === 'i3') {
			setBorder(3);
			setProductProperty({
				...productProperty,
				num: 3,
				styleName: 'Wall Display',
				stylePrice: styles[2].price
			});
			setDiv(
				<div className="row left-section" style={{ display: 'block' }}>
					<div className="col-sm-6">
						<div className="row">
							<div className="col-sm-12">
								<div className="split2">
									<img src alt="" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="split2">
									<img src alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6">
						<div className="split">
							<img src alt="" />
						</div>
					</div>
				</div>
			);
		} else {
			setBorder(4);
			setProductProperty({
				...productProperty,
				styleName: 'Collage Image',
				num: 4,
				stylePrice: styles[3].price
			});
			setDiv(
				<div className="row left-section" style={{ display: 'block' }}>
					<div className="col-sm-5">
						<div className="row">
							<div className="col-sm-12">
								<div className="split2">
									<img src alt="" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="split2">
									<img src alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-2">
						<div className="row">
							<div className="col-sm-12">
								<div className="split2 collage1">
									<img src alt="" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="split2 collage2">
									<img src alt="" />
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-5">
						<div className="row">
							<div className="col-sm-12">
								<div className="split2">
									<img src="" alt="" />
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-sm-12">
								<div className="split2">
									<img src alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	};

	const handler = (e) => {
		const sty = e.target.className;
		const popupSize = sty.slice(0, 5);
		const popupPrice = sty.slice(6, 9);
		document.getElementById('cancel').click();

		setProductProperty({
			...productProperty,
			size: popupSize,
			sizePrice: parseInt(popupPrice)
		});
	};

	useEffect(() => {
		loadSizes();
		loadStyles();
	}, []);

	return (
		<Fragment>
			<div className="row" style={{ margin: '0 40px 50px 40px' }}>
				<div className="col-sm-12" style={{ marginBottom: '30px' }}>
					<h3 className="center" style={{ color: '#ff9900' }}>
						<b>CREATE YOUR OWN CANVAS</b>
					</h3>
					<h4 className="center">
						({productProperty.material}: <b id="title">{productProperty.styleName}</b>)
					</h4>
				</div>
				<div className="col-sm-6">
					{div}

					<div className="row" style={{ marginTop: '20px' }}>
						<div className="col-sm-6 center">
							<Link to="/CreateYourPrint" className="btn btn-default" value="Input Button">
								<img src={require('../images/back.png')} alt="" />
							</Link>
						</div>
						<div className="col-sm-6 center">
							<Link to="/UploadImage" className="btn btn-warning" value="Input Button">
								<img src={require('../images/upload.png')} alt="" />
							</Link>
						</div>
					</div>
				</div>
				<div className="col-sm-6">
					<div className="row">
						<div className="col-sm-12" style={{ margin: '20px 0px' }}>
							<h4>
								<strong>1. Select Styles</strong>
							</h4>
						</div>
						<div className="col-sm-3 x i1 " onClick={splitHandler}>
							<div id="i1" className="card collage-thumbnail i1">
								<img className="x xx i1" src={require('../images/single.png')} alt="" />
								<h5 className="x xx i1">
									Single <br />
									Print
								</h5>
								<p className="x xx i1">₹ {styles[0].price} </p>
							</div>
						</div>
						<div className="col-sm-3 x i2" onClick={splitHandler}>
							<div id="i2" className="card collage-thumbnail i2">
								<img src={require('../images/split.png')} alt="" className="x xx i2" />
								<h5 className="x xx i2">
									Split
									<br />
									Image
								</h5>
								<p className="x xx i2">₹ {styles[1].price}</p>
							</div>
						</div>
						<div className="col-sm-3 x i3" onClick={splitHandler}>
							<div id="i3" className="card collage-thumbnail i3">
								<img src={require('../images/wall.png')} alt="" className="x xx i3" />
								<h5 className="x xx i3">
									Wall
									<br />
									Displays
								</h5>
								<p className="x xx i3"> ₹ {styles[2].price} </p>
							</div>
						</div>
						<div className="col-sm-3 i4" onClick={splitHandler}>
							<div id="i4" className="card collage-thumbnail ">
								<img src={require('../images/collage.png')} alt="" />
								<h5>
									Collage
									<br />
									Image
								</h5>
								<p>₹{styles[3].price}</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-12" style={{ margin: '20px 0px' }}>
							<h4>
								<strong>2. Select size &amp; shape</strong>
							</h4>
						</div>

						<div>
							<div>
								<button type="button" className="btn  btn-lg shape" data-toggle="modal" data-target="#myModal">
									Please select size*
								</button>
								{/* <span className="arrow-down">▼</span> */}
								{/* Modal  fade*/}
								<div id="myModal" className="modal fade" role="dialog">
									<div
										className="modal-dialog modal-lg"
										style={{ height: '51rem', width: '67.2rem', marginTop: '10rem' }}
									>
										{/* Modal content*/}
										<div className="modal-content" style={{ height: '48.6rem', width: '67.2rem' }}>
											<div className=" row popup-window" style={{ width: '90rem' }}>
												<div
													id="MyAccountsTab"
													className="tabbable tabs-left"
													style={{ height: '50rem', width: '67rem', marginLeft: '1.5rem' }}
												>
													<ul
														className="nav nav-tabs col-md-2"
														style={{ height: '41.8rem', background: 'rgb(238, 238, 238)' }}
													>
														<li className="active" style={{ cursor: 'pointer' }}>
															<div data-target="#lA" data-toggle="tab">
																<div className="center">
																	<span className="account-type">
																		<img src="https://dummyimage.com/60x35/bbbbbb/bbbbbb" alt="12 X 18" />
																	</span>
																	<br />
																	<span className="account-amount">Rectangle</span>
																	<br />
																	<p>From ₹ 54</p>
																</div>
															</div>
														</li>
														<li style={{ cursor: 'pointer' }}>
															<div data-target="#lB" data-toggle="tab">
																<div className="center">
																	<span className="account-type">
																		<img src="https://dummyimage.com/45x45/bbbbbb/bbbbbb" alt="12 X 18" />
																	</span>
																	<br />
																	<span className="account-amount">Square</span>
																	<br />
																	<p>From ₹ 67</p>
																</div>
															</div>
														</li>
														<li style={{ cursor: 'pointer' }}>
															<div data-target="#lC" data-toggle="tab">
																<div className="center">
																	<span className="account-type">
																		<img src="https://dummyimage.com/79x35/bbbbbb/bbbbbb" alt="12 X 18" />
																	</span>
																	<br />
																	<span className="account-amount">Panoramic</span>
																	<br />
																	<p>From ₹ 66</p>
																</div>
															</div>
														</li>
														<li style={{ cursor: 'pointer' }}>
															<div data-target="#lD" data-toggle="tab">
																<div className="center">
																	<span className="account-type">
																		<img src="https://dummyimage.com/45x45/bbbbbb/bbbbbb" alt="12 X 18" />
																	</span>
																	<br />
																	<span className="account-amount">Custom Size</span>
																	<br />
																	<p>From ₹ 150</p>
																</div>
															</div>
														</li>
													</ul>
													<div className="tab-content col-md-10 " style={{ overflowY: 'scroll', overflowX: 'hidden' }}>
														<div className="tab-pane active" id="lA" style={{ height: '41.6rem' }}>
															<div className=" row" style={{ width: '48rem', height: '45rem' }}>
																<div
																	className="12X18 54    col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="12X18 54  ">
																		<img
																			className="12X18 54  "
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="12X18 54  ">12" X 18"</h5>
																		<div className="12X18 54  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="12X18 54  " style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="12X18 54  " style={{ color: '#ff0000' }}>
																				54
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="18X12 54   col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="18X12 54 ">
																		<img
																			className="18X12 54 "
																			src="https://dummyimage.com/28x40/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="18X12 54 ">18" X 12"</h5>
																		<div className="18X12 54 " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="18X12 54 " style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="18X12 54 " style={{ color: '#ff0000' }}>
																				54
																			</p>
																		</div>
																	</center>
																</div>{' '}
																<div
																	className="16X12 79   col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X12 79 ">
																		<img
																			className="16X12 79 "
																			src="https://dummyimage.com/43x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="16X12 79 ">16" X 12"</h5>
																		<div className="16X12 79 " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X12 79 " style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X12 79 " style={{ color: '#ff0000' }}>
																				79
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="16X20 79   col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 79 ">
																		<img
																			className="16X20 79 "
																			src="https://dummyimage.com/24x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="16X20 79 ">16" X 20"</h5>
																		<div className="16X20 79 " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 79 " style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 79 " style={{ color: '#ff0000' }}>
																				79
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="16X24 138  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X24 138">
																		<img
																			className="16X24 138"
																			src="https://dummyimage.com/28x30/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="16X24 138">16" X 24"</h5>
																		<div className="16X24 138" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X24 138" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X24 138" style={{ color: '#ff0000' }}>
																				138
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="20X30 138  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="20X30 138">
																		<img
																			className="20X30 138"
																			src="https://dummyimage.com/40x40/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="20X30 138">20" X 30"</h5>
																		<div className="20X30 138" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="20X30 138" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="20X30 138" style={{ color: '#ff0000' }}>
																				138
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="30X20 170  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="30X20 170">
																		<img
																			className="30X20 170"
																			src="https://dummyimage.com/30x20/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="30X20 170">30" X 30"</h5>
																		<div className="30X20 170" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="30X20 170" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="30X20 170" style={{ color: '#ff0000' }}>
																				170
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="30X40 170  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="30X40 170">
																		<img
																			className="30X40 170"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="30X40 170">30" X 40"</h5>
																		<div className="30X40 170" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="30X40 170" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="30X40 170" style={{ color: '#ff0000' }}>
																				170
																			</p>
																		</div>
																	</center>
																</div>
															</div>
														</div>
														<div className="tab-pane" id="lB" style={{ width: '48rem', height: '45rem' }}>
															<div className="row">
																<div
																	className="40X30 67  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="40X30 67">
																		<img
																			className="40X30 67"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="40X30 67">40" X 30"</h5>
																		<div className="40X30 67" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="40X30 67" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="40X30 67" style={{ color: '#ff0000' }}>
																				67
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="46X32 114  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="46X32 114">
																		<img
																			className="46X32 114"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="46X32 114">46" X 32"</h5>
																		<div className="46X32 114" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="46X32 114" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="46X32 114" style={{ color: '#ff0000' }}>
																				114
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="32X48 171  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="32X48 171">
																		<img
																			className="32X48 171"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="32X48 171">32" X 48"</h5>
																		<div className="32X48 171" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="32X48 171" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="32X48 171" style={{ color: '#ff0000' }}>
																				171
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="36X24 184  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="36X24 184">
																		<img
																			className="36X24 184"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="36X24 184">36" X 24"</h5>
																		<div className="36X24 184" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="36X24 184" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="36X24 184" style={{ color: '#ff0000' }}>
																				184
																			</p>
																		</div>
																	</center>
																</div>
															</div>
														</div>
														<div className="tab-pane" id="lC" style={{ width: '50rem', height: '50rem' }}>
															<div className="row">
																<div
																	className="20X16 66   col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="20X16 66 ">
																		<img
																			className="20X16 66 "
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="20X16 66 ">20" X 16"</h5>
																		<div className="20X16 66 " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="20X16 66 " style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="20X16 66 " style={{ color: '#ff0000' }}>
																				66
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="24X16 66   col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="24X16 66 ">
																		<img
																			className="24X16 66 "
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="24X16 66 ">24" X 16"</h5>
																		<div className="24X16 66 " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="24X16 66 " style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="24X16 66 " style={{ color: '#ff0000' }}>
																				66
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="24X36 114  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="24X36 114">
																		<img
																			className="24X36 114"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="24X36 114">24" X 36"</h5>
																		<div className="24X36 114" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="24X36 114" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="24X36 114" style={{ color: '#ff0000' }}>
																				114
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="10X20 114  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="10X20 114">
																		<img
																			className="10X20 114"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="10X20 114">10" X 20"</h5>
																		<div className="10X20 114" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="10X20 114" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="10X20 114" style={{ color: '#ff0000' }}>
																				114
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="20X10 156  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="20X10 156">
																		<img
																			className="20X10 156"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="20X10 156">20" X 10"</h5>
																		<div className="20X10 156" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="20X10 156" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="20X10 156" style={{ color: '#ff0000' }}>
																				156
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="12X36 170  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="12X36 170">
																		<img
																			className="12X36 170"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="12X36 170">12" X 36"</h5>
																		<div className="12X36 170" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="12X36 170" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="12X36 170" style={{ color: '#ff0000' }}>
																				170
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="10X10 170  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="10X10 170">
																		<img
																			className="10X10 170"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="10X10 170">12" X 18"</h5>
																		<div className="10X10 170" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="10X10 170" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="10X10 170" style={{ color: '#ff0000' }}>
																				170
																			</p>
																		</div>
																	</center>
																</div>
																<div
																	className="12X12 170  col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="12X12 170">
																		<img
																			className="12X12 170"
																			src="https://dummyimage.com/28x38/bbbbbb/bbbbbb"
																			alt="12 X 18"
																		/>
																		<h5 className="12X12 170">12" X 12"</h5>
																		<div className="12X12 170" style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="12X12 170" style={{ color: '#808080', fontSize: 14 }}>
																				190
																			</strike>
																			&nbsp; &nbsp;
																			<p className="12X12 170" style={{ color: '#ff0000' }}>
																				170
																			</p>
																		</div>
																	</center>
																</div>
															</div>
														</div>
														<div className="tab-pane" id="lD" style={{ width: '50rem', height: '50rem' }}>
															<div className="center " style={{ padding: '3rem 5rem 3rem 1rem' }}>
																<h3>Custom Size</h3>
																<form action>
																	<div className="btn-group">
																		<button type="button" className="btn btn-primary">
																			cm
																		</button>
																		<button type="button" className="btn btn-primary">
																			inch
																		</button>
																	</div>
																	<div className="form-group" style={{ marginTop: 15 }}>
																		<label htmlFor="width" className="col-sm-3 control-label">
																			Input width
																		</label>
																		<div className="input-group col-sm-9">
																			<input type="text" name="width" className="form-control" />
																			<span className="input-group-addon">cm</span>
																		</div>
																	</div>
																	<div className="form-group">
																		<label htmlFor="height" className="col-sm-3 control-label">
																			Input height
																		</label>
																		<div className="input-group col-sm-9">
																			<input type="text" name="height" className="form-control" />
																			<span className="input-group-addon">cm</span>
																		</div>
																	</div>
																</form>
																<div className="form-group">
																	<label className="col-sm-3 control-label" style={{ marginTop: 25 }}>
																		PRICE
																	</label>
																	<div className=" col-sm-9">
																		<label id="price" className="text-warning" style={{ color: '#f00' }}>
																			<h5>
																				<del>$50</del>
																			</h5>
																		</label>
																		<label id="discount-price" className="text-success " style={{ color: '#0f0' }}>
																			<h2>$30</h2>
																		</label>
																	</div>
																</div>
															</div>
														</div>
													</div>
													<div
														className="modal-footer col-md-12"
														style={{
															backgroundColor: '#FFFFFF',
															zIndex: '',
															borderRadius: '0 0 5px  0',
															height: '6.6rem'
														}}
													>
														<button type="button" id="cancel" className="btn btn-default" data-dismiss="modal">
															Cancel
														</button>
														{/* </div> */}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
