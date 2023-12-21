import Collection from "@/components/Collection";
import HeroBanner from "@/components/HeroBanner";
import HomeProducts from "@/components/HomeProducts";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroBanner />
      <Collection />
      <span className="text-2xl font-bold text-center mt-10 mb-10">
        Recent Products List
      </span>
      <HomeProducts />
    </div>
  );
}
