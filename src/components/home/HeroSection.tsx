import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-b from-blue-900 via-slate-900 to-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* 서브 헤딩 */}
        <span className="inline-block rounded-full bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400 border border-blue-500/20 mb-6">
          글로벌 반도체 & 전자부품 정품 공급
        </span>

        {/* 메인 타이틀 */}
        <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-balance">
          필요한 반도체 부품, <br className="hidden sm:inline" />
          <span className="text-blue-400">가장 빠르고 정확하게</span> 수급하세요
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base text-slate-300 sm:text-lg">
          (주)인셈은 신뢰할 수 있는 글로벌 네트워크를 통해 최적의 단가와 신속한
          납기를 약속드립니다.
        </p>

        {/* 부품 번호 빠른 검색 폼 */}
        <div className="mx-auto mt-10 max-w-2xl">
          <form
            action="/products"
            method="GET"
            className="flex flex-col sm:flex-row gap-2"
          >
            <input
              type="text"
              name="query"
              placeholder="부품 번호(Part Number)를 입력하세요 (예: STM32F103, MAX232)"
              className="w-full rounded-lg bg-white px-5 py-4 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
            />
            <button
              type="submit"
              className="whitespace-nowrap rounded-lg bg-blue-600 px-8 py-4 text-sm sm:text-base font-semibold text-white transition hover:bg-blue-500 active:bg-blue-700"
            >
              부품 검색
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-400 text-left sm:text-center">
            💡 단종품(EOL), 수급 난이도가 높은 부품도 일괄 문의가 가능합니다.
          </p>
        </div>

        {/* 문의하기 페이지(contact) 연결 */}
        <div className="mt-10 flex items-center justify-center gap-4 text-sm">
          <Link
            href="/contact"
            className="font-medium text-blue-400 hover:text-blue-300 underline underline-offset-4"
          >
            견적 문의(Contact) 바로가기 &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
