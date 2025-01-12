// app/components/FeatureCard.tsx
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string[];
  type?: "feature" | "requirement";

  // لتحديد نوع البطاقة
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  type = "feature",
}) => {
  const listStyle = type === "feature" ? "list-disc" : "list-decimal";
  const hoverColor =
    type === "feature" ? "hover:bg-blue-50" : "hover:bg-green-50";

  return (
    <div
      className={`bg-white shadow-md rounded-lg p-6 border border-gray-200 ${hoverColor} hover:shadow-2xl hover:scale-105 transition-all duration-300 ease-out text-right`}
    >
      <h3 className="text-xl font-semibold text-blue-600 mb-4 group-hover:text-blue-800 transition-colors duration-300">
        {title}
      </h3>
      <ul
        className={`text-gray-700 leading-relaxed ${listStyle} list-inside space-y-2`}
      >
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeatureCard;
