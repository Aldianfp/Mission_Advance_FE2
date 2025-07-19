import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import Hero from "../components/molecules/Hero";
import Collection from "../components/organisems/Collection";
import CTA from "../components/molecules/CTA";

export default function Beranda() {
  return (
    <>
      <HomeLayouts>
        <Hero />
        <Collection />
        <CTA />
      </HomeLayouts>
    </>
  );
}
