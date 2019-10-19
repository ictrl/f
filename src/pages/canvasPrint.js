import React, { useState, useEffect, useContext, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App';
import { getSizeList, getStyleList } from './cartHelpers';

export default function CanvasPrint() {
	const context = useContext(ThemeContext);
	const { productProperty, setProductProperty } = context;
	const [ sizes, setSizeList ] = useState([]);
	const [ div, setDiv ] = useState(
		<div className="row left-section " style={{ display: 'block' }}>
			{' '}
			<div className="col-sm-12">
				<div className="split">
					<img src alt="" />
				</div>
			</div>
		</div>
	);
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
		// const sty = e.target.className;
		let popupSize = '';
		let popupPrice = '';
		document.getElementById('cancel').click();

		switch (e.target.tagName) {
			case 'DIV':
				console.log('div');
				const divImg = e.target.childNodes[0].childNodes[0];

				// console.log(divImg.src);

				setDiv(<img src={divImg.src} width="450px" height="450px" />);
				popupSize = e.target.childNodes[0].childNodes[0].nextSibling.textContent;
				console.log(popupSize);
				popupPrice = e.target.childNodes[0].childNodes[0].nextSibling.nextSibling.childNodes[2].textContent;
				console.log(popupPrice);
				break;
			case 'IMG':
				console.log('img');
				const imgImg = e.target;
				popupSize = e.target.nextSibling.textContent;
				console.log(popupSize);
				popupPrice = e.target.nextSibling.nextSibling.childNodes[2].textContent;
				console.log(popupPrice);

				// console.log(imgImg.src);

				setDiv(<img src={imgImg.src} width="450px" height="450px" />);

				break;
			case 'CENTER':
				console.log('center');
				const centerImg = e.target.childNodes[0];

				// console.log(centerImg.src);
				popupSize = e.target.childNodes[1].textContent;
				console.log(popupSize);
				popupPrice = e.target.childNodes[2].childNodes[2].textContent;
				console.log(popupPrice);

				setDiv(<img src={centerImg.src} width="450px" height="450px" />);

				break;
			case 'H5':
				console.log('h5');
				const h5Img = e.target.previousSibling;

				// console.log(h5Img.src);

				popupSize = e.target.textContent;
				console.log(popupSize);
				popupPrice = e.target.nextSibling.childNodes[2].textContent;
				console.log(popupPrice);

				setDiv(<img src={h5Img.src} width="450px" height="450px" />);

				break;
			case 'STRIKE':
				console.log('strike');

				const strikeImg = e.target.parentNode.previousSibling.previousSibling;

				// console.log(strikeImg.src);

				popupSize = e.target.parentNode.previousSibling.textContent;
				console.log(popupSize);
				popupPrice = e.target.nextSibling.nextSibling.textContent;
				console.log(popupPrice);

				setDiv(<img src={strikeImg.src} width="450px" height="450px" />);

				break;
			case 'P':
				console.log('p');

				const pImg = e.target.parentNode.previousSibling.previousSibling;

				// console.log(pImg.src);

				popupSize = e.target.parentNode.previousSibling.textContent;
				console.log(popupSize);
				popupPrice = e.target.textContent;
				console.log(popupPrice);

				setDiv(<img src={pImg.src} width="450px" height="450px" />);
				break;
			case 'SPAN':
				console.log('SPAN');

				const spanImg = e.target.previousSibling.previousSibling;

				// console.log(spanImg.src);

				popupSize = e.target.previousSibling.textContent;
				console.log(popupSize);
				popupPrice = e.target.childNodes[2].textContent;
				console.log(popupPrice);

				setDiv(<img src={spanImg.src} width="450px" height="450px" />);

				break;
		}

		setProductProperty({
			...productProperty,
			size: popupSize,
			sizePrice: parseInt(popupPrice)
		});
	};

	const returnSize = () => {
		if (productProperty.size == undefined) {
			return 'Please select size*';
		} else {
			return productProperty.size + ' ₹' + productProperty.sizePrice;
		}
	};

	useEffect(() => {
		loadSizes();
		loadStyles();
		returnSize();
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
							{/* single canvas starts */}

							<div>
								<button type="button" className="btn  btn-lg shape" data-toggle="modal" data-target="#myModal">
									{returnSize()}
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

							{/* single canvas ends */}

							{/* split canvas starts */}

							<div>
								<button type="button" className="btn  btn-lg shape" data-toggle="modal" data-target="#myModall">
									{returnSize()}
								</button>
								{/* <span className="arrow-down">▼</span> */}
								{/* Modal  fade*/}
								<div id="myModall" className="modal fade" role="dialog">
									<div
										className="modal-dialog modal-lg"
										style={{ height: '51rem', width: '67.2rem', marginTop: '10rem' }}
									>
										{/* Modal content*/}
										<div
											className="modal-content"
											style={{ height: '50.6rem', width: '69.5rem', padding: '2rem 0 0 0.5rem' }}
										>
											<div className=" row popup-window" style={{ width: '90rem' }}>
												<div
													id="MyAccountsTab"
													className="tabbable tabs-left"
													style={{ height: '50rem', width: '65.5rem', marginLeft: '1.5rem' }}
												>
													<div
														className="tab-content col-md-12 "
														style={{ overflowY: 'scroll', padding: '0', overflowX: 'hidden' }}
													>
														<div className="tab-pane active" id="lA" style={{ height: '41.6rem' }}>
															<div
																className=" row"
																style={{
																	width: '100%',
																	padding: '0 1rem 1rem 2rem',
																	textAlign: 'center'
																}}
															>
																<div
																	className="12X18 102 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="12X18 102  ">
																		<img
																			className="12X18 102  "
																			src={require('../xd/1s.svg')}
																			alt="12 X 18"
																			width="70"
																		/>
																		<h5 className="12X18 102  "> (3) 12" x 18"</h5>
																		<span className="12X18 102  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="12X18 102  " style={{ color: '#808080', fontSize: 14 }}>
																				294
																			</strike>
																			&nbsp; &nbsp;
																			<p className="12X18 102  " style={{ color: '#ff0000' }}>
																				102
																			</p>
																		</span>
																	</center>
																</div>
																<div
																	className="16X16 103 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X16 103  ">
																		<img
																			className="16X16 103  "
																			src={require('../xd/2s.svg')}
																			alt="12 X 18"
																			width="70"
																		/>
																		<h5 className="16X16 103  "> (3) 16" x 16"</h5>
																		<span className="16X16 103  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X16 103  " style={{ color: '#808080', fontSize: 14 }}>
																				297
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X16 103  " style={{ color: '#ff0000' }}>
																				103
																			</p>
																		</span>
																	</center>
																</div>
																<div
																	className="12X12 106 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="12X12 106  ">
																		<img
																			className="12X12 106  "
																			src={require('../xd/3s.svg')}
																			alt="12 X 18"
																			width="40"
																		/>
																		<h5 className="12X12 106  "> (4) 12" x 12"</h5>
																		<span className="12X12 106  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="12X12 106  " style={{ color: '#808080', fontSize: 14 }}>
																				297
																			</strike>
																			&nbsp; &nbsp;
																			<p className="12X12 106  " style={{ color: '#ff0000' }}>
																				103
																			</p>
																		</span>
																	</center>
																</div>
																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/4s.svg')}
																			alt="12 X 18"
																			width="70"
																		/>
																		<h5 className="16X20 137  "> (3) 16" x 20"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				393
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				137
																			</p>
																		</span>
																	</center>
																</div>
																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/5s.svg')}
																			alt="12 X 18"
																			width="40"
																		/>
																		<h5 className="16X20 137  "> (3) 12" x 12" & (3) 12" x18"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				525
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				183
																			</p>
																		</span>
																	</center>
																</div>
																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/6s.svg')}
																			alt="12 X 18"
																			width="40"
																		/>
																		<h5 className="16X20 137  "> (1) 30" x 40" & (3) 12" x 12"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				547
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				191
																			</p>
																		</span>
																	</center>
																</div>

																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/14s.svg')}
																			alt="12 X 18"
																			width="60"
																		/>
																		<h5 className="16X20 137  "> (1) 30" x 40" & (3) 12" x 12"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				547
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				191
																			</p>
																		</span>
																	</center>
																</div>

																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/9s.svg')}
																			alt="12 X 18"
																			width="30"
																		/>
																		<h5 className="16X20 137  ">(2) 12" x 12" & (2) 12" x 18" & (1) 24" x 24"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				547
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				191
																			</p>
																		</span>
																	</center>
																</div>

																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/8s.svg')}
																			alt="12 X 18"
																			width="50"
																		/>
																		<h5 className="16X20 137  "> (3) 12" x 12" & (1) 40" x 30"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				547
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				191
																			</p>
																		</span>
																	</center>
																</div>

																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/7s.svg')}
																			alt="12 X 18"
																			width="60"
																		/>
																		<h5 className="16X20 137  "> (3) 20" x 20"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				656
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				229
																			</p>
																		</span>
																	</center>
																</div>

																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/13s.svg')}
																			alt="12 X 18"
																			width="50"
																		/>
																		<h5 className="16X20 137  "> (9) 12" x 12"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				547
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				191
																			</p>
																		</span>
																	</center>
																</div>

																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/12s.svg')}
																			alt="12 X 18"
																			width="46"
																		/>
																		<h5 className="16X20 137  "> (2) 12" x 12" & (5) 12" x 18" & (1) 40" x 30"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				973
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				340
																			</p>
																		</span>
																	</center>
																</div>

																<div
																	className="16X20 137 col-sm-3 center  box"
																	onClick={handler}
																	style={{ padding: '1.5rem' }}
																>
																	<center className="16X20 137  ">
																		<img
																			className="16X20 137  "
																			src={require('../xd/10s.svg')}
																			alt="12 X 18"
																			width="50"
																		/>
																		<h5 className="16X20 137  "> (4) 20" x 20" & (2) 24" x 16" & (2) 24" x 24"</h5>
																		<span className="16X20 137  " style={{ display: 'flex', padding: '0 2rem' }}>
																			<strike className="16X20 137  " style={{ color: '#808080', fontSize: 14 }}>
																				1378
																			</strike>
																			&nbsp; &nbsp;
																			<p className="16X20 137  " style={{ color: '#ff0000' }}>
																				482
																			</p>
																		</span>
																	</center>
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
								</div>{' '}
								{/*to comment for fade*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
