import { PngMamberbackground, PngTeamcardimg } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import { Autoplay } from "swiper";
import ClickAwayListener from "react-click-away-listener";

export default function MembersSection() {
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [popupData, setPopupData] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  function changeSlidesPerView() {
    if (window.innerWidth <= 500) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 800) {
      setSlidesPerView(2);
    } else if (window.innerWidth <= 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  }
  useEffect(() => {
    changeSlidesPerView();
    window.addEventListener("resize", changeSlidesPerView);
  }, []);

  const listOfMembers = [
    {
      image: PngTeamcardimg,
      name: <>Nadeem Butt</>,
      position: <>Chief Executive Officer</>,
      info: "An investment banker by profession having more than 30 years of extensive experience in project finance, business development and general management. Mr. Nadeem has been involved in various aspects of business development including; identifying, evaluating and structuring of the financing transaction as an investment banker, couple with a rich industry experience of setting up and management of projects in the electronics, real estate, infrastructure, cement, textile, energy, Mutual Funds and Financial services.. Mr. Nadeem is a fellow Chartered Accountant from the Institute of Chartered Accountants of Pakistan. His other extensive and varied experience includes fund raising through numerous local and international equity/debt listings; project finance syndications; M&A transactions and variety of projects’ development.",
    },
    {
      image:
        "https://res.cloudinary.com/mehfoozurrehman/image/upload/v1674849413/frontline/1517361907366_aoxcd3.jpg",
      name: <>Muhammad Arslan</>,
      position: <>Managing Director</>,
      info: "As a member chartered certified account and CFA Charter Holder, he leads our corporate- and investment-banking, helping clients across sell-side, buy-side, and market infrastructure to transform and improve performance through the use of technology, analytics, data, and innovation.. He brings more than 15 years of experience in the investment banking industry to his work, helping clients strengthen their businesses. Working in partnership with top executives, he helps leaders shape enterprise strategy, guide cultural transformations, rapidly boost performance, and redesign organizations to sustain the results. With a strong point of view on what is required to capture value, he has directed transformations to help clients pursue new sustainable performance improvement through top-line growth, margin expansion, and capital management. His clients have a track-record of delivering industry leading top and bottom-line growth, significant ROE return on investment expansion, and returns to shareholders at the top of their respective peer groups.",
    },
    {
      image:
        "https://res.cloudinary.com/mehfoozurrehman/image/upload/v1674849279/frontline/1568448967510_z6dxq0.jpg",
      name: <>Istafa Baqar Zaidi</>,
      position: <>Director Transaction Advisory</>,
      info: "Mr. Istafa Zaidi is leading the investment banking wing of the Company and is specialized in Stock Market Listing, Private Equity, Venture Funding, Joint Venture, and M&A. He is a Professional Accountant and Investment Banker with an Masters from a renowned university from Europe. Working in the investment banking industry, he has a deal-exposure in the various industries and segments including but not limited to Plastics, Paints, Automobiles, Service Tech, Healthcare, Pharmaceuticals, and Organized Retail. Also supports companies in material preparation including Information Memorandum, Projections, Valuations, Teasers etc.",
    },
    {
      image:
        "https://res.cloudinary.com/mehfoozurrehman/image/upload/v1674849535/frontline/1666248995313_nkdtsn.jpg",
      name: <>Muhammad Kamran</>,
      position: <>Director Financial Advisory</>,
      info: "Mr. Kamran is a CFA Charter Holder and Master’s in Business Economics. A thoroughbred corporate finance professional with 15+ years of experience in corporate finance and investment banking. During his professional career Mr. Kamran was involved in various fund-raising activities ranging from private placement, Private + Listed Sukuk's, right shares issuance deals, merger/acquisition transactions and IPOs. Mr. Kamran’s high corporate finance and investment banking acumen makes him an ace of this field. Some of other core activities in which he holds a strong footstep in preparing complex financial models, project feasibilities, information memorandums. Previously Muhammad Kamran leading investment banking wing of one of the largest Investment Banking House in Pakistan.",
    },
    {
      image: PngTeamcardimg,
      name: <>Wasif Ali Rana</>,
      position: <>Director Corporate Affairs</>,
      info: "Ali is fellow qualified chartered accountant trained from PwC having 15+ years Industry Experience. He specializes in managing the finance, tax and corporate functions and accordingly leads the finance and taxation wing of the Company. Throughout his career he has facilitated many entities on complex finance and related taxation matters. He has excellent liasioning with all the regulators including FBR, SECP, CCP, PSX etc. Ali has been associated with the corporate Financial servicing industry throughout his Career. His other areas of expertise include growth strategy, commercial due diligence, exit support, M&A strategy, synergy capture, and digital business building and transformation. He has been involved in more than 45 commercial and vendor due-diligence processes and more than 30 strategy engagements with financial services and private equity portfolio companies.",
    },
    {
      image:
        "https://res.cloudinary.com/mehfoozurrehman/image/upload/v1674849361/frontline/1561566259032_xajwpt.jpg",
      name: <>Sanie Khan</>,
      position: <>Director Listings</>,
      info: "Sanie Khan holds deep knowledge of the financial markets in Pakistan. Based in Karachi, he has over 20 years of hands on management experience in financial technologies and managing operations in the financial sector. He was the General Manager at the Pakistan Stock Exchange (PSX) for 17 years. He along-with senior members of Exchange successfully negotiated Risk Management reforms with Securities and Exchange Commission of Pakistan in 2006. He also served as subject matter expert on the Development, Risk Management and Implementation Committee of Securities and Exchange Commission of Pakistan on various Share-Financing, Derivatives and Debt Market Products. A masters Economics, and masters in business administration majoring in Information Systems, Sanie has also led IT firms before this foray into the financial marketsctor Listings",
    },
    {
      image:
        "https://res.cloudinary.com/mehfoozurrehman/image/upload/v1674849493/frontline/1674201188544_ldabau.jpg",
      name: <>Salman Ahson</>,
      position: <>Director Management Consulting</>,
      info: "With over eighteen years of experience in management & business consulting, tax and audit services, Salman leads the Management Consulting team at Frontline Advisory. He is a member of the Institute of Chartered Accountants of Pakistan and has past working experience with PwC and EY. Salman has experience of providing consulting services to leading names in Pakistan across various sectors including manufacturing, retail, financial institutions, FMCGs, health, education, power, oil & gas, NGOs, donor agencies and the government and public sector. His expertise includes risk, performance improvement and people advisory services.",
    },
  ];
  return (
    <>
      {popupOpen && (
        <div className="animation__popup__wrapper">
          <ClickAwayListener
            onClickAway={() => {
              setPopupOpen(false);
            }}
          >
            <div className="animation__popup" style={{ textAlign: "center" }}>
              <button
                className="animation__popup__close"
                onClick={() => {
                  setPopupOpen(false);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-x"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <img
                src={popupData.image}
                alt={popupData.name}
                className="animation__popup__img"
              />
              <div className="animation__popup__heading">{popupData.name}</div>
              <div className="animation__popup__sub__heading">
                {popupData.position}
              </div>
              <div className="animation__popup__info">{popupData.info}</div>
            </div>
          </ClickAwayListener>
        </div>
      )}
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
            <Swiper
              slidesPerView={slidesPerView}
              modules={[Autoplay]}
              speed={2000}
              spaceBetween={30}
              autoplay={{
                delay: 2000,
                pauseOnMouseEnter: false,
                disableOnInteraction: false,
              }}
              loop={true}
            >
              {listOfMembers.map((member, index) => (
                <SwiperSlide key={index}>
                  <button
                    onClick={() => {
                      setPopupData(member);
                      setPopupOpen(true);
                    }}
                    className="members__content__card"
                  >
                    <div className="members__content__card__content">
                      <div
                        className="members__content__card__heading"
                        data-aos="fade-up"
                        data-aos-delay="70"
                        data-aos-duration="1500"
                      >
                        {member.name}
                      </div>
                      <div
                        className="members__content__card__info"
                        data-aos="fade-up"
                        data-aos-delay="70"
                        data-aos-duration="1500"
                      >
                        {member.position}
                      </div>
                      <div
                        className="members__content__card__text"
                        data-aos="fade-up"
                        data-aos-delay="80"
                        data-aos-duration="1500"
                      >
                        {member.info.length > 200
                          ? member.info.slice(0, 200) + "..."
                          : member.info}
                      </div>
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        <div className="members__background__img">
          <img src={PngMamberbackground} alt="PngTeamsectionback" />
        </div>
      </section>
    </>
  );
}
