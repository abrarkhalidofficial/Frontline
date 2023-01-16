import { PngMamberbackground, PngTeamcardimg } from "../assets";

export default function MembersSection() {
  return (
    <section className="members">
      <div
        className="members__content__heading"
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="1000"
      >
        Team Members
      </div>
      <div className="members__content">
        <div className="members__content__all__card">
          <div className="members__content__card">
            <div className="members__content__card__content">
              <div
                className="members__content__card__image"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1200"
              >
                <img src={PngTeamcardimg} alt="teamcardimg" />
              </div>
              <div
                className="members__content__card__heading"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1500"
              >
                Nadeem Butt
              </div>
              <div
                className="members__content__card__info"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1500"
              >
                Chief Executive Officer
              </div>
              <div
                className="members__content__card__links"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                <a href="#">
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.61232 19.4634L3.58492 11.0357H0V7.42389H3.58492V5.01599C3.58492 1.76629 5.58233 0.200195 8.45967 0.200195C9.83794 0.200195 11.0225 0.303578 11.3677 0.349786V3.74591L9.37213 3.74682C7.80727 3.74682 7.50428 4.496 7.50428 5.59538V7.42389H11.9497L10.7548 11.0357H7.50427V19.4634H3.61232Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9346 5.40719C14.5111 5.40719 14.9785 4.93981 14.9785 4.36326C14.9785 3.78672 14.5111 3.31934 13.9346 3.31934C13.358 3.31934 12.8906 3.78672 12.8906 4.36326C12.8906 4.93981 13.358 5.40719 13.9346 5.40719Z"
                      fill="#83AC04"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.07031 8.83261C5.07031 11.2315 7.02115 13.1823 9.42002 13.1823C11.8189 13.1823 13.7697 11.2315 13.7697 8.83261C13.7697 6.43375 11.8189 4.48291 9.42002 4.48291C7.02115 4.48291 5.07031 6.43375 5.07031 8.83261ZM7.24609 8.83208C7.24609 7.63265 8.22151 6.65723 9.42095 6.65723C10.6204 6.65723 11.5958 7.63265 11.5958 8.83208C11.5958 10.0315 10.6204 11.0069 9.42095 11.0069C8.22151 11.0069 7.24609 10.0315 7.24609 8.83208Z"
                      fill="#83AC04"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.07627 17.5311H13.7757C16.0114 17.5311 18.1254 15.4172 18.1254 13.1814V4.48203C18.1254 2.24628 16.0114 0.132324 13.7757 0.132324H5.07627C2.84052 0.132324 0.726562 2.24628 0.726562 4.48203V13.1814C0.726562 15.4172 2.84052 17.5311 5.07627 17.5311ZM2.90234 4.48149C2.90234 3.46475 4.06045 2.30664 5.0772 2.30664H13.7766C14.7933 2.30664 15.9515 3.46475 15.9515 4.48149V13.1809C15.9515 14.1976 14.7933 15.3557 13.7766 15.3557H5.0772C4.04088 15.3557 2.90234 14.2172 2.90234 13.1809V4.48149Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0258 1.81178C19.3088 2.17297 18.5919 2.29336 17.7554 2.41376C18.5919 1.93218 19.1893 1.20981 19.4283 0.246649C18.7114 0.728229 17.8749 0.969018 16.9189 1.20981C16.2019 0.487439 15.1264 0.00585938 14.051 0.00585938C12.0195 0.00585938 10.227 1.81178 10.227 3.97889C10.227 4.34007 10.227 4.58086 10.3465 4.82165C7.12011 4.70126 4.13268 3.13613 2.22072 0.728229C1.86223 1.3302 1.74273 1.93218 1.74273 2.77494C1.74273 4.09928 2.45972 5.30323 3.53519 6.0256C2.9377 6.0256 2.34022 5.78481 1.74273 5.54402C1.74273 7.47034 3.0572 9.03547 4.84966 9.39666C4.49117 9.51705 4.13268 9.51705 3.77419 9.51705C3.53519 9.51705 3.2962 9.51705 3.0572 9.39666C3.53519 10.9618 4.96916 12.1657 6.76162 12.1657C5.44715 13.2493 3.77419 13.8513 1.86223 13.8513C1.50374 13.8513 1.26474 13.8513 0.90625 13.8513C2.69871 14.9348 4.73016 15.6572 6.88112 15.6572C14.051 15.6572 17.9944 9.63745 17.9944 4.46047C17.9944 4.34007 17.9944 4.09928 17.9944 3.97889C18.8309 3.37692 19.5478 2.65455 20.0258 1.81178Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="members__content__card__text"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1500"
              >
                An investment banker by profession having more than 30 years of
                extensive experience in project finance, business development
                and general management. Mr. Nadeem has been involved in various
                aspects of business development ......
              </div>
            </div>
          </div>{" "}
          <div className="members__content__card">
            <div className="members__content__card__content">
              <div
                className="members__content__card__image"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1200"
              >
                <img src={PngTeamcardimg} alt="teamcardimg" />
              </div>
              <div
                className="members__content__card__heading"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1500"
              >
                Muhammad Arslan
              </div>
              <div
                className="members__content__card__info"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1500"
              >
                Managing Director
              </div>
              <div
                className="members__content__card__links"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                <a href="#">
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.61232 19.4634L3.58492 11.0357H0V7.42389H3.58492V5.01599C3.58492 1.76629 5.58233 0.200195 8.45967 0.200195C9.83794 0.200195 11.0225 0.303578 11.3677 0.349786V3.74591L9.37213 3.74682C7.80727 3.74682 7.50428 4.496 7.50428 5.59538V7.42389H11.9497L10.7548 11.0357H7.50427V19.4634H3.61232Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9346 5.40719C14.5111 5.40719 14.9785 4.93981 14.9785 4.36326C14.9785 3.78672 14.5111 3.31934 13.9346 3.31934C13.358 3.31934 12.8906 3.78672 12.8906 4.36326C12.8906 4.93981 13.358 5.40719 13.9346 5.40719Z"
                      fill="#83AC04"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.07031 8.83261C5.07031 11.2315 7.02115 13.1823 9.42002 13.1823C11.8189 13.1823 13.7697 11.2315 13.7697 8.83261C13.7697 6.43375 11.8189 4.48291 9.42002 4.48291C7.02115 4.48291 5.07031 6.43375 5.07031 8.83261ZM7.24609 8.83208C7.24609 7.63265 8.22151 6.65723 9.42095 6.65723C10.6204 6.65723 11.5958 7.63265 11.5958 8.83208C11.5958 10.0315 10.6204 11.0069 9.42095 11.0069C8.22151 11.0069 7.24609 10.0315 7.24609 8.83208Z"
                      fill="#83AC04"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.07627 17.5311H13.7757C16.0114 17.5311 18.1254 15.4172 18.1254 13.1814V4.48203C18.1254 2.24628 16.0114 0.132324 13.7757 0.132324H5.07627C2.84052 0.132324 0.726562 2.24628 0.726562 4.48203V13.1814C0.726562 15.4172 2.84052 17.5311 5.07627 17.5311ZM2.90234 4.48149C2.90234 3.46475 4.06045 2.30664 5.0772 2.30664H13.7766C14.7933 2.30664 15.9515 3.46475 15.9515 4.48149V13.1809C15.9515 14.1976 14.7933 15.3557 13.7766 15.3557H5.0772C4.04088 15.3557 2.90234 14.2172 2.90234 13.1809V4.48149Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0258 1.81178C19.3088 2.17297 18.5919 2.29336 17.7554 2.41376C18.5919 1.93218 19.1893 1.20981 19.4283 0.246649C18.7114 0.728229 17.8749 0.969018 16.9189 1.20981C16.2019 0.487439 15.1264 0.00585938 14.051 0.00585938C12.0195 0.00585938 10.227 1.81178 10.227 3.97889C10.227 4.34007 10.227 4.58086 10.3465 4.82165C7.12011 4.70126 4.13268 3.13613 2.22072 0.728229C1.86223 1.3302 1.74273 1.93218 1.74273 2.77494C1.74273 4.09928 2.45972 5.30323 3.53519 6.0256C2.9377 6.0256 2.34022 5.78481 1.74273 5.54402C1.74273 7.47034 3.0572 9.03547 4.84966 9.39666C4.49117 9.51705 4.13268 9.51705 3.77419 9.51705C3.53519 9.51705 3.2962 9.51705 3.0572 9.39666C3.53519 10.9618 4.96916 12.1657 6.76162 12.1657C5.44715 13.2493 3.77419 13.8513 1.86223 13.8513C1.50374 13.8513 1.26474 13.8513 0.90625 13.8513C2.69871 14.9348 4.73016 15.6572 6.88112 15.6572C14.051 15.6572 17.9944 9.63745 17.9944 4.46047C17.9944 4.34007 17.9944 4.09928 17.9944 3.97889C18.8309 3.37692 19.5478 2.65455 20.0258 1.81178Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="members__content__card__text"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1500"
              >
                As a member chartered certified account and CFA Charter Holder,
                he leads our corporate- and investment-banking, helping clients
                across sell-side, buy-side, and market infrastructure to
                transform and improve performance through the use of
                technology.....
              </div>
            </div>
          </div>
          <div className="members__content__card">
            <div className="members__content__card__content">
              <div
                className="members__content__card__image"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1200"
              >
                <img src={PngTeamcardimg} alt="teamcardimg" />
              </div>
              <div
                className="members__content__card__heading"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1500"
              >
                Istafa Baqar Zaidi
              </div>
              <div
                className="members__content__card__info"
                data-aos="fade-up"
                data-aos-delay="70"
                data-aos-duration="1500"
              >
                Director Transaction Advisory
              </div>
              <div
                className="members__content__card__links"
                data-aos="fade-up"
                data-aos-delay="60"
                data-aos-duration="1300"
              >
                <a href="#">
                  <svg
                    width="12"
                    height="20"
                    viewBox="0 0 12 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.61232 19.4634L3.58492 11.0357H0V7.42389H3.58492V5.01599C3.58492 1.76629 5.58233 0.200195 8.45967 0.200195C9.83794 0.200195 11.0225 0.303578 11.3677 0.349786V3.74591L9.37213 3.74682C7.80727 3.74682 7.50428 4.496 7.50428 5.59538V7.42389H11.9497L10.7548 11.0357H7.50427V19.4634H3.61232Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    width="19"
                    height="18"
                    viewBox="0 0 19 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.9346 5.40719C14.5111 5.40719 14.9785 4.93981 14.9785 4.36326C14.9785 3.78672 14.5111 3.31934 13.9346 3.31934C13.358 3.31934 12.8906 3.78672 12.8906 4.36326C12.8906 4.93981 13.358 5.40719 13.9346 5.40719Z"
                      fill="#83AC04"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.07031 8.83261C5.07031 11.2315 7.02115 13.1823 9.42002 13.1823C11.8189 13.1823 13.7697 11.2315 13.7697 8.83261C13.7697 6.43375 11.8189 4.48291 9.42002 4.48291C7.02115 4.48291 5.07031 6.43375 5.07031 8.83261ZM7.24609 8.83208C7.24609 7.63265 8.22151 6.65723 9.42095 6.65723C10.6204 6.65723 11.5958 7.63265 11.5958 8.83208C11.5958 10.0315 10.6204 11.0069 9.42095 11.0069C8.22151 11.0069 7.24609 10.0315 7.24609 8.83208Z"
                      fill="#83AC04"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.07627 17.5311H13.7757C16.0114 17.5311 18.1254 15.4172 18.1254 13.1814V4.48203C18.1254 2.24628 16.0114 0.132324 13.7757 0.132324H5.07627C2.84052 0.132324 0.726562 2.24628 0.726562 4.48203V13.1814C0.726562 15.4172 2.84052 17.5311 5.07627 17.5311ZM2.90234 4.48149C2.90234 3.46475 4.06045 2.30664 5.0772 2.30664H13.7766C14.7933 2.30664 15.9515 3.46475 15.9515 4.48149V13.1809C15.9515 14.1976 14.7933 15.3557 13.7766 15.3557H5.0772C4.04088 15.3557 2.90234 14.2172 2.90234 13.1809V4.48149Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>

                <a href="#">
                  <svg
                    width="21"
                    height="16"
                    viewBox="0 0 21 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.0258 1.81178C19.3088 2.17297 18.5919 2.29336 17.7554 2.41376C18.5919 1.93218 19.1893 1.20981 19.4283 0.246649C18.7114 0.728229 17.8749 0.969018 16.9189 1.20981C16.2019 0.487439 15.1264 0.00585938 14.051 0.00585938C12.0195 0.00585938 10.227 1.81178 10.227 3.97889C10.227 4.34007 10.227 4.58086 10.3465 4.82165C7.12011 4.70126 4.13268 3.13613 2.22072 0.728229C1.86223 1.3302 1.74273 1.93218 1.74273 2.77494C1.74273 4.09928 2.45972 5.30323 3.53519 6.0256C2.9377 6.0256 2.34022 5.78481 1.74273 5.54402C1.74273 7.47034 3.0572 9.03547 4.84966 9.39666C4.49117 9.51705 4.13268 9.51705 3.77419 9.51705C3.53519 9.51705 3.2962 9.51705 3.0572 9.39666C3.53519 10.9618 4.96916 12.1657 6.76162 12.1657C5.44715 13.2493 3.77419 13.8513 1.86223 13.8513C1.50374 13.8513 1.26474 13.8513 0.90625 13.8513C2.69871 14.9348 4.73016 15.6572 6.88112 15.6572C14.051 15.6572 17.9944 9.63745 17.9944 4.46047C17.9944 4.34007 17.9944 4.09928 17.9944 3.97889C18.8309 3.37692 19.5478 2.65455 20.0258 1.81178Z"
                      fill="#83AC04"
                    />
                  </svg>
                </a>
              </div>
              <div
                className="members__content__card__text"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="1500"
              >
                Mr. Istafa Zaidi is leading the investment banking wing of the
                Company and is specialized in Stock Market Listing, Private
                Equity, Venture Funding, Joint Venture, and M&A. He is a
                Professional Accountant and Investment Banker with an Masters
                from a .....
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="members__background__img">
        <img src={PngMamberbackground} alt="PngTeamsectionback" />
      </div>
    </section>
  );
}
