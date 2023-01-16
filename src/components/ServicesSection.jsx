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
                  Stock market listing advisory (IPO)
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Company preparation for IPO
                </div>
                <div className="services__content__right__content__text">
                  Arrangement of underwriting syndicate
                </div>
                <div className="services__content__right__content__text">
                  Arrangement of Book Builders
                </div>
                <div className="services__content__right__content__text">
                  Coordination with PSX/SECP etc.
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Private Equity Placement
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Company Valuation
                </div>
                <div className="services__content__right__content__text">
                  Identification of potential private equity investors
                </div>
                <div className="services__content__right__content__text">
                  Deal negotiation
                </div>
                <div className="services__content__right__content__text">
                  Term Sheet Preparation
                </div>
              </div>
            </div>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Arrangement of Bank Financing
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Bilateral/Syndicated Facility
                </div>
                <div className="services__content__right__content__text">
                  Project Finance facility
                </div>
                <div className="services__content__right__content__text">
                  Commercial Paper
                </div>
                <div className="services__content__right__content__text">
                  Sukuk/Term Finance Certificates etc.
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  M&A Deal Structuring
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Identification of Company for acquisition
                </div>
                <div className="services__content__right__content__text">
                  Complete understanding of substantial takeover laws
                </div>
                <div className="services__content__right__content__text">
                  Coordination with CCP, MTO, SECP, PSX
                </div>
                <div className="services__content__right__content__text">
                  Tax & legal structuring of the transactions
                </div>
              </div>
            </div>
          </>
        ) : selectedTab === 1 ? (
          <>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Complete deal negotiation
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Negotiation with the Target Company
                </div>
                <div className="services__content__right__content__text">
                  Preparation of Term Sheet, EOI, SPA etc.
                </div>
                <div className="services__content__right__content__text">
                  Coordination for Tax & legal due diligence
                </div>
                <div className="services__content__right__content__text">
                  Full support during acquisitions of companies and groups
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  M&A Deal Structuring
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Buy Side/Sell Side readiness assessment
                </div>
                <div className="services__content__right__content__text">
                  Target identification and screening
                </div>
                <div className="services__content__right__content__text">
                  Pre Bid Advisory and diligence
                </div>
                <div className="services__content__right__content__text">
                  Term sheet/SPA preparation & negotiation
                </div>
              </div>
            </div>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Reverse Merger – Technical Listing
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Identification of Company for acquisition
                </div>
                <div className="services__content__right__content__text">
                  Complete understanding of substantial takeover laws
                </div>
                <div className="services__content__right__content__text">
                  Coordination with CCP, MTO, SECP, PSX
                </div>
                <div className="services__content__right__content__text">
                  Tax & legal structuring of the transactions
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  360º M&A advisory
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Generating acquisition deal flow
                </div>
                <div className="services__content__right__content__text">
                  Providing valuation and structuring advice
                </div>
                <div className="services__content__right__content__text">
                  Delivering funding solutions
                </div>
                <div className="services__content__right__content__text">
                  Pre acquisition planning- post acquisition support
                </div>
              </div>
            </div>
          </>
        ) : selectedTab === 2 ? (
          <>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Deal Advisory
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Privatisations
                </div>
                <div className="services__content__right__content__text">
                  Financial Due Diligence
                </div>
                <div className="services__content__right__content__text">
                  Corporate Finance (M&A Advisory, Infrastructure & Debt
                  Advisory)
                </div>
                <div className="services__content__right__content__text">
                  Valuations and financial analyses
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Financial Advisory
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Financial Modelling & Business Planning
                </div>
                <div className="services__content__right__content__text">
                  Company Valuation
                </div>
                <div className="services__content__right__content__text">
                  Business Process Outsourcing
                </div>
                <div className="services__content__right__content__text">
                  Financial Controls and System Development
                </div>
              </div>
            </div>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Transaction Structuring
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Joint Ventures/ Capital Market Offerings
                </div>
                <div className="services__content__right__content__text">
                  Mergers/Spin-offs
                </div>
                <div className="services__content__right__content__text">
                  Public Private Partnerships
                </div>
                <div className="services__content__right__content__text">
                  Optimization of tax, accounting, and other objectives of the
                  deal
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Financial Modelling and Projections
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Discounted Cash Flow based modelling
                </div>
                <div className="services__content__right__content__text">
                  Investment proposals & financial models and business plan
                </div>
                <div className="services__content__right__content__text">
                  Validation of Financial Models- post audit
                </div>
                <div className="services__content__right__content__text">
                  Preparation of Interactive and Dynamic Dashboards
                </div>
              </div>
            </div>
          </>
        ) : selectedTab === 3 ? (
          <>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Financial Planning & Analysis
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Budgeting and Forecasting
                </div>
                <div className="services__content__right__content__text">
                  Business Analysis
                </div>
                <div className="services__content__right__content__text">
                  Advanced Financial Modelling and Analysis
                </div>
                <div className="services__content__right__content__text">
                  Financial Reporting and Balance Sheet Restructuring
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Finance Department Leadership
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Cash Flow Forecasting and Planning
                </div>
                <div className="services__content__right__content__text">
                  Capital Structure Advice
                </div>
                <div className="services__content__right__content__text">
                  Financial Risk Management
                </div>
                <div className="services__content__right__content__text">
                  Business Intelligence Services
                </div>
              </div>
            </div>
            <div className="services__content__right">
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Corporate and Regulatory Support
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Recommendation of optimal corporate structure
                </div>
                <div className="services__content__right__content__text">
                  Regulatory Filings with SECP, PSX, CDC, FBR etc.
                </div>
                <div className="services__content__right__content__text">
                  Company readiness and listing Compliance
                </div>
                <div className="services__content__right__content__text">
                  Coordination with regulators (SECP,FBR, CDC,PSX etc.)
                </div>
              </div>
              <div className="services__content__right__content">
                <div className="services__content__right__content__heading">
                  Taxation Services
                </div>
                <div className="services__content__right__content__span" />
                <div className="services__content__right__content__text">
                  Tax Strategic Consulting and Advisory
                </div>
                <div className="services__content__right__content__text">
                  Corporate and international tax structuring
                </div>
                <div className="services__content__right__content__text">
                  Group tax structuring (Single tax return)
                </div>
                <div className="services__content__right__content__text">
                  Tax Litigation support and Representations
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
