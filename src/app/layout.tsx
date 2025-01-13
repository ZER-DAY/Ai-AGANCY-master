import { Cairo } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import clsx from "clsx";
import { Footer } from "@/sections/Footer";
import { Header } from "@/sections/Header";

// تحميل خط Cairo مع دعم الحروف العربية واللاتينية
const cairo = Cairo({ subsets: ["latin", "arabic"] });

export const metadata: Metadata = {
  title: "شركة الاصيل ",
  description:
    "وكالة الأصيل للتسويق والاستثمار هي شركة عُمانية متخصصة في تقديم خدمات التسويق وإدارة المحتوى الرقمي، تعمل كشريك رسمي لشركة تيك توك (TikTok Pte. Ltd) في منطقة الشرق الأوسط وشمال إفريقيا. تختص الوكالة في إدارة صُنّاع المحتوى على منصة تيك توك، حيث تقدم الدعم الفني والإداري لهم لضمان الالتزام بمعايير المنصة وتعزيز إنتاجيتهم وأدائهم. تعمل الوكالة كحلقة وصل بين تيك توك وصناع المحتوى، وتهدف إلى بناء بيئة إبداعية تنافسية تساعد على زيادة جودة البث المباشر والمحتوى التفاعلي، بما يساهم في تعزيز تجربة المستخدمين على المنصة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" className="relative">
      {" "}
      {/* تحديد اللغة العربية */}
      <body className={clsx(cairo.className, "antialiased bg-[#EAEEFE]")}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
