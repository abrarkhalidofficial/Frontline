import "swiper/scss";

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
