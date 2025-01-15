"use client";
import React, { useState } from "react";

interface FeatureCardProps {
  title: string;
  description: string[];
  type?: string; // لتحديد نوع البطاقة
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  type = "feature",
}) => {
  const [isExpanded, setIsExpanded] = useState(false); // حالة التحكم في توسيع النص
  const maxLines = 3; // عدد الأسطر المعروضة قبل النقر على "رؤية المزيد"

  // تحديد أنماط البطاقة بناءً على النوع
  const listStyle = type === "feature" ? "list-disc" : "list-decimal";
  const hoverColor =
    type === "feature" ? "hover:bg-blue-50" : "hover:bg-green-50";

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 ${hoverColor} hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out text-right min-h-[300px] flex flex-col`}
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-4 group-hover:text-blue-800 transition-colors duration-300">
        {title}
      </h3>
      <ul
        className={`text-gray-700 leading-relaxed ${listStyle} list-inside space-y-2 flex-grow`}
      >
        {description
          .slice(0, isExpanded ? description.length : maxLines)
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      {description.length > maxLines && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-blue-500 mt-2 hover:underline focus:outline-none self-end"
        >
          {isExpanded ? "رؤية أقل" : "رؤية المزيد"}
        </button>
      )}
    </div>
  );
};

export default FeatureCard;
