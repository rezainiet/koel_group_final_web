import Image from "next/image";
import Hero2 from "./components/Hero2";
import { GithubGlobe } from "./components/GithubGlobe";
import BodyShape from "./components/BodyShape";
import OurBusiness from "./components/OurBusiness";
import Sustainability from "./components/Sustainability";
import ProductGrid from "./components/ProductGrid";
import OurSpeciality from "./components/OurSpeciality";
import GloriousHistory from "./components/GloriousHistory";

export default function Home() {
  return (
    <main>
      <Hero2 />
      <GithubGlobe />
      <OurBusiness />
      <Sustainability />
      <OurSpeciality />
      <GloriousHistory />
      <ProductGrid />
      {/* <BodyShape /> */}
      {/* <Statistics /> */}
    </main>
  );
}
