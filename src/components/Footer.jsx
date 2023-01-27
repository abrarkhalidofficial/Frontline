import { PngFooterlogo } from "../assets";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__content">
          <div
            className="footer__content__left"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1200"
          >
            <img src={PngFooterlogo} alt="footerlogo" />
          </div>
          <div
            className="footer__content__right"
            data-aos="fade-up"
            data-aos-delay="70"
            data-aos-duration="1500"
          >
            <div className="footer__content__right__links">
              <div className="footer__content__right__links__item">
                <div className="footer__content__right__links__item__svg">
                  <svg
                    width="27"
                    height="28"
                    viewBox="0 0 27 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.60156 10.2848C5.60156 5.94851 9.10867 2.44141 13.4449 2.44141C17.7812 2.44141 21.2883 5.94851 21.2883 10.2848C21.2883 14.9572 16.3358 21.4 14.3077 23.8538C13.8595 24.3916 13.0416 24.3916 12.5934 23.8538C10.5541 21.4 5.60156 14.9572 5.60156 10.2848ZM10.6445 10.2848C10.6445 11.8311 11.8995 13.086 13.4457 13.086C14.992 13.086 16.2469 11.8311 16.2469 10.2848C16.2469 8.73852 14.992 7.48358 13.4457 7.48358C11.8995 7.48358 10.6445 8.73852 10.6445 10.2848Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__info">
                  33-Z, Second Floor Commercial Plaza, DHA Phase III, Lahore,
                  Pakistan.
                </div>
              </div>
            </div>
            <div className="footer__content__right__links">
              <a
                href="tel:0300-1234567"
                className="footer__content__right__links__item"
              >
                <div className="footer__content__right__links__item__svg">
                  <svg
                    width="27"
                    height="28"
                    viewBox="0 0 27 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M21.5466 17.2987L18.7005 16.9737C18.017 16.8953 17.3447 17.1306 16.8629 17.6124L14.8012 19.6741C11.6303 18.0606 9.03077 15.4723 7.41727 12.2901L9.49016 10.2172C9.97197 9.7354 10.2073 9.06312 10.1288 8.37962L9.8039 5.55601C9.66944 4.42432 8.71703 3.57275 7.57414 3.57275H5.6357C4.36956 3.57275 3.31631 4.62601 3.39474 5.89215C3.9886 15.4611 11.6415 23.1028 21.1992 23.6966C22.4653 23.775 23.5186 22.7218 23.5186 21.4556V19.5172C23.5298 18.3855 22.6782 17.4331 21.5466 17.2987Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__info">
                  042-37192244
                </div>
              </a>
              <a
                href="mailto:info@frontlineadv.com"
                className="footer__content__right__links__item"
              >
                <div className="footer__content__right__links__item__svg">
                  <svg
                    width="20"
                    height="14"
                    viewBox="0 0 20 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 11.9367V1.34074C0 1.32847 0.0183958 1.21196 0.0551874 0.991215L6.29137 6.326L0.0735832 12.3046C0.0245277 12.1329 0 12.0103 0 11.9367ZM0.827811 0.255383C0.913658 0.218591 1.0179 0.200195 1.14054 0.200195H17.9359C18.0463 0.200195 18.1567 0.218591 18.267 0.255383L12.0125 5.60856L11.1847 6.27081L9.54743 7.6137L7.9102 6.27081L7.08239 5.60856L0.827811 0.255383ZM0.846207 13.0221L7.11918 7.00664L9.54743 8.97499L11.9757 7.00664L18.2486 13.0221C18.1505 13.0589 18.0463 13.0773 17.9359 13.0773H1.14054C1.04243 13.0773 0.944318 13.0589 0.846207 13.0221ZM12.8035 6.326L19.0213 0.991215C19.0581 1.10159 19.0765 1.2181 19.0765 1.34074V11.9367C19.0765 12.0471 19.0581 12.1697 19.0213 12.3046L12.8035 6.326Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__info">
                  info@frontlineadv.co
                </div>
              </a>
            </div>
            <div className="footer__content__right__links">
              <div className="footer__content__right__links__item">
                <a
                  href="#"
                  className="footer__content__right__links__item__svg"
                >
                  <svg
                    width="21"
                    height="18"
                    viewBox="0 0 21 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.04533 4.61875H3.01781C1.64199 4.61875 0.75 3.71862 0.75 2.57764C0.75 1.41446 1.66836 0.533203 3.0717 0.533203C4.47389 0.533203 5.33608 1.41225 5.36359 2.57431C5.36359 3.71529 4.47389 4.61875 3.04533 4.61875ZM20.25 17.8668H15.9403V11.7734C15.9403 10.1785 15.2661 9.08966 13.7837 9.08966C12.6498 9.08966 12.0192 9.82442 11.7257 10.5325C11.6288 10.7563 11.6305 11.0575 11.6323 11.368C11.6326 11.4102 11.6328 11.4525 11.6328 11.4948V17.8668H7.36317C7.36317 17.8668 7.4182 7.07297 7.36317 6.09182H11.6328V7.9398C11.885 7.13179 13.2494 5.97861 15.4266 5.97861C18.1278 5.97861 20.25 7.67232 20.25 11.3195V17.8668ZM5.0429 6.0918H1.24219V17.8667H5.0429V6.0918Z"
                      fill="#93C007"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="hr" />
        <div className="footer__bottom">
          <div className="footer__bottom__content">
            <div className="footer__bottom__content__left">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Industies</a>
              <a href="#">Team</a>
            </div>
            <div className="footer__bottom__content__right">
              <p>
                Copyright@2023 •{" "}
                <a href="https://www.dsmeglobal.com/">
                  Design & Developed by DSME Global Links
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
