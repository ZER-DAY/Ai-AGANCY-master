// pages/about.tsx

import Image from "next/image";

export default function About() {
  return (
    <div dir="rtl" className="bg-[#1A1A1A] py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-600">
            <span className="italic">من نحن</span>
          </h1>
        </div>

        {/* الشبكة الرئيسية */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* العمود الأول */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                في{" "}
                <b className="italic text-blue-600">
                  &quot;الأصيل للتسويق والاستثمار&quot;
                </b>
                ، نسعى لأن نكون روادًا في تقديم خدمات تسويقية مبتكرة تواكب
                التغيرات السريعة في العالم الرقمي، ونؤمن بأن الإبداع والشراكة
                هما مفتاح النجاح في هذا المجال.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl text-center font-medium text-gray-800">
                من نحن؟
              </h3>
              <p className="text-gray-600">
                &quot;وكالة الأصيل للتسويق والاستثمار&quot; هي شركة عمانية
                متخصصة في تقديم حلول التسويق الرقمي وإدارة المحتوى، تأسست برؤية
                طموحة لتكون شريكًا موثوقًا للشركات والمؤسسات في منطقة الشرق
                الأوسط وشمال إفريقيا. نعمل على تمكين العلامات التجارية وصنّاع
                المحتوى من تحقيق أهدافهم عبر استراتيجيات مبتكرة وخدمات عالية
                الجودة.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                بفخر، نحن الشريك الرسمي لشركة تيك توك (TikTok Pte. Ltd) في منطقة
                الشرق الأوسط وشمال إفريقيا. من خلال هذه الشراكة، نلعب دور الوسيط
                بين منصة تيك توك وصنّاع المحتوى، حيث ندعمهم تقنيًا وإداريًا
                للالتزام بمعايير المنصة وتحقيق أعلى مستويات الإنتاجية.
              </p>
            </div>
          </div>

          {/* العمود الأوسط */}
          <div className="text-center">
            {/* النص العلوي */}
            <div className="bg-white p-6 rounded shadow mb-6">
              <h3 className="text-xl font-medium">ما الذي نقدمه؟</h3>
              <p className="text-gray-600">
                إدارة صُنّاع المحتوى: نعمل مع المبدعين على منصة تيك توك
                لمساعدتهم على تحسين أدائهم وتعزيز إنتاجيتهم من خلال تقديم الدعم
                الفني والإرشادات اللازمة. تعزيز تجربة المستخدم: نركز على بناء
                بيئة إبداعية تنافسية تساعد على رفع جودة المحتوى التفاعلي والبث
                المباشر على المنصة. حلقة وصل مبتكرة: نسعى لتقريب المسافات بين
                تيك توك وصنّاع المحتوى من خلال تعزيز التواصل وتقديم خدمات
                متخصصة.
              </p>
            </div>

            {/* صورة الموظف */}
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto">
                <Image
                  src="/haje.png" // استبدل الصورة هنا
                  alt="Белоус Алексей"
                  layout="fill"
                  className="rounded-full object-cover"
                />
              </div>
              <div className="text-center mt-4">
                <h4 className="text-lg font-bold"> </h4>
                <p className="text-lg font-bold text-white">
                  {" "}
                  tawfeek aljalees{" "}
                </p>
              </div>
            </div>

            {/* النص السفلي */}
            <div className="bg-white p-6 rounded shadow mt-6">
              <h3 className="text-xl font-medium">رؤيتنا المستقبلية</h3>
              <p className="text-gray-600">
                هدفنا هو بناء مجتمع رقمي متكامل ومتميز يدعم الإبداع ويرتقي
                بتجربة المستخدمين على مختلف المنصات الرقمية. من خلال خدماتنا
                المتميزة وشراكاتنا الاستراتيجية، نطمح لأن نكون الخيار الأول لكل
                من يبحث عن الجودة والابتكار.
              </p>
            </div>
          </div>

          {/* العمود الثالث */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                في &quot;الأصيل للتسويق والاستثمار&quot;، نؤمن بأن الإبداع
                والشراكة هما مفتاح النجاح في عالم التسويق الرقمي. نعمل على تمكين
                العلامات التجارية وصنّاع المحتوى من تحقيق أهدافهم عبر
                استراتيجيات مبتكرة وخدمات عالية الجودة.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="text-xl font-medium text-right">
                شراكتنا مع تيك توك
              </h3>
              <p className="text-gray-600 text-right">
                نحن الشريك الرسمي لشركة تيك توك (TikTok Pte. Ltd) في منطقة الشرق
                الأوسط وشمال إفريقيا. من خلال هذه الشراكة، نلعب دور الوسيط بين
                منصة تيك توك وصنّاع المحتوى، حيث ندعمهم تقنيًا وإداريًا للالتزام
                بمعايير المنصة وتحقيق أعلى مستويات الإنتاجية.
              </p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <p className="text-gray-600">
                هدفنا هو بناء مجتمع رقمي متكامل ومتميز يدعم الإبداع ويرتقي
                بتجربة المستخدمين على مختلف المنصات الرقمية. من خلال خدماتنا
                المتميزة وشراكاتنا الاستراتيجية، نطمح لأن نكون الخيار الأول لكل
                من يبحث عن الجودة والابتكار.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
