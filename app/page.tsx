import About from "@/components/about";
import InfiniteWords from "@/components/infinite";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-divider";
import Hand from "@/components/hand";
import Form from "@/components/form";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Hand />
      <SectionDivider />
      <About />
      <InfiniteWords />
      <Form />
    </main>
  );
}
