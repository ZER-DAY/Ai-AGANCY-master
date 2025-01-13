"use client";

import React, { useState } from "react";

const TiktokInjouPage = () => {
  const [formData, setFormData] = useState({
    invitationCode: "",
    username: "",
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
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl p-8">
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

      {/* Additional Information */}
      <div className="mt-8 text-center">
        <h2 className="text-3xl text-pink-700 font-bold mb-4">
          طريقة الحصول على رمز الدعوة
        </h2>
        <video
          controls
          className="w-full max-w-3xl rounded-lg shadow-lg"
          src="https://video.wixstatic.com/video/1e00fe_f703f3a2a0db4f92a9e58e7f3982fd2a/360p/mp4/file.mp4"
        ></video>
      </div>
    </section>
  );
};

export default TiktokInjouPage;
