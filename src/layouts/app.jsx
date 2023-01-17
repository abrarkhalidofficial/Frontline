import { Footer, Header, Headertop } from "../components";
import "aos/dist/aos.css";
import "swiper/css/autoplay";

import { Outlet } from "react-router-dom";

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
