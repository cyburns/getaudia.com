import About from "@/components/about";
import InfiniteWords from "@/components/infinite";
import Intro from "@/components/intro";
import { Reviews } from "@/components/reviews";
import SectionDivider from "@/components/section-divider";
import Hand from "@/components/hand";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Hand />
      <SectionDivider />
      <About />
      <InfiniteWords />
      <Reviews />
    </main>
  );
}
