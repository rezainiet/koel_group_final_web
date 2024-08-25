import Image from "next/image";
import Hero2 from "./components/Hero2";
import { GithubGlobe } from "./components/GithubGlobe";
import BodyShape from "./components/BodyShape";
import OurBusiness from "./components/OurBusiness";

export default function Home() {
  return (
    <main>
      <Hero2 />
      <GithubGlobe />
      <OurBusiness />
      <BodyShape />
    </main>
  );
}
