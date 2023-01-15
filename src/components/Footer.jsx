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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
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
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19.5 2.53992C18.7835 2.86621 18.0121 3.08687 17.2029 3.18546C18.0292 2.67842 18.6633 1.87443 18.9621 0.91668C18.1883 1.38616 17.3333 1.72771 16.42 1.91081C15.692 1.11386 14.6516 0.616211 13.5002 0.616211C11.2923 0.616211 9.50106 2.45307 9.50106 4.71832C9.50106 5.03992 9.53539 5.35213 9.60407 5.6526C6.2791 5.48123 3.33184 3.84978 1.35746 1.36504C1.01294 1.97302 0.816077 2.67842 0.816077 3.42959C0.816077 4.85213 1.52228 6.108 2.59588 6.84391C1.94119 6.82396 1.32312 6.63734 0.782884 6.33217V6.38264C0.782884 8.37091 2.16209 10.0294 3.9934 10.4049C3.65804 10.5012 3.30437 10.5493 2.93925 10.5493C2.68172 10.5493 2.42992 10.5247 2.18612 10.4765C2.69546 12.1056 4.17195 13.2923 5.92314 13.324C4.55423 14.4249 2.82823 15.081 0.954569 15.081C0.631801 15.081 0.312467 15.0622 0 15.0247C1.77065 16.1866 3.87436 16.8662 6.13259 16.8662C13.4922 16.8662 17.5153 10.6162 17.5153 5.19485C17.5153 5.01645 17.5119 4.83804 17.505 4.66316C18.2868 4.08452 18.9655 3.36269 19.5 2.53992Z"
                      fill="#93C007"
                    />
                  </svg>
                </div>
                <div className="footer__content__right__links__item__svg">
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.25 0.450195C7.60206 0.450195 7.27003 0.461419 6.23009 0.508869C5.19231 0.556202 4.48355 0.721037 3.86338 0.962077C3.22223 1.21121 2.6785 1.54459 2.13643 2.08662C1.5944 2.62869 1.26101 3.17243 1.01188 3.81357C0.770842 4.43375 0.606006 5.14251 0.558673 6.18028C0.511224 7.22022 0.5 7.55225 0.5 10.2002C0.5 12.8481 0.511224 13.1802 0.558673 14.2201C0.606006 15.2579 0.770842 15.9666 1.01188 16.5868C1.26101 17.228 1.5944 17.7717 2.13643 18.3138C2.6785 18.8558 3.22223 19.1892 3.86338 19.4384C4.48355 19.6794 5.19231 19.8442 6.23009 19.8915C7.27003 19.939 7.60206 19.9502 10.25 19.9502C12.8979 19.9502 13.23 19.939 14.2699 19.8915C15.3077 19.8442 16.0164 19.6794 16.6366 19.4384C17.2778 19.1892 17.8215 18.8558 18.3636 18.3138C18.9056 17.7717 19.239 17.228 19.4882 16.5868C19.7292 15.9666 19.894 15.2579 19.9413 14.2201C19.9888 13.1802 20 12.8481 20 10.2002C20 7.55225 19.9888 7.22022 19.9413 6.18028C19.894 5.14251 19.7292 4.43375 19.4882 3.81357C19.239 3.17243 18.9056 2.62869 18.3636 2.08662C17.8215 1.54459 17.2778 1.21121 16.6366 0.962077C16.0164 0.721037 15.3077 0.556202 14.2699 0.508869C13.23 0.461419 12.8979 0.450195 10.25 0.450195ZM10.2511 2.20685C12.8544 2.20685 13.1628 2.21679 14.1909 2.2637C15.1415 2.30705 15.6578 2.46588 16.0013 2.59941C16.4564 2.77628 16.7812 2.98756 17.1224 3.32876C17.4636 3.66993 17.6749 3.99472 17.8517 4.44982C17.9853 4.79339 18.1441 5.30964 18.1875 6.26026C18.2344 7.28836 18.2443 7.59674 18.2443 10.2001C18.2443 12.8035 18.2344 13.1118 18.1875 14.1399C18.1441 15.0905 17.9853 15.6068 17.8517 15.9504C17.6749 16.4055 17.4636 16.7303 17.1224 17.0714C16.7812 17.4126 16.4564 17.6239 16.0013 17.8008C15.6578 17.9343 15.1415 18.0931 14.1909 18.1365C13.163 18.1834 12.8546 18.1933 10.2511 18.1933C7.64751 18.1933 7.3392 18.1834 6.31122 18.1365C5.36061 18.0931 4.84435 17.9343 4.50079 17.8008C4.04568 17.6239 3.72089 17.4126 3.37973 17.0714C3.03856 16.7303 2.82724 16.4055 2.65037 15.9504C2.51685 15.6068 2.35801 15.0905 2.31467 14.1399C2.26776 13.1118 2.25781 12.8035 2.25781 10.2001C2.25781 7.59674 2.26776 7.28836 2.31467 6.26026C2.35801 5.30964 2.51685 4.79339 2.65037 4.44982C2.82724 3.99472 3.03852 3.66993 3.37973 3.32876C3.72089 2.98756 4.04568 2.77628 4.50079 2.59941C4.84435 2.46588 5.36061 2.30705 6.31122 2.2637C7.33932 2.21679 7.6477 2.20685 10.2511 2.20685ZM5.24219 10.2003C5.24219 7.43512 7.48377 5.19354 10.249 5.19354C13.0141 5.19354 15.2557 7.43512 15.2557 10.2003C15.2557 12.9655 13.0141 15.207 10.249 15.207C7.48377 15.207 5.24219 12.9655 5.24219 10.2003ZM10.25 13.4502C8.45507 13.4502 7 11.9951 7 10.2002C7 8.40526 8.45507 6.9502 10.25 6.9502C12.0449 6.9502 13.5 8.40526 13.5 10.2002C13.5 11.9951 12.0449 13.4502 10.25 13.4502ZM15.4551 6.1655C16.1013 6.1655 16.6252 5.6417 16.6252 4.99552C16.6252 4.34934 16.1013 3.8255 15.4551 3.8255C14.809 3.8255 14.2852 4.34934 14.2852 4.99552C14.2852 5.6417 14.809 6.1655 15.4551 6.1655Z"
                      fill="#93C007"
                    />
                  </svg>
                </div>
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
