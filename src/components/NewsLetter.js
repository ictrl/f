import React from 'react';

export default function NewsLetter() {
	return (
		<div className="col-sm-4 row " style={{ bottom: '-2rem' }}>
			<form action style={{ background: '#ff9900', height: '371px', width: '510px', padding: '4rem 1rem 0 6rem' }}>
				<h3 style={{ fontSize: '20px', color: '#fff', letterSpacing: '5px' }}>STAY IN TOUCH WITH GALLERIQ</h3>
				<input
					style={{
						color: 'white',
						letterSpacing: '1.4px',
						fontSize: '12px',
						padding: '1rem 1rem 0.5rem 1rem',
						width: '420px',
						marginTop: '3.6rem'
					}}
					type="text"
					className="subscribe-input"
					placeholder="Enter Email Address"
				/>
				<br />
				<br />

				<button
					type="submit"
					className="btn btn-default subscribe"
					style={{ fontSize: '18px', borderRadius: '0px', width: '165px', height: '46px' }}
				>
					SUBSCRIBE
				</button>
			</form>
		</div>
	);
}
