import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* 1. 로고 영역 */}
        <Link
          href="/"
          className="flex items-center gap-2 text-2xl font-bold tracking-tight text-blue-900 dark:text-blue-400"
        >
          <span>INSEM</span>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
            (주)인셈
          </span>
        </Link>

        {/* 2. 메인 네비게이션 */}
        <nav className="hidden items-center space-x-8 text-sm font-medium md:flex">
          <Link
            href="/products"
            className="text-slate-600 transition hover:text-blue-900 dark:text-slate-300 dark:hover:text-blue-400"
          >
            부품 검색
          </Link>
          <Link
            href="/manufacturers"
            className="text-slate-600 transition hover:text-blue-900 dark:text-slate-300 dark:hover:text-blue-400"
          >
            라인카드 (제조사)
          </Link>
          <Link
            href="/about"
            className="text-slate-600 transition hover:text-blue-900 dark:text-slate-300 dark:hover:text-blue-400"
          >
            회사 소개
          </Link>
          <Link
            href="/rfq"
            className="text-slate-600 transition hover:text-blue-900 dark:text-slate-300 dark:hover:text-blue-400"
          >
            견적 문의
          </Link>
        </nav>

        {/* 3. 우측 액션 버튼 (빠른 견적 요청) */}
        <div className="flex items-center gap-4">
          <Link
            href="/rfq"
            className="rounded-lg bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500"
          >
            빠른 견적 요청
          </Link>
        </div>
      </div>
    </header>
  );
}
