import Banner from "@/Components/HomePage/Banner";
import FeaturedCard from "@/Components/HomePage/FeaturedCard";
import Guide from "@/Components/HomePage/Guide";

export default function Home() {
  return (
    <div className="container  my-10 mx-auto space-y-10 ">
      <Banner></Banner>
      <FeaturedCard></FeaturedCard>
      <Guide></Guide>
    </div>
  );
}
