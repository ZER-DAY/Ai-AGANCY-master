"use client";

import React, { useState } from "react";

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
    <section className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      {/* Container for Card and Video */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start w-full max-w-7xl">
        {/* Card Section */}
        <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-8 mb-8 lg:mb-0">
          <h2 className="text-purple-700 text-2xl font-semibold text-center mb-6">
            تقديم طلب الإنضمام
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                @ ادخل معرف الحساب&quot;username&quot;
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                placeholder=" "
                required
              />
            </div>

            {/* Invitation Code Field */}
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
                placeholder=" "
                required
              />
            </div>

            {/* Agent Name Field */}
            <div>
              <label
                htmlFor="agentName"
                className="block text-sm font-medium text-gray-700"
              >
                ادخل اسم الوكيل الشرعي
              </label>
              <input
                type="text"
                name="agentName"
                id="agentName"
                value={formData.agentName}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                placeholder=" "
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="inline-flex justify-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
              >
                إرسال الطلب
              </button>
            </div>
          </form>

          {/* Confirmation Message */}
          <p className="text-center text-sm text-gray-700 mt-6">
            تم إستلام طلبكم للإنضمام إلى وكالة فنون ميديا
          </p>
        </div>

        {/* Video Section */}
        <div className="lg:ml-8">
          <h2 className="text-3xl text-pink-700 font-bold mb-4 text-center">
            طريقة الحصول على رمز الدعوة
          </h2>
          <video
            controls
            className="w-full max-w-md rounded-lg shadow-lg"
            src="https://video.wixstatic.com/video/1e00fe_f703f3a2a0db4f92a9e58e7f3982fd2a/360p/mp4/file.mp4"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default TiktokInjouPage;
