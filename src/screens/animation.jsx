import { useState } from "react";

export default function Animation() {
  const [show, setShow] = useState(true);
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
  return (
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
                index
              }
              key={index}
            >
              <div className="animation__container__center__piece__entry__line" />
              <button className="animation__container__center__piece__entry__button" />
              <div className="animation__container__center__piece__entry__text">
                {item}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
