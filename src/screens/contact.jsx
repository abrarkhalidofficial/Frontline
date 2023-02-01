import { PngContactbackground, SvgContactlogo } from "../assets";

export default function Contact() {
  return (
    <>
      <section className="contact" id="Contact">
        <div className="contact__logo">
          <img src={SvgContactlogo} alt="contactlogo" />
        </div>
        <div className="contact__all__con">
          <div className="contact__lorem">
            We'd love to hear from you! If you have any questions or comments,
            please feel free to reach out to us using the contact information
            below.
          </div>
        </div>
        <div className="contact__bottom">
          <div className="all__contact__bottom__con">
            <div className="contact__bottom__svg">
              <svg
                width="58"
                height="47"
                viewBox="0 0 58 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M51.8448 6.49532L54.2881 4.95141H51.3978H5.88448H2.99425L5.43756 6.49532L28.1942 20.8751L28.6412 21.1575L29.0881 20.8751L51.8448 6.49532ZM51.3978 41.1362H52.2345V40.2996V11.54V10.0216L50.9509 10.8327L28.6412 24.9301L6.3314 10.8327L5.04784 10.0216V11.54V40.2996V41.1362H5.88448H51.3978ZM51.3978 0.872775C54.0562 0.872775 56.2504 3.07789 56.2504 5.78805V40.2996C56.2504 43.0097 54.0562 45.2148 51.3978 45.2148H5.88448C3.22613 45.2148 1.03196 43.0097 1.03196 40.2996V5.78805C1.03196 3.07788 3.22613 0.872775 5.88448 0.872775H51.3978Z"
                  fill="#789E02"
                  stroke="#789E02"
                  stroke-width="1.67329"
                />
              </svg>
            </div>
            <div className="contact__bottom__heading">Email Address</div>
            <div className="contact__bottom__info">info@frontlineadv.co</div>
          </div>
          <div className="all__contact__bottom__con">
            <div className="contact__bottom__svg">
              <svg
                width="52"
                height="52"
                viewBox="0 0 52 52"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask id="path-1-inside-1_720_12" fill="white">
                  <path d="M10.5604 5.70671C10.7305 8.23012 11.1558 10.6968 11.8362 13.0501L8.43389 16.4525C7.27142 13.0501 6.53425 9.44929 6.27907 5.70671H10.5604ZM38.5163 39.7869C40.9263 40.4674 43.393 40.8926 45.8881 41.0628V45.2873C42.1455 45.0322 38.5447 44.295 35.114 43.1609L38.5163 39.7869ZM13.2822 0.0361328H3.35873C1.79932 0.0361328 0.523438 1.31201 0.523438 2.87142C0.523438 29.4948 22.1 51.0713 48.7233 51.0713C50.2828 51.0713 51.5586 49.7955 51.5586 48.236V38.3409C51.5586 36.7815 50.2828 35.5056 48.7233 35.5056C45.2076 35.5056 41.7769 34.9385 38.6014 33.8895C38.3178 33.7761 38.006 33.7477 37.7224 33.7477C36.9853 33.7477 36.2764 34.0312 35.7094 34.57L29.4717 40.8076C21.4479 36.6964 14.87 30.1469 10.7872 22.123L17.0248 15.8854C17.8187 15.0915 18.0455 13.9858 17.7336 12.9934C16.6846 9.81788 16.1175 6.41553 16.1175 2.87142C16.1175 1.31201 14.8416 0.0361328 13.2822 0.0361328Z" />
                </mask>
                <path
                  d="M10.5604 5.70671C10.7305 8.23012 11.1558 10.6968 11.8362 13.0501L8.43389 16.4525C7.27142 13.0501 6.53425 9.44929 6.27907 5.70671H10.5604ZM38.5163 39.7869C40.9263 40.4674 43.393 40.8926 45.8881 41.0628V45.2873C42.1455 45.0322 38.5447 44.295 35.114 43.1609L38.5163 39.7869ZM13.2822 0.0361328H3.35873C1.79932 0.0361328 0.523438 1.31201 0.523438 2.87142C0.523438 29.4948 22.1 51.0713 48.7233 51.0713C50.2828 51.0713 51.5586 49.7955 51.5586 48.236V38.3409C51.5586 36.7815 50.2828 35.5056 48.7233 35.5056C45.2076 35.5056 41.7769 34.9385 38.6014 33.8895C38.3178 33.7761 38.006 33.7477 37.7224 33.7477C36.9853 33.7477 36.2764 34.0312 35.7094 34.57L29.4717 40.8076C21.4479 36.6964 14.87 30.1469 10.7872 22.123L17.0248 15.8854C17.8187 15.0915 18.0455 13.9858 17.7336 12.9934C16.6846 9.81788 16.1175 6.41553 16.1175 2.87142C16.1175 1.31201 14.8416 0.0361328 13.2822 0.0361328Z"
                  fill="#789E02"
                />
                <path
                  d="M11.8362 13.0501L13.0194 14.2333L13.7182 13.5346L13.4437 12.5853L11.8362 13.0501ZM8.43389 16.4525L6.85048 16.9935L7.71856 19.5342L9.61708 17.6356L8.43389 16.4525ZM6.27907 5.70671V4.03343H4.48782L4.60966 5.82053L6.27907 5.70671ZM45.8881 41.0628H47.5613V39.4997L46.0019 39.3933L45.8881 41.0628ZM45.8881 45.2873L45.7742 46.9567L47.5613 47.0786V45.2873H45.8881ZM35.114 43.1609L33.9357 41.9727L31.9989 43.8934L34.5888 44.7496L35.114 43.1609ZM38.6014 33.8895L37.9799 35.4431L38.0277 35.4622L38.0765 35.4783L38.6014 33.8895ZM35.7094 34.57L34.5569 33.3568L34.5413 33.3716L34.5262 33.3868L35.7094 34.57ZM29.4717 40.8076L28.7087 42.2968L29.7932 42.8525L30.6549 41.9908L29.4717 40.8076ZM10.7872 22.123L9.60399 20.9398L8.74485 21.799L9.29586 22.8819L10.7872 22.123ZM17.7336 12.9934L19.3299 12.4917L19.3263 12.4801L19.3225 12.4685L17.7336 12.9934ZM8.89086 5.81926C9.06861 8.45586 9.51346 11.041 10.2288 13.5149L13.4437 12.5853C12.7981 10.3526 12.3923 8.00438 12.2299 5.59416L8.89086 5.81926ZM10.653 11.8669L7.2507 15.2693L9.61708 17.6356L13.0194 14.2333L10.653 11.8669ZM10.0173 15.9115C8.90181 12.6466 8.1937 9.18935 7.94848 5.59289L4.60966 5.82053C4.8748 9.70923 5.64104 13.4536 6.85048 16.9935L10.0173 15.9115ZM6.27907 7.38H10.5604V4.03343H6.27907V7.38ZM38.0616 41.3972C40.5838 42.1093 43.1648 42.5542 45.7742 42.7322L46.0019 39.3933C43.6213 39.231 41.2688 38.8254 38.971 38.1766L38.0616 41.3972ZM44.2148 41.0628V45.2873H47.5613V41.0628H44.2148ZM46.0019 43.6179C42.4058 43.3727 38.9431 42.6643 35.6392 41.5721L34.5888 44.7496C38.1463 45.9256 41.8851 46.6916 45.7742 46.9567L46.0019 43.6179ZM36.2922 44.349L39.6945 40.975L37.3381 38.5988L33.9357 41.9727L36.2922 44.349ZM13.2822 -1.63715H3.35873V1.70942H13.2822V-1.63715ZM3.35873 -1.63715C0.875187 -1.63715 -1.14985 0.387883 -1.14985 2.87142H2.19672C2.19672 2.23614 2.72345 1.70942 3.35873 1.70942V-1.63715ZM-1.14985 2.87142C-1.14985 30.4189 21.1759 52.7446 48.7233 52.7446V49.398C23.0241 49.398 2.19672 28.5707 2.19672 2.87142H-1.14985ZM48.7233 52.7446C51.2069 52.7446 53.2319 50.7196 53.2319 48.236H49.8853C49.8853 48.8713 49.3586 49.398 48.7233 49.398V52.7446ZM53.2319 48.236V38.3409H49.8853V48.236H53.2319ZM53.2319 38.3409C53.2319 35.8573 51.2069 33.8323 48.7233 33.8323V37.1789C49.3586 37.1789 49.8853 37.7056 49.8853 38.3409H53.2319ZM48.7233 33.8323C45.3863 33.8323 42.1328 33.2939 39.1262 32.3006L38.0765 35.4783C41.421 36.5832 45.0288 37.1789 48.7233 37.1789V33.8323ZM39.2228 32.3359C38.6525 32.1077 38.0952 32.0744 37.7224 32.0744V35.421C37.811 35.421 37.8769 35.4256 37.9253 35.4325C37.9737 35.4394 37.9883 35.4464 37.9799 35.4431L39.2228 32.3359ZM37.7224 32.0744C36.542 32.0744 35.4244 32.5327 34.5569 33.3568L36.8618 35.7831C37.1285 35.5298 37.4285 35.421 37.7224 35.421V32.0744ZM34.5262 33.3868L28.2885 39.6244L30.6549 41.9908L36.8926 35.7531L34.5262 33.3868ZM30.2347 39.3184C22.5204 35.3658 16.1994 29.0699 12.2785 21.3642L9.29586 22.8819C13.5406 31.2239 20.3753 38.027 28.7087 42.2968L30.2347 39.3184ZM11.9704 23.3062L18.208 17.0686L15.8416 14.7022L9.60399 20.9398L11.9704 23.3062ZM18.208 17.0686C19.462 15.8146 19.8204 14.0523 19.3299 12.4917L16.1373 13.4951C16.2706 13.9192 16.1754 14.3684 15.8416 14.7022L18.208 17.0686ZM19.3225 12.4685C18.329 9.46124 17.7908 6.23604 17.7908 2.87142H14.4442C14.4442 6.59503 15.0402 10.1745 16.1448 13.5183L19.3225 12.4685ZM17.7908 2.87142C17.7908 0.387883 15.7658 -1.63715 13.2822 -1.63715V1.70942C13.9175 1.70942 14.4442 2.23614 14.4442 2.87142H17.7908Z"
                  fill="#789E02"
                  mask="url(#path-1-inside-1_720_12)"
                />
              </svg>
            </div>
            <div className="contact__bottom__heading">Contact us</div>
            <div className="contact__bottom__info">042-37192244</div>
          </div>
          <div className="all__contact__bottom__con">
            <div className="contact__bottom__svg">
              <svg
                width="41"
                height="58"
                viewBox="0 0 41 58"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.3234 49.4442L20.9796 50.2865L21.6405 49.4479C24.6845 45.5855 28.283 40.5493 31.125 35.4316C33.949 30.3462 36.0995 25.0531 36.0995 20.7139C36.0995 12.3695 29.3277 5.59779 20.9834 5.59779C12.6391 5.59779 5.86732 12.3695 5.86732 20.7139C5.86732 25.0126 8.04868 30.3219 10.8849 35.4214C13.7404 40.5555 17.3379 45.6118 20.3234 49.4442ZM20.9834 56.5743C20.9136 56.494 20.8385 56.4072 20.7582 56.314C20.2163 55.6849 19.4407 54.7681 18.5094 53.6206C16.646 51.3246 14.1628 48.1096 11.6813 44.4317C9.19823 40.7514 6.72712 36.6227 4.87934 32.4982C3.02664 28.3627 1.82883 24.2929 1.82883 20.7139C1.82883 10.1236 10.3932 1.5593 20.9834 1.5593C31.5736 1.5593 40.138 10.1236 40.138 20.7139C40.138 24.2929 38.9402 28.3627 37.0875 32.4982C35.2397 36.6227 32.7686 40.7514 30.2855 44.4317C27.804 48.1096 25.3208 51.3246 23.4574 53.6206C22.5261 54.7681 21.7505 55.6849 21.2085 56.314C21.1283 56.4072 21.0531 56.494 20.9834 56.5743Z"
                  fill="#789E02"
                  stroke="#789E02"
                  stroke-width="1.67329"
                />
                <path
                  d="M27.2865 20.7139C27.2865 24.195 24.4646 27.017 20.9835 27.017C17.5024 27.017 14.6804 24.195 14.6804 20.7139C14.6804 17.2328 17.5024 14.4109 20.9835 14.4109C24.4646 14.4109 27.2865 17.2328 27.2865 20.7139Z"
                  fill="#789E02"
                  stroke="#789E02"
                  stroke-width="1.67329"
                />
              </svg>
            </div>
            <div className="contact__bottom__heading">Location</div>
            <div className="contact__bottom__info">
              33-Z, Second Floor Commercial Plaza, DHA Phase III, Lahore,
              Pakistan.{" "}
            </div>
          </div>
        </div>

        <div className="contactus__background">
          <img src={PngContactbackground} alt="PngContactbackground" />
        </div>
      </section>
      <section className="contactform">
        <div className="contactform__content">
          <div className="contactform__content__left">
            <div className="contactform__content__left__heading">
              Get In Touch <span>With Us</span>
            </div>
            <div className="contactform__content__left__info">
              Once form submitted. Show a message: Thank you for considering
              Frontline Advisory as your trusted advisors. We look forward to
              the opportunity to serve you.
            </div>
          </div>
          <div className="contactform__content__right">
            <div className="contactform__content__right__input">
              {" "}
              <input type="Name" placeholder="Name" />
              <input type="email" name="email" id="email" placeholder="Email" />
              <input type="text" placeholder="Subject" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
