import React from "react";
import { PngAboutusimg, PngAboutusimg1, PngAboutusimg2 } from "../assets";

export function aboutus() {
  return (
    <section className="aboutus">
      <div className="aboutus__content">
        <div className="aboutus__content__heading">
          About Frontline Advisory
        </div>
        <div className="aboutus__content__text">
          o Frontline Advisory is a leading independent investment banking
          company that provides innovative, strategic and financial advice to a
          diverse client base. We assist our clients in achieving their
          strategic goals by offering comprehensive, integrated financial
          advisory services across all major industry sectors. Our dynamic
          advisory practice supports clients through all phases of the business
          cycle with expert capabilities in Stock Market Listing (IPO), Real
          Estate Advisory (REITs), Bank Financing, M&A and Strategic Advisory,
          Capital Structure Advisory.
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
            <img src={PngAboutusimg1} alt="PngAboutusimg" />

            <div className="aboutus__content__card__heading">
              Ensuring maximum client satisfaction
            </div>
            <div className="aboutus__content__card__text">
              Dedicated to providing personal attention to all our clients.
            </div>
          </div>
          <div className="aboutus__content__card">
            <img src={PngAboutusimg2} alt="PngAboutusimg" />

            <div className="aboutus__content__card__heading">
              Wide Portfolio of services offered
            </div>
            <div className="aboutus__content__card__text">
              Catering to the need of all types of Business , Corporations &
              Institutions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
