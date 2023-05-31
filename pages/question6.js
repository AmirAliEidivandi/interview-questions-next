/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question6 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال ششم</h1>
        <h2>ریداکس و کاربردش چیست توضیح دهید</h2>

        <p>Action و Reducer هر کدام چه کاربردی دارند؟</p>

        <h3>کد های مربوط به این سوال در فایل زیر است:</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question6
        </p>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "left",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          {/* جواب خود را در اینجا بنویسید */}
          Redux یک کتابخانه جاوااسکریپتی است که برای مدیریت وضعیت (state) برنامه
          های وب ساخته شده است. این کتابخانه امکان مدیریت داده های برنامه در یک
          جایگاه مشترک را فراهم می کند، به طوری که تغییرات نگهداری شده در وضعیت
          به راحتی قابل پیش بینی و توصیف می باشند. در Redux، داده ها در store
          ذخیره می شوند. Actions و reducers دو قسمت اساسی از Redux هستند.
          Action: Action ها، یک شیء ساده JavaScript هستند که حالت برنامه را به
          وضعیت جدید تغییر می دهند. هر Action باید شامل یک property type باشد که
          نشان دهنده نوع عملیات است که برای انجام در Store درخواست شده است.
          علاوه بر type، یک action می تواند شامل دیگر properties نیز باشد که به
          وضعیت برنامه اضافه شوند. Reducer: Reducers، یک pure function هستند که
          وضعیت قبلی Store و یک Action را به عنوان ورودی می گیرند و وضعیت جدید
          Store را برمی گردانند. Reducer ها تغییرات را در وضعیت اعمال می کنند،
          بر اساس نوع Action درخواستی. استفاده از Redux به کاربردهای مختلفی از
          جمله برنامه های موبایل، وب سایت ها و برنامه های تحت شبکه کمک می کند.
          Redux با داشتن یک وضعیت مرکزی، می تواند کدهای برنامه را تمیزتر و قابل
          نگهداری تر کند و باعث سهولت کار تیم های برنامه نویسی در پروژه های بزرگ
          می شود.
        </div>
      </div>
    </Layout>
  );
};

export default Question6;
