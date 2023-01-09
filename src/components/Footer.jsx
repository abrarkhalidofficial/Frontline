import { PngFooterlogo } from "../assets";

export default function Footer() {
  return (
    <>
      <section className="footer">
        <div className="footer__content">
          <div className="footer__content__left">
            <img src={PngFooterlogo} alt="footerlogo" />
          </div>
          <div className="footer__content__right">
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.60156 10.2848C5.60156 5.94851 9.10867 2.44141 13.4449 2.44141C17.7812 2.44141 21.2883 5.94851 21.2883 10.2848C21.2883 14.9572 16.3358 21.4 14.3077 23.8538C13.8595 24.3916 13.0416 24.3916 12.5934 23.8538C10.5541 21.4 5.60156 14.9572 5.60156 10.2848ZM10.6445 10.2848C10.6445 11.8311 11.8995 13.086 13.4457 13.086C14.992 13.086 16.2469 11.8311 16.2469 10.2848C16.2469 8.73852 14.992 7.48358 13.4457 7.48358C11.8995 7.48358 10.6445 8.73852 10.6445 10.2848Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__info">
                  90, A-1 Gulberg II Lahore, Pakistan
                </div>
              </div>
            </div>
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
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M21.5466 17.2987L18.7005 16.9737C18.017 16.8953 17.3447 17.1306 16.8629 17.6124L14.8012 19.6741C11.6303 18.0606 9.03077 15.4723 7.41727 12.2901L9.49016 10.2172C9.97197 9.7354 10.2073 9.06312 10.1288 8.37962L9.8039 5.55601C9.66944 4.42432 8.71703 3.57275 7.57414 3.57275H5.6357C4.36956 3.57275 3.31631 4.62601 3.39474 5.89215C3.9886 15.4611 11.6415 23.1028 21.1992 23.6966C22.4653 23.775 23.5186 22.7218 23.5186 21.4556V19.5172C23.5298 18.3855 22.6782 17.4331 21.5466 17.2987Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__info">
                  0300-1234567
                </div>
              </div>
              <div className="footer__content__right__links__item">
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
                  abc123@gmail.com
                </div>
              </div>
            </div>
            <div className="footer__content__right__links">
              <div className="footer__content__right__links__item">
                <div className="footer__content__right__links__item__svg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6656 19.9502H1.32625C0.73168 19.9502 0.25 19.4682 0.25 18.8739V1.52644C0.25 0.931947 0.731755 0.450195 1.32625 0.450195H18.6738C19.2682 0.450195 19.75 0.931947 19.75 1.52644V18.8739C19.75 19.4683 19.2681 19.9502 18.6738 19.9502H13.7047V12.3987H16.2394L16.6189 9.45578H13.7047V7.57689C13.7047 6.72484 13.9413 6.1442 15.1631 6.1442L16.7215 6.14352V3.51133C16.452 3.47546 15.5269 3.39533 14.4507 3.39533C12.2038 3.39533 10.6656 4.76682 10.6656 7.28544V9.45578H8.12439V12.3987H10.6656V19.9502V19.9502Z"
                      fill="#93C007"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__svg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6656 19.9502H1.32625C0.73168 19.9502 0.25 19.4682 0.25 18.8739V1.52644C0.25 0.931947 0.731755 0.450195 1.32625 0.450195H18.6738C19.2682 0.450195 19.75 0.931947 19.75 1.52644V18.8739C19.75 19.4683 19.2681 19.9502 18.6738 19.9502H13.7047V12.3987H16.2394L16.6189 9.45578H13.7047V7.57689C13.7047 6.72484 13.9413 6.1442 15.1631 6.1442L16.7215 6.14352V3.51133C16.452 3.47546 15.5269 3.39533 14.4507 3.39533C12.2038 3.39533 10.6656 4.76682 10.6656 7.28544V9.45578H8.12439V12.3987H10.6656V19.9502V19.9502Z"
                      fill="#93C007"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__svg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6656 19.9502H1.32625C0.73168 19.9502 0.25 19.4682 0.25 18.8739V1.52644C0.25 0.931947 0.731755 0.450195 1.32625 0.450195H18.6738C19.2682 0.450195 19.75 0.931947 19.75 1.52644V18.8739C19.75 19.4683 19.2681 19.9502 18.6738 19.9502H13.7047V12.3987H16.2394L16.6189 9.45578H13.7047V7.57689C13.7047 6.72484 13.9413 6.1442 15.1631 6.1442L16.7215 6.14352V3.51133C16.452 3.47546 15.5269 3.39533 14.4507 3.39533C12.2038 3.39533 10.6656 4.76682 10.6656 7.28544V9.45578H8.12439V12.3987H10.6656V19.9502V19.9502Z"
                      fill="#93C007"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__svg">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.6656 19.9502H1.32625C0.73168 19.9502 0.25 19.4682 0.25 18.8739V1.52644C0.25 0.931947 0.731755 0.450195 1.32625 0.450195H18.6738C19.2682 0.450195 19.75 0.931947 19.75 1.52644V18.8739C19.75 19.4683 19.2681 19.9502 18.6738 19.9502H13.7047V12.3987H16.2394L16.6189 9.45578H13.7047V7.57689C13.7047 6.72484 13.9413 6.1442 15.1631 6.1442L16.7215 6.14352V3.51133C16.452 3.47546 15.5269 3.39533 14.4507 3.39533C12.2038 3.39533 10.6656 4.76682 10.6656 7.28544V9.45578H8.12439V12.3987H10.6656V19.9502V19.9502Z"
                      fill="#93C007"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div className="hr"></div>
        <div className="footer__bottom">
          <div className="footer__bottom__content">
            <div className="footer__bottom__content__left">
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact US</a>
            </div>
            <div className="footer__bottom__content__right">
              <p>Copyright © 2022 • Frontline</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
