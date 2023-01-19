import { Footer, Header, Headertop } from "../components";
import "aos/dist/aos.css";
import "swiper/css/autoplay";
import "swiper/scss";

import { Outlet } from "react-router-dom";
import AOS from "aos";

export default function App() {
  AOS.init();
  return (
    <>
      <Headertop />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
