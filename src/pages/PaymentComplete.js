import React, { useEffect } from "react";

export default function PaymentComplete() {
  let temp = [];
  const clearLocal = () => {
    localStorage.clear();
  };

  const getProducts = () => {
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      var key = localStorage.key(i);
      if (key.slice(0, 7) == "Product") {
        var element = localStorage.getItem(key);
        temp.push(element);
      }
    }
  };
  // const getProducts = () => {
  //   let temp = [];
  //   for (var i = 0, len = localStorage.length; i < len; ++i) {
  //     var key = localStorage.key(i);

  //     var element = localStorage.getItem(key);
  //     if (JSON.parse(element).styleName != undefined) {
  // temp.push(element);
  //     } else continue;
  //   }
  //   console.log(temp);
  // };

  useEffect(() => {
    // clearLocal();
    getProducts();
  }, []);

  return (
    <div className="jumbotron">
      <button
        onClick={() => {
          console.log(temp);
        }}
      >
        temp
      </button>
      <h1>Thank for Shopping With us!</h1>
    </div>
  );
}
