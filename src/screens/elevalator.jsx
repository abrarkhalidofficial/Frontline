import ClickAwayListener from "react-click-away-listener";
import axios from "axios";
import { useState } from "react";

export default function Elevalator() {
  const [popupOpen, setPopupOpen] = useState(false);
  const [show, setShow] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const list = [
    "Telecommunication",
    "Paints",
    "Chemical",
    "Automobile",
    "Airline",
    "Locomotive",
    "Information",
    "Home appliances",
    "Logistics",
    "Construction",
    "Real estate",
    "Textile",
    "Infrastucture",
    "IT",
    "Insurance",
    "Oil & Gas",
  ];
  function generateRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min + 200));
  }
  return (
    <>
      {popupOpen && (
        <div className="animation__popup__wrapper">
          <ClickAwayListener
            onClickAway={() => {
              setPopupOpen(false);
            }}
          >
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPopupOpen(false);
                axios.post(
                  "https://frontline-api-production.up.railway.app/api/industry",
                  {
                    industry: e.target.industry.value,
                    revenue: e.target.revenue.value,
                    margin: e.target.margin.value,
                    email: e.target.email.value,
                    phone: e.target.phone.value,
                  }
                );
              }}
              className="animation__popup"
            >
              <button
                className="animation__popup__close"
                onClick={() => {
                  setPopupOpen(false);
                }}
                type="button"
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
              <div className="animation__popup__heading">Valuator</div>
              <div className="animation__popup__input">
                <label htmlFor="" className="animation__popup__input__label">
                  Industry
                </label>
                <select
                  type="text"
                  className="animation__popup__input__field"
                  placeholder="Industry name"
                  value={selectedIndustry}
                  name="industry"
                  onChange={(e) => {
                    setSelectedIndustry(e.target.value);
                  }}
                >
                  {list.map((item) => (
                    <option value={item}>{item}</option>
                  ))}
                </select>
                <div className="animation__popup__input__error"></div>
              </div>
              <div className="animation__popup__input">
                <label htmlFor="" className="animation__popup__input__label">
                  Revenue
                </label>
                <input
                  type="text"
                  className="animation__popup__input__field"
                  placeholder="Revenue here"
                  name="revenue"
                />
                <div className="animation__popup__input__error"></div>
              </div>
              <div className="animation__popup__input">
                <label htmlFor="" className="animation__popup__input__label">
                  Margin
                </label>
                <input
                  type="text"
                  className="animation__popup__input__field"
                  placeholder="Margin here"
                  name="margin"
                />
                <div className="animation__popup__input__error"></div>
              </div>
              <div className="animation__popup__input">
                <label htmlFor="" className="animation__popup__input__label">
                  Email
                </label>
                <input
                  type="text"
                  className="animation__popup__input__field"
                  placeholder="Email here"
                  name="email"
                />
                <div className="animation__popup__input__error"></div>
              </div>
              <div className="animation__popup__input">
                <label htmlFor="" className="animation__popup__input__label">
                  Phone
                </label>
                <input
                  type="text"
                  className="animation__popup__input__field"
                  placeholder="Phone here"
                  name="phone"
                />
                <div className="animation__popup__input__error"></div>
              </div>
              <button className="animation__popup__button" type="submit">
                Send
              </button>
            </form>
          </ClickAwayListener>
        </div>
      )}
      <div className="animation__container">
        <div className="animation__container__center__piece">
          <button
            className="animation__container__center__piece__button"
            onClick={() => {
              setShow(!show);
            }}
          >
            Frontline Advisory
          </button>
          {show &&
            list.map((item, index) => (
              <div
                className={
                  "animation__container__center__piece__entry " +
                  "animation__container__center__piece__entry__" +
                  (index + 1)
                }
                style={{
                  animation: `animation__container__center__piece__entry__${
                    index + 1
                  } 200ms both`,
                  animationDelay: `${generateRandomInteger(300, 1000)}ms`,
                }}
                key={index}
              >
                <div
                  className="animation__container__center__piece__entry__line"
                  style={{
                    animationDelay: `${generateRandomInteger(300, 1000)}ms`,
                  }}
                />
                <button
                  className="animation__container__center__piece__entry__button"
                  onClick={() => {
                    setPopupOpen(true);
                    setSelectedIndustry(item);
                  }}
                />
                <div className="animation__container__center__piece__entry__text">
                  {item}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
