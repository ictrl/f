
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
              






              