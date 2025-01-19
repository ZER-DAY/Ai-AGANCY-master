// pages/index.tsx
export default function VideoPresentation() {
  return (
    <section
      dir="rtl"
      className=" bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0A0A0A,#1E1E1E_100%)] overflow-x-clip"
    >
      <div className="max-w-7xl mx-auto bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0A0A0A,#1E1E1E_100%)] overflow-x-clip rounded-xl overflow-hidden flex flex-col md:flex-row">
        {/* النصوص */}
        <div className="flex-1 md:basis-1/3 p-8 my-8 space-y-4 leading-relaxed text-right">
          <p className="text-gray-200 text-2xl">
            وكالة الاصيل تقدم خدمات متميزة لصناع المحتوى، حيث نوفر لك الأدوات
            والموارد التي تحتاجها لإنشاء محتوى رائع وجذاب. سواء كنت تبحث عن
            تحسين جودة الفيديوهات الخاصة بك أو تحتاج إلى استراتيجيات تسويقية
            فعالة، نحن هنا لمساعدتك في كل خطوة على الطريق.
          </p>
        </div>

        {/* الفيديو */}
        <div className=" w-full h-full flex-1 md:basis-5/6 p-8 flex justify-center items-center  bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#0A0A0A,#1E1E1E_100%)] overflow-x-clip">
          <div className="relative w-full aspect-video">
            <iframe
              className="w-full h-full rounded-xl shadow-lg"
              src=""
              title="Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
