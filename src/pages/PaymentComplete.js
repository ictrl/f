import React, { useEffect } from "react";

export default function PaymentComplete() {
  const clearLocal = () => {
    localStorage.clear();
  };

  useEffect(() => {
    clearLocal();
  }, []);

  return (
    <div className="jumbotron">
      <h1>Thansk for Shopping With us!</h1>
    </div>
  );
}
