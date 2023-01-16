import "swiper/scss";
import AOS from "aos";
import {
  Homesection,
  AboutUsSection,
  ServicesSection,
  IndustriesSection,
  TeamsSection,
  MembersSection,
  TransactionSection,
  ClientsSection,
} from "components";
import React from "react";

export default function index() {
  AOS.init();
  return (
    <>
      <Homesection />
      <AboutUsSection />
      <ServicesSection />
      <IndustriesSection />
      <TeamsSection />
      <MembersSection />
      <TransactionSection />
      <ClientsSection />
    </>
  );
}
