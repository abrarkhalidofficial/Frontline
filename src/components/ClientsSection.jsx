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

export default function ClientsSection() {
  return (
    <section className="clients">
      <div className="clients__heading">Our clients</div>
      <div className="clients__content">
        <Swiper
          className="swiper-container"
          spaceBetween={50}
          slidesPerView={6}
        >
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
