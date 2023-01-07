import { PngIndustriesleftimg } from "../assets";
import React from "react";

export default function IndustriesSection() {
  return (
    <section className="industries">
      <div className="industries__content__heading">Industries</div>
      <div className="industries__content">
        <div className="industries__content__left">
          <div className="industries__content__left__content">
            <div className="industries__content__left__content__img">
              <img src={PngIndustriesleftimg} alt="PngIndustriesleftimg" />
            </div>
          </div>
        </div>
        <div className="industries__content__right">
          <button>Telecommunication</button>
          <button>Paints</button>
          <button>Chemical</button>
          <button>Automobile</button>
          <button>Airline</button>
          <button>Locomotive</button>
          <button>Information</button>
          <button>Home Appliances</button>
        </div>
        <div className="industries__content__right">
          <button>Logistics</button>
          <button>Construction</button>
          <button>Real Estate</button>
          <button>Textile</button>
          <button>Infrastructure</button>
          <button>IT</button>
          <button>Insurance</button>
          <button>Oil & Gas</button>
        </div>
      </div>
    </section>
  );
}
