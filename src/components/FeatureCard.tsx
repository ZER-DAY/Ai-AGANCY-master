// app/components/FeatureCard.tsx
import React from "react";

interface FeatureCardProps {
  title: string;
  description: string[];
  type?: "feature" | "requirement"; // لتحديد نوع البطاقة
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  type = "feature",
}) => {
  const listStyle = type === "feature" ? "list-disc" : "list-decimal";

  return (
    <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300 text-right">
      <h3 className="text-xl font-semibold text-blue-600 mb-4">{title}</h3>
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
