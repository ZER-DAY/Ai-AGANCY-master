"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// تحميل مكون Chrono ديناميكيًا مع تعطيل SSR
const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

const Timeline: React.FC = () => {
  const items = [
    {
      title: "الخطوة الأولى",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الأولى: المقابلة
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          الهدف: توفير بداية قوية ومنظمة لصانع المحتوى مع الشركة من خلال فهم
          شامل لاحتياجاته، قدراته، وكيفية دعمه لتحقيق النجاح المشترك.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`
الجدولة:
- يتم تخصيص يومين أسبوعيًا لعقد مقابلات دورية مع صناع المحتوى الجدد ومتابعة مستمرة لتطوير الأقدم.
- ... (تم تقليص النص لتجنب الإطالة)
          `}
        </div>
      ),
    },
    {
      title: "الخطوة الثانية",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الثانية: التعاقد
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          الهدف: ضمان بداية سلسة لصانع المحتوى مع الوكالة من خلال تحديد التوقعات
          المتبادلة.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`
التحقق من مطابقة الحساب وشروط التعاقد:
- مراجعة حساب تيك توك للتأكد من مطابقته لمعايير الوكالة.
          `}
        </div>
      ),
    },
  ];

  // إضافة وظيفة لإصلاح مشكلة التمرير
  useEffect(() => {
    // التأكد من أن الصفحة قابلة للتمرير بشكل كامل
    document.body.style.overflow = "auto";

    // مراقبة إضافية لإزالة أي عناصر قد تعيق التمرير
    const observer = new MutationObserver(() => {
      const toolbar = document.querySelector(".ToolbarWrapper-sc-exupb5-0");
      if (toolbar) {
        toolbar.remove();
        observer.disconnect();
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div dir="rtl" style={styles.container}>
      <h1 style={styles.title}>خطوات مراحل تطور صانع المحتوى</h1>
      <div style={styles.chronoContainer}>
        <Chrono
          items={items}
          mode="VERTICAL"
          theme={{
            primary: "#4F46E5",
            secondary: "#FFD700",
            cardBgColor: "rgba(31, 41, 55, 0.9)",
            cardForeColor: "#fff",
            titleColorActive: "#FFD700",
          }}
          cardHeight={300}
          scrollable
        />
      </div>
      <div style={styles.buttonContainer}>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 transition-colors duration-300">
          <Link href="/tiktokjoin" className="text-white no-underline">
            قدم طلب الانضمام
          </Link>
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: "linear-gradient(to bottom right, #111827, #1F2937)",
    color: "#FFFFFF",
    padding: "40px 0",
    minHeight: "100vh",
    width: "100%",
    overflow: "hidden", // ضمان عدم ظهور التمرير الأفقي
  },
  title: {
    textAlign: "center" as const,
    fontSize: "2.5rem",
    fontWeight: "bold" as const,
    marginBottom: "20px",
  },
  chronoContainer: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 16px",
  },
  subtitle: {
    textAlign: "right" as const,
    direction: "rtl" as const,
    color: "#FFD700",
    fontSize: "1.2rem",
    lineHeight: "1.6",
  },
  detailedText: {
    whiteSpace: "pre-line" as const,
    textAlign: "right" as const,
    direction: "rtl" as const,
    color: "#E5E7EB",
    fontSize: "1rem",
    lineHeight: "1.8",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
};

export default Timeline;
