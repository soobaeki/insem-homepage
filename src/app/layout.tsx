import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 1. 기존 Geist 폰트 변수 설정 유지 (Tailwind v4와 자연스럽게 연결됨)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. B2B 반도체 유통에 맞는 메타데이터로 변경
export const metadata: Metadata = {
  title: "(주)인셈 | 글로벌 반도체 및 전자부품 유통",
  description:
    "Insem - Semiconductor & Electronic Components Distributor. 정품 보장 및 신속한 RFQ 대응",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // lang="ko"로 변경하여 국내 SEO 최적화
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 상단 공통 헤더 */}
        <Header />

        {/* 메인 콘텐츠 영역 (남은 높이를 모두 채우도록 flex-grow 부여) */}
        <main className="grow">{children}</main>

        {/* 하단 공통 푸터 */}
        <Footer />
      </body>
    </html>
  );
}
