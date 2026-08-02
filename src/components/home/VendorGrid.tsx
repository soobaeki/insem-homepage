// 주요 협력사 샘플 데이터
const VENDORS = [
  { name: "STMicroelectronics", logo: "/images/vendors/st.svg" },
  { name: "Nordic Semiconductor", logo: "/images/vendors/nordic.svg" },
  { name: "Texas Instruments", logo: "/images/vendors/ti.svg" },
  { name: "Microchip", logo: "/images/vendors/microchip.svg" },
];

export default function VendorGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          주요 취급 라인카드 (Vendors)
        </h2>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          글로벌 공식 대리점 및 신뢰받는 채널을 통해 정품 부품을 공급합니다.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
        {VENDORS.map((vendor) => (
          <div
            key={vendor.name}
            className="flex items-center justify-center p-6 rounded-xl border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900 hover:border-blue-500 transition"
          >
            {/* 이미지가 준비되기 전 임시 텍스트 표기 or Image 컴포넌트 */}
            <span className="font-semibold text-slate-700 dark:text-slate-300">
              {vendor.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
