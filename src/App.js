import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Offers from "./components/Offers";
import Footer from "./components/Footer";
import CreateYourPrint from "./components/CreateYourPrint";
// import SProvider, { ssContext } from "./sContext";
import CanvasPrint from "./pages/canvasPrint";
import Cart from "./pages/Cart";
import wallArt from "./pages/wallArt";
import premiumPrints from "./pages/premiumPrints";
import Login from "./pages/Login";
import architecture from "./pages/architecture";
import landescape from "./pages/landescape";
import urban from "./pages/urban";
import create from "./pages/create";
import register from "./pages/register";
import checkout from "./pages/checkout";
import PaymentComplete from "./pages/PaymentComplete";
import quickLinks from "./pages/quickLinks";
import Home from "./pages/home";
import contact from "./pages/contact";
import singleCanvasPrints from "./pages/singleCanvasPrints";
import catalog from "./pages/catalog";
import largeCanvasPrints from "./pages/largeCanvasPrints";
import acrylicPremiumPrints from "./pages/acrylicPremiumPrints";
import floatingFrameCanvas from "./pages/floatingFrameCanvas";
import canvasCollages from "./pages/canvasCollages";
import canvasSplitImage from "./pages/canvasSplitImage";
import canvasWallDisplays from "./pages/canvasWallDisplays";
import category from "./pages/category";
import privacyPolicy from "./pages/privacyPolicy";
import ReturnPolicy from "./pages/ReturnPolicy";
import shippingInfo from "./pages/shippingInfo";
import howITWorks from "./pages/howITWorks";
import UploadImage from "./pages/uploadImage";
import { preview } from "filestack-js/build/main/lib/api/preview";
const util = require("util");

export const ThemeContext = React.createContext({});
export const ssContext = React.createContext({});

const App = ({ children }) => {
  const [productProperty, setProductProperty] = useState({});
  const [summaryDetails, setSummaryDetails] = useState({
    subtotal: 0,
    shipping: 100,
    tax: 100,
    total: 200
  });
  const componentValidation = route => {
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
    }
  };

  // const show = () => {
  //   console.log(
  //     util.inspect(productProperty, {
  //       showHidden: true,
  //       depth: null
  //     })
  //   );
  // };

  return (
    <Router>
      <Offers />

      <ThemeContext.Provider value={{ productProperty, setProductProperty }}>
        <Navbar />
        {/* <button onClick={show}>show</button> */}

        <Route exact path="/" component={Home} />
        <Route exact path="/catalog" component={catalog} />
        <Route exact path="/premiumPrints" component={premiumPrints} />
        <Route exact path="/wallArt" component={wallArt} />
        <Route exact path="/category" component={category} />
        <Route exact path="/landescape" component={landescape} />
        <Route exact path="/urban" component={urban} />
        <Route exact path="/architecture" component={architecture} />
        <Route exact path="/contact" component={contact} />
        <Route
          exact
          path="/singleCanvasPrints"
          component={singleCanvasPrints}
        />
        <Route exact path="/largeCanvasPrints" component={largeCanvasPrints} />
        <Route
          exact
          path="/acrylicPremiumPrints"
          component={acrylicPremiumPrints}
        />
        <Route
          exact
          path="/floatingFrameCanvas"
          component={floatingFrameCanvas}
        />
        <Route exact path="/canvasCollages" component={canvasCollages} />
        <Route exact path="/canvasSplitImage" component={canvasSplitImage} />
        <Route
          exact
          path="/canvasWallDisplays"
          component={canvasWallDisplays}
        />

        <div className="container">
          <Route exact path="/CreateYourPrint" component={CreateYourPrint} />
          <Route
            exact
            path="/CanvasPrint"
            component={componentValidation(CanvasPrint)}
          />
          <Route
            exact
            path="/uploadImage"
            component={UploadImage}
            // component={componentValidation(UploadImage)}
          />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/create" component={create} />
          <Route exact path="/register" component={register} />
          <Route exact path="/payment-complete" component={PaymentComplete} />
          <Route exact path="/privacyPolicy" component={privacyPolicy} />
          <Route exact path="/ReturnPolicy" component={ReturnPolicy} />
          <Route exact path="/shippingInfo" component={shippingInfo} />
          <Route exact path="/howITWorks" component={howITWorks} />
          <Route exact path="/quickLinks" component={quickLinks} />
        </div>
        <ssContext.Provider value={{ summaryDetails, setSummaryDetails }}>
          <Route exact path="/checkout" component={checkout} />
          <Route exact path="/Cart" component={Cart} />
        </ssContext.Provider>
      </ThemeContext.Provider>

      <Footer />
    </Router>
  );
};

export default App;
