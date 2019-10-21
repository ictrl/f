import React from 'react';

export default function NewsLetter() {
	return (
		<div className="col-sm-4">
			<form action style={{ background: '#ff9900', height: '250px', padding: '3rem' }}>
				<h3 style={{ fontSize: '20px', color: '#fff', letterSpacing: '1.5px' }} style={{ fontSize: '20px' }}>
					STAY IN TOUCH WITH GALLERIQ
				</h3>
				<input
					style={{ marginTop: '2rem', color: 'white', letterSpacing: '1.4px', fontSize: '12px' }}
					type="text"
					className="subscribe-input"
					placeholder="Enter Email Address"
				/>
				<button type="submit" className="btn btn-default subscribe" style={{ marginTop: '4rem', fontSize: '18px' }}>
					SUBSCRIBE
				</button>
			</form>
		</div>
	);
}
