"use client";

import { useState } from "react";
import BootSequence from "@/components/BootSequence";
import SmoothScroll from "@/components/SmoothScroll";
import ParallaxNebulae from "@/components/ParallaxNebulae";
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
        <SmoothScroll>
          {/* Deep space layer — fixed behind all content */}
          <div className="space-stars" />
          {/* Parallax nebulae — subtle depth on scroll */}
          <ParallaxNebulae />

          <div style={{ position: "relative", zIndex: 1, opacity: 1, transition: "opacity 0.5s ease-in", overflowX: "hidden" }}>
            <div className="ambient-glow-left" />
            <div className="ambient-glow-right" />
            <Navbar />
            <main className="pb-24 md:pb-0">
              <Hero bootDone={bootDone} />
              <ProofStrip />
              <Projects />
              <Capabilities />
              <About />
              <Direction />
              <QueryInterface />
              <Contact />
            </main>
            <Footer />
          </div>
        </SmoothScroll>
      )}
    </>
  );
}
