import React, { useContext, useState, Fragment } from 'react';
import Loading from '../components/Loading';
import { Link } from 'react-router-dom';
import ReactFilestack from 'filestack-react';
import { ThemeContext } from '../App';
import { setTimeout } from 'timers';

export default function UploadImage() {
	const context = useContext(ThemeContext);
	const { productProperty, setProductProperty } = context;
	const [ loading, setLoading ] = useState(
		<div id="blankDiv" className="mx-auto">
			{' '}
			<img src="http://muslimobserver.com/wp-content/themes/enfold/images/no-img-preview.png" alt="imgPreview" />
			<br />
			<br />
		</div>
	);
	const [ flag, setFlag ] = useState(false);
	const actionObj = {
		maxFiles: productProperty.num
	};

	const saveProduct = () => {
		let i = Math.random().toString(36).substring(7);
		let r = 'Product ' + i;
		localStorage.setItem(r, JSON.stringify(productProperty));
	};

	const renderPic = () => {
		if (flag) {
			return <img src={productProperty.preview} alt="imgPreview" />;
		}
	};

	return (
		<Fragment>
			<div className="center">
				<div className="col-sm-12" style={{ marginBottom: '30px' }}>
					<h3 className="center" style={{ color: '#ff9900' }}>
						<b>CREATE YOUR OWN CANVAS</b>
					</h3>
					<h4 className="center">
						({productProperty.material}: <b id="title">{productProperty.styleName}</b>)
					</h4>
				</div>
				<div id="previewImg">
					{loading}
					{renderPic()}{' '}
				</div>
				<div className="row" style={{ marginTop: '20px' }}>
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
								setLoading(
									<div id="blankDiv">
										{' '}
										<Loading />
										<br />
										<br />
									</div>
								);
								setTimeout(() => {
									document.getElementById('blankDiv').style.display = 'none';
									// console.log("pres", productProperty.preview);
									setFlag(true);
								}, 1000);
								if (productProperty.num === 1) {
									const handle = res.filesUploaded[0].handle;
									const url = `https://cdn.filestackcontent.com/resize=height:400/${handle}`;
									setProductProperty({
										...productProperty,
										preview: url,
										productPrice: productProperty.stylePrice + productProperty.sizePrice
									});
								} else if (productProperty.num === 2) {
									const handle0 = res.filesUploaded[0].handle;
									const handle1 = res.filesUploaded[1].handle;
									const url = `https://process.filestackapi.com/collage=files:[${handle0}],w:800,h:600,/${handle1}`;
									setProductProperty({
										...productProperty,
										preview: url,
										productPrice: productProperty.stylePrice + productProperty.sizePrice
									});
								} else if (productProperty.num === 3) {
									const handle0 = res.filesUploaded[0].handle;
									const handle1 = res.filesUploaded[1].handle;
									const handle2 = res.filesUploaded[2].handle;
									const url = `https://process.filestackapi.com/collage=files:[${handle0},${handle2}],w:800,h:600,/${handle1}`;
									setProductProperty({
										...productProperty,
										preview: url,
										productPrice: productProperty.stylePrice + productProperty.sizePrice
									});
								}
								if (productProperty.num === 4) {
									const handle0 = res.filesUploaded[0].handle;
									const handle1 = res.filesUploaded[1].handle;
									const handle2 = res.filesUploaded[2].handle;
									const handle3 = res.filesUploaded[3].handle;
									const url = `https://process.filestackapi.com/collage=files:[${handle0},${handle2},${handle3}],w:800,h:600,/${handle1}`;
									setProductProperty({
										...productProperty,
										preview: url,
										productPrice: productProperty.stylePrice + productProperty.sizePrice
									});
								}
							}}
						/>
					</div>
					<div className="col-sm-6" style={{ textAlign: 'left' }}>
						<Link to="/cart">
							<button className="btn btn-warning oultine-btn" onClick={saveProduct}>
								Add to cart{' '}
							</button>
						</Link>
					</div>
				</div>
			</div>
		</Fragment>
	);
}
