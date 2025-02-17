import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <div id="hero-map">
        <Hero />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
      <div id="guide">
        <Guide />
      </div>
      <div id="features">
        <Features />
      </div>
    </>
  );
}
