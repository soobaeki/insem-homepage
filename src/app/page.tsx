import HeroSection from "@/components/home/HeroSection";
import VendorGrid from "@/components/home/VendorGrid";

export default function Home() {
  return (
    <div className="flex flex-col gap-12 pb-20">
      <HeroSection />
      <VendorGrid />
    </div>
  );
}
