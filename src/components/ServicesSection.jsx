import { PngServicesback } from "../assets";
import clsx from "clsx";
import { useState } from "react";

export default function ServicesSection() {
  const [selectedTab, setSelectedTab] = useState(0);
  const selectionList = [
    "Fund Raising- Equity + Bank Financing",
    "Merger and Acquisition Advisory",
    "Corporate Finance Advisory",
    "Finance & Tax Services",
  ];
  return (
    <section className="services" id="Services">
      <div className="services__content__heading">Our Services</div>
      <div className="services__content">
        <div className="services__content__left">
          <div className="services__content__left__content">
            {selectionList.map((item, index) => (
              <div
                onClick={() => setSelectedTab(index)}
                className={clsx(
                  "services__content__left__content__heading",
                  selectedTab === index &&
                    "services__content__left__content__heading__active"
                )}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
        {selectedTab === 0 ? (
          <>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Reverse Merger – Technical Listing
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Identification of Company for acquisition Complete
                  understanding of substantial takeover laws Coordination with
                  CCP, MTO, SECP, PSX Tax & legal structuring of the
                  transactions
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  360º M&A advisory
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Generating acquisition deal flow Providing valuation and
                  structuring advice Delivering funding solutions Pre
                  acquisition planning- post acquisition support
                </div>
              </div>
            </div>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Complete deal negotiation
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Negotiation with the Target Company Preparation of Term Sheet,
                  EOI, SPA etc. Coordination for Tax & legal due diligence Full
                  support during acquisitions of companies and groups
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  M&A Deal Structuring
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Buy Side/Sell Side readiness assessment Target identification
                  and screening Pre Bid Advisory and diligence Term sheet/SPA
                  preparation & negotiation
                </div>
              </div>
            </div>
          </>
        ) : selectedTab === 1 ? (
          <>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Reverse Merger – Technical Listing
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Identification of Company for acquisition Complete
                  understanding of substantial takeover laws Coordination with
                  CCP, MTO, SECP, PSX Tax & legal structuring of the
                  transactions
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  360º M&A advisory
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Generating acquisition deal flow Providing valuation and
                  structuring advice Delivering funding solutions Pre
                  acquisition planning- post acquisition support
                </div>
              </div>
            </div>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Complete deal negotiation
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Negotiation with the Target Company Preparation of Term Sheet,
                  EOI, SPA etc. Coordination for Tax & legal due diligence Full
                  support during acquisitions of companies and groups
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  M&A Deal Structuring
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Buy Side/Sell Side readiness assessment Target identification
                  and screening Pre Bid Advisory and diligence Term sheet/SPA
                  preparation & negotiation
                </div>
              </div>
            </div>
          </>
        ) : selectedTab === 2 ? (
          <>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Reverse Merger – Technical Listing
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Identification of Company for acquisition Complete
                  understanding of substantial takeover laws Coordination with
                  CCP, MTO, SECP, PSX Tax & legal structuring of the
                  transactions
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  360º M&A advisory
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Generating acquisition deal flow Providing valuation and
                  structuring advice Delivering funding solutions Pre
                  acquisition planning- post acquisition support
                </div>
              </div>
            </div>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Complete deal negotiation
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Negotiation with the Target Company Preparation of Term Sheet,
                  EOI, SPA etc. Coordination for Tax & legal due diligence Full
                  support during acquisitions of companies and groups
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  M&A Deal Structuring
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Buy Side/Sell Side readiness assessment Target identification
                  and screening Pre Bid Advisory and diligence Term sheet/SPA
                  preparation & negotiation
                </div>
              </div>
            </div>
          </>
        ) : selectedTab === 3 ? (
          <>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Reverse Merger – Technical Listing
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Identification of Company for acquisition Complete
                  understanding of substantial takeover laws Coordination with
                  CCP, MTO, SECP, PSX Tax & legal structuring of the
                  transactions
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  360º M&A advisory
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Generating acquisition deal flow Providing valuation and
                  structuring advice Delivering funding solutions Pre
                  acquisition planning- post acquisition support
                </div>
              </div>
            </div>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Complete deal negotiation
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Negotiation with the Target Company Preparation of Term Sheet,
                  EOI, SPA etc. Coordination for Tax & legal due diligence Full
                  support during acquisitions of companies and groups
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  M&A Deal Structuring
                </div>
                <div className="services__content__right__content__span"></div>
                <div className="services__content__right__content__text">
                  Buy Side/Sell Side readiness assessment Target identification
                  and screening Pre Bid Advisory and diligence Term sheet/SPA
                  preparation & negotiation
                </div>
              </div>
            </div>
          </>
        ) : null}
      </div>
      <div className="services__background__img">
        <img src={PngServicesback} alt="PngServicesback" />
      </div>
    </section>
  );
}
