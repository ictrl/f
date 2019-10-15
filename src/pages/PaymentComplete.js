import React, { useEffect } from "react";

export default function PaymentComplete() {
  const clearLocal = () => {
    localStorage.clear();
  };

  const getProducts = () => {
    let temp = [];
    for (var i = 0, len = localStorage.length; i < len; ++i) {
      var key = localStorage.key(i);

      var element = localStorage.getItem(key);
      if (JSON.parse(element).styleName != undefined) {
        temp.push(element);
      } else continue;
    }
    console.log(temp);
  };

  useEffect(() => {
    // clearLocal();
    getProducts();
  }, []);

  return (
    <div className="jumbotron">
      <h1>Thank for Shopping With us!</h1>
    </div>
  );
}
