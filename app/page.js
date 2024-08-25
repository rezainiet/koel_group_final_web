import Image from "next/image";
import Hero2 from "./components/Hero2";
import { GithubGlobe } from "./components/GithubGlobe";

export default function Home() {
  return (
    <main>
      <Hero2 />
      <GithubGlobe />
    </main>
  );
}
