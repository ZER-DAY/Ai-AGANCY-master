import React from "react";
import { Icons } from "@/components/ui/icons";
import Noise from "@/components/noise";
const benefits: {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}[] = [
  {
    title: "جودة عالية ",
    description: "استراتجيات تسويق شخصية وتجارية عالية الجودة",
    icon: "paintBrush",
  },
  {
    title: "تعزيز المحتوى الإيجابي",
    description:
      "نسعى لتطوير مهارات اصحاب الأفكار الريادية, ونعطي الأولوية لذوي الاحتياجات الخاصة.",
    icon: "shrub",
  },
  {
    title: "أسعارنا في متناول الجميع",
    description:
      "يمكن ان تحصل على خدماتنا مجاناً, في حال انضمامك لوكالتنا في تيك توك.",
    icon: "money",
  },
  {
    title: "بصمة مؤثرة",
    description:
      "نساعدك لبناء تواجدك الرقمي, وتسويق نفسك او أعمالك ومنتجاتك بكل احترافية.",
    icon: "fingerprint",
  },
];

const Benefits = () => {
  return (
    <div
      id="benefits"
      className="bg-black/95 text-[#BCBCBC] py-10 text-sm"
      dir="rtl"
    >
      <Noise />

      <h1 className="text-5xl font-bold text-center h2-style">وكالة الاصيل </h1>
      <p className="text-xl text-center">
        مميزات مذهلة تجعلك لا تحتاج إلى البحث عن أي جهة أخرى.
      </p>
      <div className="grid grid-cols-4 gap-10 mt-10 z-10 relative">
        {benefits.map((benefit, i) => (
          <Benefit
            key={i}
            title={benefit.title}
            description={benefit.description}
            icon={benefit.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Benefits;

const Benefit = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: keyof typeof Icons;
}) => {
  const Icon = Icons[icon];

  return (
    <div className="flex flex-col gap-3 items-center justify-center  rounded-lg p-6 ">
      <div className="w-16 h-16 bg-violet-400 text-white  rounded-lg flex items-center justify-center">
        <Icon />
      </div>
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-center">{description}</p>
    </div>
  );
};
