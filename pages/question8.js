/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";

import Layout from "../components/base";

const Question8 = () => {
  return (
    <Layout>
      <div className="cs-container">
        <h1>سوال هشتم</h1>

        <h3>به سوالات مربوط به گیت در این قسمت پاسخ دهید</h3>
        <p
          style={{
            direction: "ltr",
            fontWeight: "bold",
            fontFamily: "Roboto",
          }}
        >
          pages/question8
        </p>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>گیت چیست و تفاوت آن با گیت هاب چیست؟</p>
          {/* جواب خود را در اینجا بنویسید */}
          Git یک سیستم مدیریت نسخه است که توسط Linus Torvalds طراحی شده است. Git
          به تیم‌های توسعه دهنده این امکان را می‌دهد که در یک پروژه نرم‌افزاری
          کار کنند، تغییرات خود را ذخیره کنند و با هماهنگی بیشتر، مشکلات را رفع
          کنند. GitHub یک سرویس مبتنی بر وب است که برای هاست کردن مخزن های Git
          استفاده می‌شود. با استفاده از GitHub، می‌توانید به صورت آنلاین مخزن
          های Git را مدیریت کنید، به تیم‌های دیگر دسترسی دهید و مشارکت کنید.
          همچنین GitHub ابزارهایی برای مشارکت و همکاری در یک پروژه مشترک فراهم
          می‌کند، از جمله امکان بررسی و اعتبار سنجی کدها، پیشنهاد تغییرات (Pull
          Request)، مشکلات (Issue) و غیره. به طور خلاصه، Git یک سیستم مدیریت
          نسخه است که برای کار با فایل‌های مختلف و ذخیره تغییرات استفاده می‌شود؛
          در حالی که GitHub یک سرویس وب برای هاست کردن مخزن‌های Git و ایجاد
          ارتباط و همکاری بین توسعه دهندگان است.
        </div>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>چند دستور مهم گیت را بنویسید با ذکر مثال</p>
          {/* جواب خود را در اینجا بنویسید */}
          1- git init: ایجاد مخزن جدید Git در پوشه کاری فعلی.
          git init

          2- git clone: کپی کردن یک مخزن Git موجود به پوشه کاری فعلی.
          git clone repolink

          3- git add: اضافه کردن تغییرات به صحنه برای ذخیره در مخزن.
          git add . or git add index.html app.js & etc...

          4- git commit: ذخیره تغییرات به عنوان یک "commit" جدید در مخزن.
          git commit -m "added new feature"

          5- git push: ارسال تغییرات انجام شده به مخزن اصلی در سرویس گیت‌هاب.
          git push -u origin main or master or branchName

          6- git pull: دریافت تغییرات انجام شده در مخزن اصلی در سرویس گیت‌هاب.
          git pull or git pull origin develop and branchName

          7- git branch: نمایش لیست شاخه‌های موجود در مخزن.
          git branch = develop - master - newFeature and etc....
        </div>

        <div
          style={{
            fontWeight: "bold",
            textAlign: "right",
            direction: "rtl",
            padding: "50px 0 20px 0",
          }}
        >
          <p>به غیر از گیت هاب چند سایت مشابه نام ببرید</p>
          GitLab - BitBucket - SourceForge - Launchpad - CodePlex - GitKarken
          {/* جواب خود را در اینجا بنویسید */}
        </div>
      </div>
    </Layout>
  );
};

export default Question8;
