import {
  AboutUsSection,
  ClientsSection,
  Homesection,
  IndustriesSection,
  MembersSection,
  ServicesSection,
  TeamsSection,
  TransactionSection,
} from "components";

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
