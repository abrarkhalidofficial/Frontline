import {
  JpgAutomobile,
  JpgChemical,
  JpgConstruction,
  JpgHomeAppliances,
  JpgInfrastructure,
  JpgInsurance,
  JpgIt,
  JpgLocomotive,
  JpgLogistics,
  JpgOilGas,
  JpgPaints,
  JpgRealEstate,
  JpgTelecommunication,
  JpgTextile,
  PngAirline,
  PngImgloader,
} from "../assets";

import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function IndustriesSection() {
  const text = [
    "Telecommunication",
    "Paints",
    "Chemical",
    "Automobile",
    "Airline",
    "Locomotive",
    "Information Technology",
    "Home Appliances",
  ];
  const texttwo = [
    "Logistics",
    "Construction",
    "Real Estate",
    "Textile",
    "Infrastructure",
    "IT",
    "Insurance",
    "Oil & Gas",
  ];
  const images = [
    JpgTelecommunication,
    JpgPaints,
    JpgChemical,
    JpgAutomobile,
    PngAirline,
    JpgLocomotive,
    JpgIt,
    JpgHomeAppliances,
    JpgLogistics,
    JpgConstruction,
    JpgRealEstate,
    JpgTextile,
    JpgInfrastructure,
    JpgIt,
    JpgInsurance,
    JpgOilGas,
  ];
  const [selectedImage, setSelectedImage] = React.useState(0);

  return (
    <section className="industries" id="Industries">
      <div
        className="industries__content__heading"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        Industries
      </div>
      <div className="industries__content">
        <div className="industries__content__left">
          <div className="industries__content__left__content">
            <div className="industries__content__left__content__img">
              {images
                .filter((_image, index) => index === selectedImage)
                .map((image, index) => (
                  <LazyLoadImage
                    key={index}
                    src={image}
                    alt="JpgIndustriesleftimg"
                    effect="blur"
                    PlaceholderSrc={PngImgloader}
                  />
                ))}
            </div>
          </div>
        </div>
        <div
          className="industries__content__right"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1300"
        >
          {text.map((item, index) => (
            <button
              key={index}
              className={
                index === selectedImage
                  ? "industries__content__right__button__active"
                  : "industries__content__right__button"
              }
              onClick={() => setSelectedImage(index)}
            >
              {item}
            </button>
          ))}
        </div>
        <div
          className="industries__content__right"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1500"
        >
          {texttwo.map((item, index) => (
            <button
              key={index}
              className={
                index + text.length === selectedImage
                  ? "industries__content__right__button__active"
                  : "industries__content__right__button"
              }
              onClick={() => setSelectedImage(index + text.length)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
