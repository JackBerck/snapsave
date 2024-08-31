import React from "react";
import Layout from "../layouts";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import Tutorial from "../components/Tutorial";

export default function Homepage() {
  return (
    <Layout>
      <Hero title={"Download video, audio, dan foto dengan mudah"} />
      <AboutUs />
      <Tutorial />
    </Layout>
  );
}
