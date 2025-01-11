import React from "react";
import FeatureCard from "../components/FeatureCard";
import Link from "next/link";

const FeaturesSection = () => {
  const features = [
    {
      title: "خدمة الرد الآلي الذكي",
      description: [
        "تعمل بلا كلل على مدار الساعة، لتزويدك بالمعارف السليمة التي تدعم تطورك وتساعدك.",
        "تحسين تجربة الاستخدام وتحديد المحتوى الملائم الذي ينسجم مع رؤيتك، محققًا طموحاتك على الصعيدين الشخصي والتجاري.",
      ],
    },
    {
      title: "دورات تدريبية مميزة",
      description: [
        "تحديد نمط البث المباشر ودورات تدريبية لفنون صناعة التفاعلات، التي تعزز التأثير على المشاهدين وتجذب إعجابهم.",
        "تبسيط الشرح الوارد من أكاديمية تيك توك، وتقديم التعليم اللازم حول أهم السياسات والإرشادات المعمول بها.",
        "دورات تعليمية وتدريبية دورية لفنون إنتاج الفيديو القصير وضبط التصوير والمكان.",
      ],
    },
    {
      title: "فرص التطور والتواصل",
      description: [
        "خطة استراتيجية خاصة تُعد وفق توجيهات الخبراء والمستشارين، تتماشى مع إمكانياتك وتوجهاتك.",
        "الانضمام إلى شبكات من المبدعين بمختلف الاهتمامات، مع اجتماعات دورية لتبادل الخبرات والمستجدات.",
        "الدعم خلال الجولات الإدارية الرسمية للوكالة في البث المباشر لأصحاب البثوث ذات الجودة العالية.",
        "منافسات وتحديات رسمية بجوائز مالية أو عينية للفائزين.",
        "حجز ترويجي لصناع المحتوى المبدعين والملتزمين.",
        "تقديم طلبات فك حظر الحساب، مما يمنح صناع المحتوى فرصة أخرى للاستمرار في ذات الحساب.",
        "طاقم إداري مهني، مفعم بالحماسة، ذو خبرة وكفاءة للتعامل مع مراحل تطوركم في المنصة.",
        "دورات تدريبية حول كيفية استخدام الذكاء الاصطناعي في إنشاء المحتوى.",
      ],
    },
  ];

  const requirements = [
    "يتجاوز السن القانوني للعمل.",
    "يتواجد ضمن نطاق جغرافي داخل الشرق الأوسط وشمال أفريقيا.",
    "يمتلك حساب تيك توك، لم يسبق له التسجيل في وكالة أخرى.",
  ];

  return (
    <section className="py-12 bg-gray-100" dir="rtl">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          مزايا الانضمام لوكالة الأصيل
        </h2>
        <p className="text-center text-gray-600 mb-8">
          نهدف إلى تقديم فريق إبداعي ومحتوى هادف يساهم في التأثير الإيجابي على
          المجتمع، مع الالتزام بأخلاقياته وقيمه. نسعى لتقديم المعرفة والعلوم
          ودعم المبدعين والموهوبين بأسلوب مبتكر ومتميز، بما يعزز الإبداع
          والتنمية المجتمعية.
        </p>

        {/* بطاقة شروط الانضمام */}
        <div className=" flex justify-center mb-12">
          <FeatureCard
            title="شروط الانضمام"
            description={requirements}
            type="requirement"
          />
        </div>

        {/* بطاقات المزايا */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              type="feature"
            />
          ))}
        </div>

        {/* الأزرار */}
        <div className="flex items-center justify-center gap-6">
          <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors duration-300">
            قدم طلب الانضمام
          </button>
          <button className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors duration-300">
            <Link href="tiktokstep" className="text-white no-underline">
              تعرف على الخطوات
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
