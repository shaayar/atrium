import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Process from "@/components/Process";
import Philosophy from "@/components/Philosophy";
import Waitlist from "@/components/Waitlist";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-white">
      <Preloader />
      
      {/* Global Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 opacity-[0.03] bg-grain bg-repeat mix-blend-overlay"></div>
      
      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        
        {/* Spatial Line Separator */}
        <div className="w-full px-10 max-w-7xl mx-auto opacity-20">
            <div className="h-px w-full bg-linear-to-r from-transparent via-white to-transparent" />
        </div>

        <Manifesto />
        <Process />
        <Philosophy />
        <Waitlist />
      </main>

      <Footer />
    </div>
  );
}
