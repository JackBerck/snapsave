import React from "react";
import Layout from "../layouts";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Tutorial from "../components/Tutorial";

export default function Homepage() {
  return (
    <Layout>
      <Hero title={"Download videos, audios, and photos easily"} />
      <AboutUs />
      <Tutorial />
    </Layout>
  );
}
