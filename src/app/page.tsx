import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Curriculum from "@/components/Curriculum";
import Certification from "@/components/Certification";
import Testimonials from "@/components/Testimonials";
import Enrollment from "@/components/Enrollment";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors duration-500">
      <Navbar />
      <Hero />

      <div className="section-divider" />

      <About />

      <div className="section-divider" />

      <Curriculum />

      <div className="section-divider" />

      <Certification />

      <div className="section-divider" />

      <Testimonials />

      <div className="section-divider" />

      <Enrollment />

      <Footer />
    </main>
  );
}

