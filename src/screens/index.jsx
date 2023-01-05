import React from "react";
import { PngServicesback } from "../assets";
import { aboutus } from "./aboutus";
import { Homesection } from "./Homesection";

export default function index() {
  return (
    <>
      {Homesection()}
      {aboutus()}
      <section className="services">
        <div className="services__content__heading">Our Services</div>
        <div className="services__content">
          <div className="services__content__left">
            <div className="services__content__left__content">
              <div className="services__content__left__content__heading">
                Fund Raising- Equity + Bank Financing
              </div>
              <div className="services__content__left__content__heading">
                Merger and Acquisition Advisory{" "}
              </div>
              <div className="services__content__left__content__heading">
                Corporate Finance Advisory{" "}
              </div>
              <div className="services__content__left__content__heading">
                Finance & Tax Services{" "}
              </div>
            </div>
          </div>

          <div className="services__content__right">
            <div className="services__content__right__content">
              <div className="services__content__right__content__heading">
                Reverse Merger – Technical Listing
              </div>
              <div className="services__content__right__content__span"></div>
              <div className="services__content__right__content__text">
                Identification of Company for acquisition Complete understanding
                of substantial takeover laws Coordination with CCP, MTO, SECP,
                PSX Tax & legal structuring of the transactions
              </div>
            </div>
            <div className="services__content__right__content">
              <div className="services__content__right__content__heading">
                Reverse Merger – Technical Listing
              </div>
              <div className="services__content__right__content__span"></div>
              <div className="services__content__right__content__text">
                Identification of Company for acquisition Complete understanding
                of substantial takeover laws Coordination with CCP, MTO, SECP,
                PSX Tax & legal structuring of the transactions
              </div>
            </div>
          </div>
          <div className="services__content__right">
            <div className="services__content__right__content">
              <div className="services__content__right__content__heading">
                Reverse Merger – Technical Listing
              </div>
              <div className="services__content__right__content__span"></div>
              <div className="services__content__right__content__text">
                Identification of Company for acquisition Complete understanding
                of substantial takeover laws Coordination with CCP, MTO, SECP,
                PSX Tax & legal structuring of the transactions
              </div>
            </div>
            <div className="services__content__right__content">
              <div className="services__content__right__content__heading">
                Reverse Merger – Technical Listing
              </div>
              <div className="services__content__right__content__span"></div>
              <div className="services__content__right__content__text">
                Identification of Company for acquisition Complete understanding
                of substantial takeover laws Coordination with CCP, MTO, SECP,
                PSX Tax & legal structuring of the transactions
              </div>
            </div>
          </div>
        </div>
        <div className="services__background__img">
          <img src={PngServicesback} alt="PngServicesback" />
        </div>
      </section>
    </>
  );
}
