import {
  PngClientswiperimg,
  PngClientswiperimg1,
  PngClientswiperimg2,
  PngClientswiperimg3,
  PngClientswiperimg4,
  PngClientswiperimg5,
  PngClientswiperimg6,
  PngClientswiperimg7,
} from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Autoplay } from "swiper";

export default function ClientsSection() {
  const [slidesPerView, setSlidesPerView] = useState(6);
  function changeSlidesPerView() {
    if (window.innerWidth < 400) {
      setSlidesPerView(1);
    } else if (window.innerWidth < 600) {
      setSlidesPerView(2);
    } else if (window.innerWidth < 800) {
      setSlidesPerView(3);
    } else if (window.innerWidth < 1000) {
      setSlidesPerView(4);
    } else if (window.innerWidth < 1200) {
      setSlidesPerView(5);
    } else {
      setSlidesPerView(6);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);
  return (
    <section className="clients">
      <div
        className="clients__heading"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        Our clients
      </div>
      <div
        className="clients__content"
        data-aos="fade-up"
        data-aos-delay="60"
        data-aos-duration="1300"
      >
        <Swiper
          className="swiper-container"
          spaceBetween={50}
          slidesPerView={slidesPerView}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            pauseOnMouseEnter: true,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg} alt="PngClientswiperimg" />{" "}
                <p>.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg1} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg2} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg3} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg4} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg5} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg6} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg7} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg1} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg2} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg3} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg4} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg5} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg6} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="client__card">
              <div className="client__card__content">
                <img src={PngClientswiperimg7} alt="PngClientswiperimg" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
