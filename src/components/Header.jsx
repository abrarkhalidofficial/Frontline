import { useLayoutEffect, useState } from "react";

import ClickAwayListener from "react-click-away-listener";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import React from "react";
import { PngHeaderlogo } from "assets";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(true);
  const [isScroll, setIsScroll] = useState(false);
  const [show, setShow] = useState(false);
  function changeIsNavOpen() {
    if (window.innerWidth <= 945) {
      setIsNavOpen(false);
    } else {
      setIsNavOpen(true);
    }
  }

  useLayoutEffect(() => {
    changeIsNavOpen();
    window.addEventListener("resize", changeIsNavOpen);
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
      changeIsNavOpen();
    });
  }, []);

  return (
    <>
      <div className="header__section">
        <div
          className={
            isScroll
              ? "header__navbar header__navbar__center__active"
              : "header__navbar"
          }
        >
          <div className="header__navbar__center">
            <NavLink to="/" className="header__logo">
              <img src={PngHeaderlogo} alt="logo" />
            </NavLink>
            <div
              className="header__menu"
              onClick={() => {
                setIsNavOpen(!isNavOpen);
              }}
            >
              {isNavOpen ? <Y /> : <X />}
            </div>
            {isNavOpen ? (
              <ClickAwayListener
                onClickAway={() => {
                  if (window.innerWidth <= 945) {
                    setIsNavOpen(false);
                  }
                }}
              >
                <div className="header__entries">
                  <Link
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        document
                          .getElementById("home")
                          .scrollIntoView({ behavior: "smooth" });
                      }, 1000);
                    }}
                    className="header__entry"
                  >
                    Home
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        document
                          .getElementById("about")
                          .scrollIntoView({ behavior: "smooth" });
                      }, 1000);
                    }}
                    className="header__entry"
                  >
                    About
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        document
                          .getElementById("Services")
                          .scrollIntoView({ behavior: "smooth" });
                      }, 1000);
                    }}
                    className="header__entry"
                  >
                    Services
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        document
                          .getElementById("Industries")
                          .scrollIntoView({ behavior: "smooth" });
                      }, 1000);
                    }}
                    className="header__entry"
                  >
                    Industries
                  </Link>
                  <Link
                    to="/"
                    onClick={() => {
                      setTimeout(() => {
                        document
                          .getElementById("Team")
                          .scrollIntoView({ behavior: "smooth" });
                      }, 1000);
                    }}
                    className="header__entry"
                  >
                    Team
                  </Link>

                  <button className="header__entry__button">Evaluator</button>
                </div>
              </ClickAwayListener>
            ) : null}
          </div>
          {/* <div className="header__navbar__right"></div> */}
        </div>
      </div>
    </>
  );
}
function X() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="21"
      viewBox="0 0 30 21"
    >
      <g
        id="Icon_feather-menu"
        data-name="Icon feather-menu"
        transform="translate(-3 -7.5)"
      >
        <path
          id="Path_21895"
          data-name="Path 21895"
          d="M4.5,18h27"
          fill="none"
          stroke="#628200"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Path_21896"
          data-name="Path 21896"
          d="M4.5,9h27"
          fill="none"
          stroke="#628200"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
        <path
          id="Path_21897"
          data-name="Path 21897"
          d="M4.5,27h27"
          fill="none"
          stroke="#628200"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
}

function Y() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.82"
      height="31.82"
      viewBox="0 0 31.82 31.82"
    >
      <path
        id="Icon_ionic-md-add"
        data-name="Icon ionic-md-add"
        d="M29.25,19.5H19.5v9.75h-3V19.5H6.75v-3H16.5V6.75h3V16.5h9.75Z"
        transform="translate(-9.546 15.91) rotate(-45)"
        fill="#628200"
      />
    </svg>
  );
}
