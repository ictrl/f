import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import NewsLetter from './NewsLetter';

import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import phone from '../images/phone.png';
import mail from '../images/mail.png';

export default function Footer() {
	return (
		<Fragment>
			<hr style={{ border: '0.3px solid #999999' }} />
			<div className="row footer">
				<div className="col-sm-1" />
				<div className="col-sm-2" style={{ lineHeight: '5rem' }}>
					<p style={{ fontWeight: '700', fontSize: '13px', letterSpacing: '4px' }}>COMPANY</p>
					<ul style={{ fontSize: '13px', letterSpacing: '1.5px' }}>
						<li>
							<Link to="/privacyPolicy">PRIVACY POLICY</Link>
						</li>
						<li>
							<Link to="/contact">CONTACT &amp; HELP</Link>
						</li>
						<li>
							<Link to="/howITworks">HOW IT WORKS</Link>
						</li>
					</ul>
				</div>
				<div className="col-sm-2" style={{ lineHeight: '5rem' }}>
					<ul style={{ letterSpacing: '1.5px' }}>
						<li>
							<h4 style={{ display: 'hidden', color: '#ffffff' }}>IMPORTANT</h4>
						</li>
						<li>
							<Link to="/shippingInfo">SHIPPING INFO</Link>
						</li>
						<li>
							<Link to="/ReturnPolicy">RETURN POLICY</Link>
						</li>
						<li>
							<Link to="/quickLinks">QUICK LInks</Link>
						</li>
					</ul>
				</div>
				<div className="col-sm-2" style={{ lineHeight: '5rem' }}>
					<p style={{ fontWeight: '700', fontSize: '13px', letterSpacing: '4px' }}>BE SOCIAL</p>
					<ul style={{ lineHeight: '3.4rem' }}>
						<li>
							<div style={{ display: 'flex' }}>
								<div style={{ paddingRight: 30 }}>
									<img src={facebook} alt />
								</div>
								<div style={{ paddingRight: 30 }}>
									<img src={instagram} alt />
								</div>
								<div style={{ paddingRight: 30 }}>
									<img src={twitter} alt />
								</div>
							</div>
						</li>
						<li>
							<img src={phone} alt />
							<span className="black42">+91-9810512915</span>
						</li>
						<li>
							<img src={mail} alt />
							<span className="black42">info@easywallprints.com</span>
						</li>
					</ul>
				</div>

				<NewsLetter />

				<div className="col-sm-1" />
			</div>
			<div className="row" style={{ margin: '0rem 3rem', position: 'relative', bottom: '0' }}>
				<div
					class="footer-copyright text-center foot "
					style={{
						color: '#fff',
						background: '#424242',
						padding: '12px 20px 12px 40px',
						display: 'flex',
						alignItems: 'space-between'
					}}
				>
					<p align="left" style={{ flex: 1 }}>
						Copyright ©2019 Galleriq. All rights reserved.
					</p>
					<p align="right" style={{ flex: 1 }}>
						by Brand Reap Solutions
					</p>{' '}
					&nbsp; &nbsp; &nbsp;
					<img src={require('../xd/logo.png')} alt="" />
				</div>
			</div>
		</Fragment>
	);
}
