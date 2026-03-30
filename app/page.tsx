"use client";

import { useState } from "react";
import BootSequence from "@/components/BootSequence";
import Scanline from "@/components/Scanline";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofStrip from "@/components/ProofStrip";
import Projects from "@/components/Projects";
import Capabilities from "@/components/Capabilities";
import QueryInterface from "@/components/QueryInterface";
import About from "@/components/About";
import Direction from "@/components/Direction";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [bootDone, setBootDone] = useState(false);

  return (
    <>
      {!bootDone && <BootSequence onComplete={() => setBootDone(true)} />}
      {bootDone && (
        <div style={{ opacity: 1, transition: "opacity 0.5s ease-in" }}>
          <Scanline />
          <Navbar />
          <main>
            <Hero bootDone={bootDone} />
            <ProofStrip />
            <Projects />
            <Capabilities />
            <QueryInterface />
            <About />
            <Direction />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  );
}
