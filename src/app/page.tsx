import { About } from "@/components/sections/about";
import { Closing } from "@/components/sections/closing";
import { Hero } from "@/components/sections/hero";
import { Work } from "@/components/sections/work";

export default function Home() {
  return (
    <>
      <Hero />
      <Work />
      <About />
      <Closing />
    </>
  );
}
