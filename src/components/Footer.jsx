import { PngFooterlogo } from "../assets";

export default function Footer() {
  return (
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
        </div>
      </div>
    </section>
  );
}
