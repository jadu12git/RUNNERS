import SoundWaveBackground from "@/components/SoundWaveBackground";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import EventsList from "../components/EventsList";

export default function Home() {
  return (
    <>
      <SoundWaveBackground />
      <Navbar />
      <Hero />
      <EventsList />
    </>
  );
}
