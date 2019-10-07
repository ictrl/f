import React, { useContext, Fragment, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactFilestack from 'filestack-react';
import { ThemeContext } from '../themeContext';

let arr = [];
export default function UploadImage() {
	const context = useContext(ThemeContext);
	const { productProperty, setProductProperty } = context;
	console.log('UploadPage', productProperty);

	const _handleImageChange = (e) => {
		e.preventDefault();

		let reader = new FileReader();
		let file = e.target.files[0];

		reader.onloadend = () => {
			arr.push(reader.result);
			console.log('update start');
			setProductProperty({
				...productProperty,
				images: arr,
				subPrice: productProperty.stylePrice + productProperty.sizePrice,
				totalPrice: productProperty.stylePrice + productProperty.sizePrice + productProperty.shipping
			});
		};
		reader.readAsDataURL(file);
	};

	const actionObj = {
		maxFiles: productProperty.num
	};

	const mainSection = () => {
		var frame = productProperty.styleName;

		// if (frame == 'Single Print') {
		// 	return (
		// 		<div className="row left-section" style={{ display: 'block' }}>
		// 			{' '}
		// 			<div className="col-sm-12 center imgdiv">
		// 				<div class="upload-image-preview split imgdiv1">
		// 					<img src={productProperty.images[0]} alt="" className="" />
		// 				</div>
		// 				<input type="file" id="test" onChange={_handleImageChange} style={{ display: 'none' }} />
		// 			</div>
		// 		</div>
		// 	);
		// } else if (frame == 'Wall Displays') {
		// 	return <h1>Wall Displays</h1>;
		// } else if (frame == 'Collage Image') {
		// 	return <h1>Collage Image</h1>;
		// } else {
		// 	return (
		// 		<div className="row left-section" style={{ display: 'block' }}>
		// 			<div className="col-sm-4">
		// 				<div className="split upload-image-preview">
		// 					<img src={productProperty.images[0]} alt="" />
		// 				</div>
		// 				<input type="file" onChange={_handleImageChange} />
		// 			</div>
		// 			<div className="col-sm-4">
		// 				<div className="split upload-image-preview">
		// 					<img src={productProperty.images[1]} alt="" />
		// 				</div>
		// 				<input type="file" onChange={_handleImageChange} />
		// 			</div>
		// 			<div className="col-sm-4">
		// 				<div className="split upload-image-preview">
		// 					<img src={productProperty.images[2]} alt="" />
		// 				</div>
		// 				<input type="file" onChange={_handleImageChange} />
		// 			</div>
		// 		</div>
		// 	);
		// }

		//show img here from filestack
	};

	const savePreview = () => {
		// var node = document.getElementById('preview');
		// htmlToImage.toPng(node)
		//   .then(function (dataUrl) {
		//     var img = new Image();
		//     img.src = dataUrl;
		//     setProductProperty({ ...productProperty, preview: dataUrl});
		//     document.body.appendChild(img);
		//   })
		//   .catch(function (error) {
		//     console.error('oops, something went wrong!', error);
		//   });
	};
	const loadPreview = () => {
		return <img src={productProperty.preview} alt="" />;
		console.log(productProperty.preview);
	};

	useEffect(() => {
		loadPreview();
	}, []);

	return (
		<Fragment>
			<div className="center">
				<div className="col-sm-12" style={{ marginBottom: '30px' }}>
					<h3 className="center" style={{ color: '#ff9900' }}>
						<b>CREATE YOUR OWN CANVAS</b>
					</h3>
					{/* <h3>Preview :</h3>  */}

					{/* <div id="previewImage"></div>  */}
					{/* <button onClick={savePreview} > test</button> */}
					<h4 className="center">
						({productProperty.material}: <b id="title">{productProperty.styleName}</b>)
					</h4>
				</div>
				<div id="preview">
					{loadPreview()}

					{mainSection()}
				</div>

				<div className="row" style={{ marginTop: '20px' }}>
					{/* <div className='col-sm-6 center'> */}
					{/* <Link to='/CanvasPrint' className='btn btn-default' value='Input Button'>
              <button className='btn'>Select Style</button>
            </Link> */}
					{/* </div> */}
					<div className="col-md-6" style={{ textAlign: 'right' }}>
						<ReactFilestack
							apikey={'AfcnFThTU4ebKMjxRMngSz'}
							actionOptions={actionObj}
							componentDisplayMode={{
								type: 'button',
								customText: 'Add Image',
								customClass: 'btn btn-warning add-img-height'
							}}
							onSuccess={(res) => {
								if (productProperty.num == 1) {
									const handle = res.filesUploaded[0].handle;
									const url = `https://cdn.filestackcontent.com/resize=height:400/${handle}`;
									productProperty.preview = url;
								} else if (productProperty.num == 2) {
									console.log(res);
									const handle0 = res.filesUploaded[0].handle;
									const handle1 = res.filesUploaded[1].handle;
									const url = `https://process.filestackapi.com/collage=files:[${handle0}],w:800,h:600,/${handle1}`;
									productProperty.preview = url;
								} else if (productProperty.num == 3) {
									console.log(res);
									const handle0 = res.filesUploaded[0].handle;
									const handle1 = res.filesUploaded[1].handle;
									const handle2 = res.filesUploaded[2].handle;
									const url = `https://process.filestackapi.com/collage=files:[${handle0},${handle2}],w:800,h:600,/${handle1}`;
									productProperty.preview = url;
								}
								if (productProperty.num == 4) {
									console.log(res);
									const handle0 = res.filesUploaded[0].handle;
									const handle1 = res.filesUploaded[1].handle;
									const handle2 = res.filesUploaded[2].handle;
									const handle3 = res.filesUploaded[3].handle;
									const url = `https://process.filestackapi.com/collage=files:[${handle0},${handle2},${handle3}],w:800,h:600,/${handle1}`;
									productProperty.preview = url;
								}
							}}
						/>
					</div>
					{console.log('preview-->', productProperty.preview)}
					<div className="col-sm-6" style={{ textAlign: 'left' }}>
						<Link to="/cart">
							<button className="btn btn-warning oultine-btn" onClick={savePreview}>
								{' '}
								Add to cart{' '}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
// import React, { Fragment } from 'react';
// import * as filestack from 'filestack-js';

// const client = filestack.init('AfcnFThTU4ebKMjxRMngSz');
// const filestackCDN = 'https://cdn.filestackcontent.com';

// export default function UploadImage() {
// 	const content = () => (
// 		<div class="center  jumbotron jumbotron-fluid">
// 			<div class="container">
// 				<h1 class="display-4">FileStack!</h1>
// 			</div>
// 		</div>
// 	);

// 	return <Fragment>{content()}</Fragment>;
// }

// ////////////
// import React, { useState, Fragment } from 'react';
// import filestack from 'filestack-js';

// const client = filestack.init('AfcnFThTU4ebKMjxRMngSz');
// const filestackCDN = 'https://cdn.filestackcontent.com';

// export default function UploadImage() {
//     const [handle, setHandle] = useState('');
//     const [trans, setTrans] = useState('');

//     filestack = () => {
//         return client.pick({
//             accept: 'image/*',
//             maxSize: 1024 * 1024 * 10
//         });
//     };

//     const handleChange = () => {
//         setTrans(setTransformation());
//     };

//     const setTransformation = () => {
//         const { getUpscale, getEnhance, getRedEyes } = this;
//         return filestackCDN + getUpscale() + getEnhance() + getRedEyes();
//     };

//     const getUpscale = () => {
//         const { upscale, noise } = this;
//         return upscale.checked ? `/upscale=noise:${noise.value}` : '';
//     };

//     const getEnhance = () => {
//         const { enhance } = this;
//         return enhance.checked ? '/enhance' : '';
//     };

//     const getRedEyes = () => {
//         const { redEyes } = this;
//         return redEyes.checked ? '/redeye' : '';
//     };

//     const uploadImg = async () => {
//         try {
//             const { filesUploaded } = await this.filestack();
//             const handle = filesUploaded[0].handle;
//             setHandle(handle);
//             setTrans(setTransformation());
//         } catch (e) {
//             console.log(e);
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         console.log('clicked submit');
//     };

//     const content = () => (
//         <div className="container">
//             <div className="row">
//                 <div className=".col-md-offset-4 media-list">
//                     <div className="panel panel-default">
//                         <div className="panel-heading">
//                             <h2 className="panel-title text-center">
//                                 <span className="glyphicon glyphicon-upload" /> Upload Image
// 							</h2>
//                         </div>
//                         <div className="panel-body">
//                             <form name="imageForm" onChange={handleChange} onSubmit={handleSubmit} noValidate>
//                                 <div className="form-group">
//                                     <label>Enhancements</label>
//                                     <div>
//                                         {/* <input type="checkbox" ref={(input) => (this.upscale = input)} /> Upscale */}
//                                     </div>

//                                     <div>
//                                         {/* <input type="checkbox" ref={(input) => (this.enhance = input)} /> Enhance */}
//                                     </div>
//                                     <div>
//                                         {/* <input type="checkbox" ref={(input) => (this.redEyes = input)} /> Red eyes */}
//                                         removal
// 									</div>
//                                 </div>

//                                 <div className="form-group">
//                                     <label htmlFor="picture">File</label>
//                                     <div className={`thumbnail ${handle ? '' : 'off'}`}>
//                                         <img
//                                             id="img-preview"
//                                             src={handle ? `${trans}/${handle}` : ''}
//                                             alt="picture-thumbnail"
//                                             className="img-rounded"
//                                         />
//                                     </div>
//                                     <div className="text-center dropup">
//                                         <button
//                                             type="button"
//                                             className="btn btn-default filepicker"
//                                             onClick={uploadImg}
//                                         >
//                                             Upload <span className="caret" />
//                                         </button>
//                                     </div>
//                                 </div>
//                                 <button type="submit" className="btn btn-filestack btn-block submit">
//                                     Submit
// 								</button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );

//     return <Fragment>{content()}</Fragment>;
// }

// import React, { Fragment } from 'react';
// import ReactFilestack from 'filestack-react';

// export default function UploadImage() {
//     const actionObj = {
//         maxFiles: 7
//     };
//     return (
//         <Fragment>
//             <ReactFilestack
//                 apikey={'AfcnFThTU4ebKMjxRMngSz'}
//                 actionOptions={actionObj}
//                 componentDisplayMode={{
//                     type: 'button',
//                     customText: 'Add Image',
//                     customClass: 'btn btn-warning'
//                 }}
//                 customRender={({ onPick }) => (
//                     <div>
//                         <strong>Find an avatar</strong>
//                         <button onClick={onPick}>Pick</button>
//                     </div>
//                 )}
//                 onSuccess={(res) => console.log(res)}
//             />

//             <h1>YOU ARE BEST! </h1>
//         </Fragment>
//     );
// }

/////////
// import React, { Fragment } from 'react';
// import ReactFilestack from 'filestack-react';

// export default function UploadImage() {
// 	const actionObj = {
// 		maxFiles: 7
// 	};
// 	return (
// 		<Fragment>
// 			<ReactFilestack
// 				apikey={'AfcnFThTU4ebKMjxRMngSz'}
// 				actionOptions={actionObj}
// 				componentDisplayMode={{
// 					type: 'button',x`
// 					customText: 'Add Image',
// 					customClass: 'btn btn-warning'
// 				}}
// 				customRender={({ onPick }) => (
// 					<div>
// 						<strong>Find an avatar</strong>
// 						<button onClick={onPick}>Pick</button>
// 					</div>
// 				)}
// 				onSuccess={(res) => console.log(res)}
// 			/>

// 			<h1>YOU ARE BEST! </h1>
// 		</Fragment>
// 	);
// }
