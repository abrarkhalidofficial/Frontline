import "aos/dist/aos.css";
import "swiper/css/autoplay";
import "swiper/scss";

import { Footer, Header, Headertop } from "../components";

import AOS from "aos";
import { Outlet } from "react-router-dom";

AOS.init();

export default function App() {
  return (
    <>
      <Headertop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
