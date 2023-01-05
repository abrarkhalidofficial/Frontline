import React from "react";
import { PngAboutusimg } from "../assets";
import { Homesection } from "./Homesection";

export default function index() {
  return (
    <>
      {Homesection()}
      <section className="aboutus">
        <div className="aboutus__content">
          <div className="aboutus__content__heading">
            About Frontline Advisory
          </div>
          <div className="aboutus__content__text">
            o Frontline Advisory is a leading independent investment banking
            company that provides innovative, strategic and financial advice to
            a diverse client base. We assist our clients in achieving their
            strategic goals by offering comprehensive, integrated financial
            advisory services across all major industry sectors. Our dynamic
            advisory practice supports clients through all phases of the
            business cycle with expert capabilities in Stock Market Listing
            (IPO), Real Estate Advisory (REITs), Bank Financing, M&A and
            Strategic Advisory, Capital Structure Advisory.
          </div>
          <div className="aboutus__content__all__card">
            <div className="aboutus__content__card">
              <img src={PngAboutusimg} alt="PngAboutusimg" />

              <div className="aboutus__content__card__heading">
                One of the most active advisory firm
              </div>
              <div className="aboutus__content__card__text">
                Aspiring to be ranked among the top advisory firms across the
                nation.
              </div>
            </div>
            <div className="aboutus__content__card">
              <img src={PngAboutusimg} alt="PngAboutusimg" />

              <div className="aboutus__content__card__heading">
                One of the most active advisory firm
              </div>
              <div className="aboutus__content__card__text">
                Aspiring to be ranked among the top advisory firms across the
                nation.
              </div>
            </div>
            <div className="aboutus__content__card">
              <img src={PngAboutusimg} alt="PngAboutusimg" />

              <div className="aboutus__content__card__heading">
                One of the most active advisory firm
              </div>
              <div className="aboutus__content__card__text">
                Aspiring to be ranked among the top advisory firms across the
                nation.
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
