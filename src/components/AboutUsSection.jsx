import { PngAboutusimg, PngAboutusimg1, PngAboutusimg2 } from "assets";

export default function AboutUsSection() {
  return (
    <section className="aboutus" id="about">
      <div className="aboutus__content">
        <div
          className="aboutus__content__heading"
          data-aos="fade-up"
          data-aos-delay="70"
          data-aos-duration="1000"
        >
          About Frontline Advisory
        </div>
        <div
          className="aboutus__content__text"
          data-aos="fade-up"
          data-aos-delay="60"
          data-aos-duration="1300"
        >
          Frontline Advisory is a leading independent investment banking company
          that provides innovative, strategic and financial advice to a diverse
          client base. We assist our clients in achieving their strategic goals
          by offering comprehensive, integrated financial advisory services
          across all major industry sectors. Our dynamic advisory practice
          supports clients through all phases of the business cycle with expert
          capabilities in Stock Market Listing (IPO), Real Estate Advisory
          (REITs), Bank Financing, M&A and Strategic Advisory, Capital Structure
          Advisory.
        </div>
        <div
          className="aboutus__content__all__card"
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
        >
          <div className="aboutus__content__card">
            <img src={PngAboutusimg} alt="PngAboutusimg" />

            <div
              className="aboutus__content__card__heading"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1300"
            >
              One of the most active advisory firm
            </div>
            <div
              className="aboutus__content__card__text"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1500"
            >
              Aspiring to be ranked among the top advisory firms across the
              nation.
            </div>
          </div>
          <div className="aboutus__content__card">
            <img src={PngAboutusimg1} alt="PngAboutusimg" />
            <div
              className="aboutus__content__card__heading"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1300"
            >
              Ensuring maximum client satisfaction
            </div>
            <div
              className="aboutus__content__card__text"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1500"
            >
              Dedicated to providing personal attention to all our clients.
            </div>
          </div>
          <div className="aboutus__content__card">
            <img src={PngAboutusimg2} alt="PngAboutusimg" />

            <div
              className="aboutus__content__card__heading"
              data-aos="fade-up"
              data-aos-delay="60"
              data-aos-duration="1300"
            >
              Wide Portfolio of services offered
            </div>
            <div
              className="aboutus__content__card__text"
              data-aos="fade-up"
              data-aos-delay="70"
              data-aos-duration="1500"
            >
              Catering to the need of all types of Business , Corporations &
              Institutions.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
