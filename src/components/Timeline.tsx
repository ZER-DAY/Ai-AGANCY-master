"use client";

import React, { useEffect } from "react";
import { Chrono } from "react-chrono";

const Timeline = () => {
  // بيانات الخط الزمني
  const items = [
    {
      title: "2023 - Present",
      cardTitle: "Software Engineer",
      cardSubtitle: "Tech Corp",
      cardDetailedText:
        "Developed scalable web applications using React and Node.js.",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/software-engineer.jpg",
        },
      },
    },
    {
      title: "2019 - 2023",
      cardTitle: "Bachelor of Computer Science",
      cardSubtitle: "XYZ University",
      cardDetailedText: "Graduated with honors in Computer Science.",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/graduation.jpg",
        },
      },
    },
    {
      title: "2018 - 2019",
      cardTitle: "Frontend Intern",
      cardSubtitle: "Web Solutions",
      cardDetailedText: "Worked on UI/UX design and frontend development.",
      media: {
        type: "IMAGE",
        source: {
          url: "/images/frontend-intern.jpg",
        },
      },
    },
  ];

  useEffect(() => {
    // إزالة الرأس يدويًا من DOM
    const toolbar = document.querySelector(
      ".ToolbarWrapper-sc-exupb5-0.hxLLRt"
    );
    if (toolbar) {
      toolbar.remove();
    }
  }, []);

  return (
    <div style={{ width: "100%" }}>
      <Chrono
        items={items}
        mode="VERTICAL_ALTERNATING" // الوضع الرأسي
        theme={{
          primary: "#4F46E5",
          secondary: "#E11D48",
          cardBgColor: "#1E293B",
          cardForeColor: "#fff",
        }}
        cardHeight={300} // اجعل البطاقات أكبر لضمان ملاءمة المحتوى
      />
    </div>
  );
};

export default Timeline;
