import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question3 = () => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(0);

  const handleNum1Change = (e) => {
    setNum1(parseInt(e.target.value));
  };

  const handleNum2Change = (e) => {
    setNum2(parseInt(e.target.value));
  };

  const handleCalculateClick = () => {
    setResult(num1 + num2);
  };

  const handleResetClick = () => {
    setNum1(0);
    setNum2(0);
    setResult(0);
  };
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال سوم</h1>
        <h2>
          یک برنامه بنویسید که یک فرم داشته باشد دو ورودی از کاربر بگیرید و با
          زدن دکمه نتیجه جمع آن دو عدد را حساب کند و با زدن دکمه ریست مجدد همه
          اعداد 0 شود
        </h2>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question3
        </p>

        <p style={{ fontSize: "18px", fontWeight: "bold", color: "red" }}>
          خروجی باید مشابه عکس زیر باشد:
        </p>

        <div className="cs-center">
          <img
            className="cs-responsive-image cs-image-border"
            src="/images/question3.jpg"
            alt="سوال سوم"
          />
        </div>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "left",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          {/* جواب خود را در اینجا بنویسید */}
          <div className="cs-form">
            <div className="cs-form-group">
              <label htmlFor="num1">عدد اول:</label>
              <input
                type="number"
                id="num1"
                name="num1"
                value={num1}
                onChange={handleNum1Change}
              />
            </div>
            <div className="cs-form-group">
              <label htmlFor="num2">عدد دوم:</label>
              <input
                type="number"
                id="num2"
                name="num2"
                value={num2}
                onChange={handleNum2Change}
              />
            </div>
            <div className="cs-form-group">
              <button onClick={handleCalculateClick}>حساب کن</button>
              <button onClick={handleResetClick}>ریست</button>
            </div>
            {result !== 0 && (
              <div className="cs-form-group">
                <label htmlFor="result">نتیجه:</label>
                <span id="result">{result}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Question3;
