import React, { useContext, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import ReactFilestack from "filestack-react";
import { ThemeContext } from "../App";

export default function UploadImage() {
  const context = useContext(ThemeContext);
  const { productProperty, setProductProperty } = context;
  const { loading, setLoading } = useState(false);

  const actionObj = {
    maxFiles: productProperty.num
  };

  const saveProduct = () => {
    let i = Math.random()
      .toString(36)
      .substring(7);
    let r = "Product " + i;
    localStorage.setItem(r, JSON.stringify(productProperty));
  };

  return (
    <Fragment>
      <div className="center">
        <div className="col-sm-12" style={{ marginBottom: "30px" }}>
          <h3 className="center" style={{ color: "#ff9900" }}>
            <b>CREATE YOUR OWN CANVAS</b>
          </h3>
          <h4 className="center">
            ({productProperty.material}:{" "}
            <b id="title">{productProperty.styleName}</b>)
          </h4>
        </div>
        <div id="previewImg">
          <img src={productProperty.preview} />
        </div>
        <div className="row" style={{ marginTop: "20px" }}>
          <div className="col-md-6" style={{ textAlign: "right" }}>
            <ReactFilestack
              apikey={"AfcnFThTU4ebKMjxRMngSz"}
              actionOptions={actionObj}
              componentDisplayMode={{
                type: "button",
                customText: "Add Image",
                customClass: "btn btn-warning add-img-height"
              }}
              onSuccess={res => {
                if (productProperty.num === 1) {
                  const handle = res.filesUploaded[0].handle;
                  const url = `https://cdn.filestackcontent.com/resize=height:400/${handle}`;
                  setProductProperty({
                    ...productProperty,
                    preview: url,
                    productPrice:
                      productProperty.stylePrice + productProperty.sizePrice
                  });
                } else if (productProperty.num === 2) {
                  console.log(res);
                  const handle0 = res.filesUploaded[0].handle;
                  const handle1 = res.filesUploaded[1].handle;
                  const url = `https://process.filestackapi.com/collage=files:[${handle0}],w:800,h:600,/${handle1}`;
                  setProductProperty({
                    ...productProperty,
                    preview: url,
                    productPrice:
                      productProperty.stylePrice + productProperty.sizePrice
                  });
                  console.log(productProperty.preview);
                } else if (productProperty.num === 3) {
                  console.log(res);
                  const handle0 = res.filesUploaded[0].handle;
                  const handle1 = res.filesUploaded[1].handle;
                  const handle2 = res.filesUploaded[2].handle;
                  const url = `https://process.filestackapi.com/collage=files:[${handle0},${handle2}],w:800,h:600,/${handle1}`;
                  setProductProperty({
                    ...productProperty,
                    preview: url,
                    productPrice:
                      productProperty.stylePrice + productProperty.sizePrice
                  });
                }
                if (productProperty.num === 4) {
                  console.log(res);
                  const handle0 = res.filesUploaded[0].handle;
                  const handle1 = res.filesUploaded[1].handle;
                  const handle2 = res.filesUploaded[2].handle;
                  const handle3 = res.filesUploaded[3].handle;
                  const url = `https://process.filestackapi.com/collage=files:[${handle0},${handle2},${handle3}],w:800,h:600,/${handle1}`;
                  setProductProperty({
                    ...productProperty,
                    preview: url,
                    productPrice:
                      productProperty.stylePrice + productProperty.sizePrice
                  });
                }
              }}
            />
          </div>
          {console.log("preview-->", productProperty.preview)}
          <div className="col-sm-6" style={{ textAlign: "left" }}>
            <Link to="/cart">
              <button
                className="btn btn-warning oultine-btn"
                onClick={saveProduct}
              >
                Add to cart{" "}
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
