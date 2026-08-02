import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-slate-900 py-12 text-slate-400 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 1. 회사 소개 정보 */}
          <div className="space-y-3 md:col-span-2">
            <h3 className="text-xl font-bold tracking-tight text-white">
              (주)인셈{" "}
              <span className="text-sm font-normal text-slate-400">
                INSEM Co., Ltd.
              </span>
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              신뢰를 바탕으로 한 글로벌 반도체 및 전자부품 유통 전문 기업입니다.
              정품 보장, 신속한 RFQ 대응 및 최적의 수급 솔루션을 제공합니다.
            </p>
          </div>

          {/* 2. 빠른 링크 */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              주요 서비스
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/products" className="transition hover:text-white">
                  부품 검색
                </Link>
              </li>
              <li>
                <Link
                  href="/manufacturers"
                  className="transition hover:text-white"
                >
                  라인카드 (제조사)
                </Link>
              </li>
              <li>
                <Link href="/rfq" className="transition hover:text-white">
                  견적 문의 (RFQ)
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition hover:text-white">
                  회사 소개
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. 연락처 & 고객지원 */}
          <div className="space-y-3 text-sm">
            <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider">
              고객지원
            </h4>
            <div className="space-y-1">
              <p>
                <strong className="text-slate-300">TEL:</strong> 02-XXX-XXXX
              </p>
              <p>
                <strong className="text-slate-300">Email:</strong>{" "}
                sales@insem.co.kr
              </p>
              <p>
                <strong className="text-slate-300">운영시간:</strong> 평일 09:00
                ~ 18:00
              </p>
            </div>
          </div>
        </div>

        {/* 하단 구분선 및 사업자 정보 / Copyright */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-xs text-slate-500 flex flex-col md:flex-row justify-between gap-4">
          <div className="space-y-1">
            <p>사업자등록번호: XXX-XX-XXXXX | 대표자: OOO</p>
            <p>주소: 서울특별시 ... (실제 사업장 주소)</p>
          </div>
          <div className="self-start md:self-end">
            <p>
              &copy; {new Date().getFullYear()} INSEM Co., Ltd. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
