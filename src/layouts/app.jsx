import { Footer, Header, Headertop } from "../components";
import "aos/dist/aos.css";
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
