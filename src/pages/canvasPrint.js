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
