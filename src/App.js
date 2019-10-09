import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Footer from './components/Footer';
import CreateYourPrint from './components/CreateYourPrint';

import CanvasPrint from './pages/canvasPrint';
import uploadImage from './pages/uploadImage';
import Cart from './pages/Cart';
import Login from './pages/Login';
import create from './pages/create';
import register from './pages/register';
import checkout from './pages/checkout';
import summary from './pages/summary';
import PaymentComplete from './pages/PaymentComplete';

import quickLinks from './pages/quickLinks';
import Home from './pages/home';
import contact from './pages/contact';
import singleCanvasPrints from './pages/singleCanvasPrints';
import catalog from './pages/catalog';
import largeCanvasPrints from './pages/largeCanvasPrints';
import acrylicPremiumPrints from './pages/acrylicPremiumPrints';
import floatingFrameCanvas from './pages/floatingFrameCanvas';
import canvasCollages from './pages/canvasCollages';
import canvasSplitImage from './pages/canvasSplitImage';
import canvasWallDisplays from './pages/canvasWallDisplays';
import category from './pages/category';
import privacyPolicy from './pages/privacyPolicy';
import ReturnPolicy from './pages/ReturnPolicy';
import shippingInfo from './pages/shippingInfo';
import howITWorks from './pages/howITWorks';
import UploadImage from './pages/uploadImage';
import { preview } from 'filestack-js/build/main/lib/api/preview';

// import ThemeProvider, { ThemeContext } from './themeContext';

export const ThemeContext = React.createContext({});

const App = ({ children }) => {
	const [ productProperty, setProductProperty ] = useState({
		user: {},
		material: null,
		styleName: null,
		stylePrice: null,
		size: null,
		sizePrice: null,
		preview: null,
		shipping: 100,
		quantity: 1,
		subPrice: null,
		calculatedPrice: null,
		totalPrice: null,
		num: 1,
		div: (
			<div className="row left-section " style={{ display: 'block' }}>
				{' '}
				<div className="col-sm-12">
					<div className="split">
						<img src alt="" />
					</div>
				</div>
			</div>
		)
	});

	const componentValidation = (route) => {
		if (route == CanvasPrint) {
			if (productProperty.material == null) {
				return CreateYourPrint;
			} else {
				return route;
			}
		} else if (route == UploadImage) {
			if (productProperty.material == null) {
				return CreateYourPrint;
			} else {
				if (productProperty.styleName == null || productProperty.size == null) {
					return CanvasPrint;
				} else {
					return route;
				}
			}
		} else if (route == Cart) {
			if (productProperty.material == null) {
				return CreateYourPrint;
			} else {
				if (productProperty.styleName == null || productProperty.size == null) {
					return CanvasPrint;
				} else if (productProperty.preview == null) {
					return UploadImage;
				} else {
					return route;
				}
			}
		}
	};
	return (
		<Router>
			<Offers />
			<Navbar />

			{console.log('ss', productProperty)}
			<Route exact path="/" component={Home} />
			<Route exact path="/catalog" component={catalog} />
			<Route exact path="/category" component={category} />
			<Route exact path="/contact" component={contact} />
			<Route exact path="/singleCanvasPrints" component={singleCanvasPrints} />
			<Route exact path="/largeCanvasPrints" component={largeCanvasPrints} />
			<Route exact path="/acrylicPremiumPrints" component={acrylicPremiumPrints} />
			<Route exact path="/floatingFrameCanvas" component={floatingFrameCanvas} />
			<Route exact path="/canvasCollages" component={canvasCollages} />
			<Route exact path="/canvasSplitImage" component={canvasSplitImage} />
			<Route exact path="/canvasWallDisplays" component={canvasWallDisplays} />
			<div className="container">
				<ThemeContext.Provider value={{ productProperty, setProductProperty }}>
					<Route exact path="/CreateYourPrint" component={CreateYourPrint} />
					<Route exact path="/CanvasPrint" component={componentValidation(CanvasPrint)} />
					<Route exact path="/uploadImage" component={componentValidation(UploadImage)} />
					<Route exact path="/Cart" component={componentValidation(Cart)} />
					<Route exact path="/checkout" component={checkout} />
				</ThemeContext.Provider>

				<Route exact path="/Login" component={Login} />
				<Route exact path="/create" component={create} />
				<Route exact path="/register" component={register} />
				<Route exact path="/summary" component={summary} />
				<Route exact path="/payment-complete" component={PaymentComplete} />

				<Route exact path="/privacyPolicy" component={privacyPolicy} />
				<Route exact path="/ReturnPolicy" component={ReturnPolicy} />
				<Route exact path="/shippingInfo" component={shippingInfo} />
				<Route exact path="/howITWorks" component={howITWorks} />
				<Route exact path="/quickLinks" component={quickLinks} />
			</div>
			<Footer />
		</Router>
	);
};

export default App;
