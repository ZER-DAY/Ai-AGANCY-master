"use client";

import React, { useState } from "react";
import Link from "next/link";

const TiktokInjouPage = () => {
  const [formData, setFormData] = useState({
    invitationCode: "",
    username: "",
    agentName: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    // أضف المنطق المطلوب لمعالجة البيانات المرسلة
  };

  return (
    <section
      dir="rtl"
      className="min-h-screen flex flex-col items-center bg-gray-100 p-6"
    >
      {/* الطريقة الأولى */}
      <div className="bg-white rounded-lg shadow-lg mt-8 p-6 max-w-2xl">
        <h2 className="text-purple-700 text-xl font-bold mb-4 text-center">
          الطريقة الأولى
        </h2>
        <p>
          اضغط على الرابط المرفق/ سوف يفتح لك تطبيق تيك توك/ يجب تسجيل الدخول ثم
          إضغط على تقديم طلب
        </p>
        <img
          src="/serv.png"
          alt="شرح الطريقة الأولى"
          className="w-[240px] max-w-lg mx-auto rounded-lg mb-4"
        />
        <div className="text-center">
          <a
            target="_blank"
            href="https://www.tiktok.com/tcn/scout_creators?use_spark=1&agency_scout_source=qr_code_leads&ShareLinkID=7449309449675590406"
            className="inline-block px-6 py-2 text-white bg-purple-700 rounded-md shadow-md hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
          >
            اضغط هنا
          </a>
        </div>
      </div>

      {/* الطريقة الثانية */}
      <h1 className="text-purple-700 text-xl font-bold mb-4 text-center pt-8">
        الطريقة الثانية
      </h1>

      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full max-w-7xl">
        {/* استمارة تقديم الطلب */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 mb-8 lg:mb-0">
          <h2 className="text-purple-700 text-2xl font-semibold text-center mb-6">
            أدخل البيانات
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* معرف الحساب */}
            <div>
              <label
                htmlFor="TIKtok@ID"
                className="block text-sm font-medium text-gray-700"
              >
                ادخل معرف الحساب &quot;TIKtok@ID&quot;
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                required
              />
            </div>

            {/* رمز الدعوة */}
            <div>
              <label
                htmlFor="invitationCode"
                className="block text-sm font-medium text-gray-700"
              >
                ادخل رمز الدعوة
              </label>
              <input
                type="text"
                name="invitationCode"
                id="invitationCode"
                value={formData.invitationCode}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                required
              />
            </div>

            {/* اسم الوكيل */}
            <div>
              <label
                htmlFor="agentName"
                className="block text-sm font-medium text-gray-700"
              >
                ادخل اسم الوكيل الفرعي
              </label>
              <input
                type="text"
                name="agentName"
                id="agentName"
                value={formData.agentName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                required
              />
            </div>

            {/* زر الإرسال */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                إرسال الطلب
              </button>
            </div>
          </form>
          <p className="text-center text-sm text-gray-700 mt-6">
            تم إستلام طلبكم للإنضمام إلى وكالة فنون ميديا
          </p>
        </div>

        {/* قسم الفيديو */}
        <div className="flex flex-col items-center lg:ml-8 w-full max-w-md">
          <h2 className="text-purple-700 text-xl font-bold mb-4 text-center">
            طريقة الحصول على رمز الدعوة
          </h2>
          <video
            controls
            className="w-full rounded-lg shadow-lg mb-6"
            src="/alasil.mp4"
          ></video>
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            <Link
              href="https://www.tiktok.com/t/ZMk6Ynf78/"
              className="text-white no-underline"
              target="black"
            >
              قدم طلب الانضمام
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TiktokInjouPage;
