import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question1 = () => {
  const [count, setCount] = useState(0)

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال اول</h1>
        <h2>
          یک برنامه شمارنده بنویسید که با فشردن دکمه + یک عدد به متغیر count اضافه و با فشردن دکمه -
          یک عدد کم شود. اگر عدد شمارنده بالا تر از 10 بود رنگ دکمه ها قرمز شود
        </h2>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question1
        </p>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "center",
            direction: "rtl",
          }}
        >
          {/* جواب خود را در اینجا بنویسید */}

          <button
            className="cs-btn cs-btn-primary cs-m-10"
            style={{
              backgroundColor: count >= 10 ? 'red' : 'green',
            }}
            onClick={handleIncrement}
          >
            +
          </button>
          <button
            className="cs-btn cs-btn-primary cs-m-10"
            style={{
              backgroundColor: count >= 10 ? 'red' : 'green',
            }}
            onClick={handleDecrement}
          >
            -
          </button>

          <button
            className="cs-btn cs-btn-primary cs-m-10"
            style={{
              backgroundColor: "green",
            }}
            onClick={handleReset}
          >
            Reset
          </button>

          <div
            style={{
              fontSize: "2rem",
              fontWeight: "bold",
              fontFamily: "roboto",
            }}
          >
            {count}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Question1;
