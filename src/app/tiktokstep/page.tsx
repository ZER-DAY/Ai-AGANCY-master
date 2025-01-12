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
- تخصيص يومين أسبوعيًا لعقد مقابلات مع صناع المحتوى الجدد ومتابعة المستخدمين الأوائل.

التنسيق:
- تنظيم الجدول بالتعاون بين قسم العلاقات العامة وفريق الخبراء.

فهم الخلفية:
- دراسة أهداف صانع المحتوى وأسباب اهتمامه بالشركة.

تقييم المهارات:
- قياس الإبداع، التواصل، التفاعل، وتنفيذ الأفكار.

تحديد المجالات المستهدفة:
- مناقشة التخصص (كوميديا، تعليم، ترفيه، إلخ).

تحديد الجمهور المستهدف:
- تحديد الجمهور وأسلوب المحتوى.
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
1. التحقق من مطابقة الحساب وشروط التعاقد:
   - مراجعة حساب تيك توك: التأكد من توافق الحساب مع معايير الوكالة.
   - التحقق من تواجد صانع المحتوى ضمن نطاق تصريح العمل في الشرق الأوسط وشمال إفريقيا.

2. التحقق من الشروط:
   - ضمان الاستقلالية وعدم ارتباطه بوكالة أخرى.
   - مناقشة بنود التعاقد: توضيح الحقوق والواجبات.

3. توثيق الانضمام:
   - إعداد رسالة تأكيد بانضمام صانع المحتوى والتزامه بالشروط.
   - التأكيد على عدم الانضمام لأي وكالة أخرى خلال فترة التعاقد.

4. توضيح الامتيازات:
   - دعم تقني وإبداعي.
   - تدريبات متخصصة.
   - فرص تسويق وإعلان.

5. توضيح الخطة العامة:
   - رسم مسار العمل: تقديم خطة عمل لتطوير صانع المحتوى.
   - إنتاج محتوى يعكس مهاراته الحالية مع تطوير تدريجي وإبداعي.
   - تخصيص مواعيد دورية لمتابعة الأداء وتقييم التقدم.
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
- تزويد صانع المحتوى بالمعرفة الأساسية اللازمة للانطلاق.
- التركيز على فهم القوانين والسياسات وأدوات الدعم المتاحة.

أهداف التعليم المعزز:
1. التعرف على سياسات تيك توك:
   - فهم قوانين الحظر والسياسات المتعلقة بالمحتوى.

2. التعرف على المنصات المساعدة:
   - تقديم معلومات حول الأدوات والمنصات الداعمة مثل برامج تحرير الفيديو وأدوات تحليل الأداء.

3. التعرف على المراحل القادمة وفريق العمل:
   - إطلاع صانع المحتوى على الخطوات التالية وفريق العمل الذي سيتعاون معه.

4. تسليم استراتيجية مخصصة:
   - إعداد استراتيجية تناسب قدراته وأهدافه الإبداعية.

طريقة التنفيذ:
1. التعليم عبر الفيديوهات المسجلة.
2. جلسة متابعة قصيرة لتقييم استيعاب المحتوى.
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
1. تحسين جودة التصوير الشخصي مع التركيز على الإضاءة والزوايا المناسبة.
2. تقديم النصائح لتحسين جودة الصوت الطبيعي أثناء التصوير.
3. تعزيز جاذبية الفيديو باستخدام تأثيرات مبتكرة.
4. اختيار الموسيقى المناسبة التي تعزز الرسالة والجو العام.

مراحل التدريب:
1. الحلقات المسجلة لتعلم المهارات الأساسية.
2. الحلقات التدريبية المباشرة مع استشارات فورية.
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
أهداف التدريب:
1. تحسين الإضاءة والخلفية والمظهر.
2. أفكار مبتكرة لتحفيز التفاعل (مثل المسابقات واستطلاعات الرأي).
3. تحسين الأداء الشخصي أثناء البث المباشر.

مراحل التدريب:
1. تحليل البيئة الحالية.
2. جلسات تدريبية عملية مع متابعة.
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
1. جلسات تدريبية مباشرة لتعلم الأدوات.
2. تسجيلات مسبقة توضح كيفية الاستخدام.
3. دراسة أدوات لتحرير الفيديو، إنتاج الصوت، وتحليل الأداء.

الهدف:
- تمكين صناع المحتوى من استخدام الذكاء الاصطناعي لتحسين جودة محتواهم وزيادة وصولهم للجمهور.
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
      {/* الزر في نهاية الصفحة */}
      <div style={styles.buttonContainer}>
        <button className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-500 transition-colors duration-300">
          <Link href="/tiktokstep" className="text-white no-underline">
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
