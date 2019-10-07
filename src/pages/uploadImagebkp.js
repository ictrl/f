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
