"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

// تحميل مكون Chrono ديناميكيًا مع تعطيل SSR
const Chrono = dynamic(() => import("react-chrono").then((mod) => mod.Chrono), {
  ssr: false,
});

// تعريف الواجهة لتحديد نوع العناصر في المصفوفة
interface TimelineItem {
  title: string;
  cardTitle: React.ReactNode;
  cardSubtitle: React.ReactNode;
  cardDetailedText: React.ReactNode;
}

const Timeline: React.FC = () => {
  // تحديد النوع TimelineItem[] للمصفوفة
  const items: TimelineItem[] = [
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
          شامل لاحتياجاته.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`
الجدولة:
- يتم تخصيص يومين أسبوعيًا لعقد مقابلات دورية مع صناع المحتوى الجدد.

التنسيق:
- يتم تنظيم جدول المقابلات بالتنسيق بين قسم استكشاف واستقطاب صناع المحتوى وفريق التدريب والتعليم.

فهم الخلفية:
- فهم أهداف صانع المحتوى وأسباب رغبته في العمل مع الشركة.

تقييم المهارات:
- تقييم مهارات صانع المحتوى الأساسية مثل الإبداع، التواصل، التفاعل مع الجمهور، والقدرة على تنفيذ الأفكار.

تحديد المجالات المستهدفة:
- مناقشة المجالات التي ينوي صانع المحتوى التخصص بها (كوميديا، تعليم، ترفيه، صحة، إلخ).

وضع ملامح الاستراتيجية:
- بناء استراتيجية شاملة تشمل الأهداف، الدعم المطلوب، والخط الزمني.
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
- مراجعة حساب تيك توك للتأكد من مطابقته لمعايير الوكالة من حيث جودة المحتوى.

مناقشة بنود التعاقد:
- تقديم شرح واضح لبنود التعاقد بما يشمل الحقوق والواجبات.

توثيق الانضمام:
- إعداد رسالة تأكيد بانضمام صانع المحتوى إلى الوكالة.
`}
        </div>
      ),
    },
    {
      title: "الخطوة الثالثة",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الثالثة: التعليم المعزز
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          تزويد صانع المحتوى بالمعرفة الأساسية وأدوات الدعم لفهم منصة تيك توك
          بشكل احترافي.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`
وصف المرحلة:
- تزويد صانع المحتوى بالمعرفة الأساسية للانطلاق في صناعة المحتوى على منصة تيك توك بشكل احترافي.

أهداف التعليم المعزز:
- التعرف على سياسات تيك توك لفهم قوانين الحظر والسياسات المتعلقة بالمحتوى.
- تقديم معلومات حول الأدوات والمنصات المساعدة مثل برامج تحرير الفيديو وأدوات تحليل الأداء.
`}
        </div>
      ),
    },
    {
      title: "الخطوة الرابعة",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الرابعة: التدريب لصناعة الفيديو
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          تمكين صناع المحتوى من إنتاج فيديوهات احترافية تجمع بين الإبداع
          والجاذبية.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`
أهداف التدريب:
- تمكين صناع المحتوى من إنتاج فيديوهات احترافية تشمل:
  - تصوير الذات.
  - تحسين جودة الصوت.
  - إضافة المؤثرات المرئية والصوتية.
  - استخدام الموسيقى المناسبة.

مراحل التدريب:
- المرحلة الأولى: الحلقات المسجلة.
- المرحلة الثانية: الحلقات التدريبية المباشرة.
`}
        </div>
      ),
    },
    {
      title: "الخطوة الخامسة",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة الخامسة: التدريب لصناعة البث المباشر
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          تمكين صانع المحتوى من تقديم بث مباشر احترافي يعزز التفاعل والجاذبية.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`
ضبط معدات البث المباشر:
- التأكد من تجهيز معدات البث بجودة عالية مثل حامل الهاتف، الكاميرا، والإضاءة.

تطوير المهارات المطلوبة للبث المباشر:
- تحسين الإضاءة.
- تقديم نصائح حول تحسين التفاعل مع الجمهور.
`}
        </div>
      ),
    },
    {
      title: "الخطوة السادسة",
      cardTitle: (
        <div style={{ textAlign: "right", direction: "rtl" }}>
          المرحلة السادسة: التدريب لاستخدام أدوات الذكاء الاصطناعي
        </div>
      ),
      cardSubtitle: (
        <div style={styles.subtitle}>
          تعزيز إبداع صناع المحتوى باستخدام الذكاء الاصطناعي لتحسين جودة المحتوى
          وزيادة التفاعل.
        </div>
      ),
      cardDetailedText: (
        <div style={styles.detailedText}>
          {`
تفاصيل التدريب:
- تقديم ورش عمل تدريبية على أدوات الذكاء الاصطناعي.
- تعليم استخدام أدوات تحرير الفيديو، إنتاج الصور، والصوت.
- تحليل الأداء باستخدام تقنيات الذكاء الاصطناعي.
`}
        </div>
      ),
    },
  ];

  useEffect(() => {
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
