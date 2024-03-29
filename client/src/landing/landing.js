import React, { Fragment, useState } from "react";
import { NavLink, Link as Lk } from "react-router-dom";
import Logo from "../images/logo.png";
import Nat3 from "./image/automation.jpg";
import Nat2 from "./image/cctv.jpg";
import Nat1 from "./image/voice-control.jpg";
import { Link } from "react-scroll";
import Footer from "../container/layout/footer";
import { isAuth } from "../components/helper";

const Landing = () => {
  let [isChecked, setIsChecked] = useState(false);
  const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  return (
    <Fragment>
      <div className="navigation">
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(event) => setIsChecked(event.currentTarget.checked)}
          className="navigation__checkbox"
          id="navi-toggle"
        />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background">&nbsp;</div>
        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                onClick={(e) => toggleCheckbox(e)}
                className="navigation__link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <span>About Us</span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={(e) => toggleCheckbox(e)}
                className="navigation__link"
                activeClass="active"
                to="features"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <span>Features</span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={(e) => toggleCheckbox(e)}
                className="navigation__link"
                activeClass="active"
                to="packages"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <span>Our Packages</span>
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                onClick={(e) => toggleCheckbox(e)}
                className="navigation__link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <span>Contact Us</span>
              </Link>
            </li>
            {isAuth() && (
              <li className="navigation__item">
                <Lk to="/house">
                  <span>Dashboard</span>
                </Lk>
              </li>
            )}
            {!isAuth() && (
              <li className="navigation__item">
                <Lk to="/signin">
                  <span>Log In</span>
                </Lk>
              </li>
            )}
          </ul>
        </nav>
      </div>
      <header className="header_Landing">
        <div className="header_Landing__logo-box">
          <img src={Logo} alt="Logo" className="header_Landing__logo" />
        </div>
        <div className="header_Landing__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">
              Secure Home Automation
            </span>
            <span className="heading-primary--sub">Unfold the magic</span>
          </h1>

          <Link
            className="btn btn--white btn--animated"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={700}
          >
            <span>About Us</span>
          </Link>
        </div>
      </header>
      <main>
        <section className="section-about" id="about">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">About Us</h2>
          </div>
          <div className="rownat">
            <div className="col-1-of-2">
              <h3 className="heading-tertiary u-margin-bottom-small">
                Who are we?
              </h3>
              <p className="paragraph">
                We are a unique firm which specializes in providing home and
                bulding automation. We want to make automation a household term.
                It is no more a luxury. It is a need!
              </p>

              <h3 className="heading-tertiary u-margin-bottom-small">
                What makes us stand out?
              </h3>
              <p className="paragraph">
                When we talk about automation, not only the process but its
                security is also important. The tech we use is completely
                secure. The privacy of our customers is our highest priority.
              </p>
              <Link
                className="btn btn--green btn--animated"
                activeClass="active"
                to="packages"
                spy={true}
                smooth={true}
                offset={-70}
                duration={700}
              >
                <span className="btn-color-white">Our packages</span>
              </Link>
            </div>
            <div className="col-1-of-2">
              <div className="composition">
                <img
                  src={Nat1}
                  alt="composition 1"
                  className="composition__photo composition__photo--p1"
                />
                <img
                  alt="composition 2"
                  className="composition__photo composition__photo--p2"
                  src={Nat2}
                />
                <img
                  alt="composition 3"
                  className="composition__photo composition__photo--p3"
                  src={Nat3}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section-tours" id="packages">
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary btn-color-white">Our Packages</h2>
          </div>

          <div className="rownat">
            <div className="col-1-of-3">
              <div className="natcard">
                <div className="natcard__side natcard__side--front">
                  <div className="natcard__picture natcard__picture--1">
                    &nbsp;
                  </div>
                  <h4 className="natcard__heading">
                    <span className="natcard__heading-span natcard__heading-span--1">
                      Basic
                    </span>
                  </h4>
                  <div className="natcard__details">
                    <ul>
                      <li>1 or 2 BHK</li>
                      <li>Secure entry</li>
                      <li>Customized AC remote</li>
                    </ul>
                  </div>
                </div>
                <div className="natcard__side natcard__side--back natcard__side--back-1">
                  <div className="natcard__cta">
                    <div className="natcard__price-box">
                      <p className="natcard__price-only">Only</p>
                      <p className="natcard__price-value">₹ 30000</p>
                    </div>
                    <NavLink to="#" className="btn btn--white">
                      Book now!
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="natcard">
                <div className="natcard__side natcard__side--front">
                  <div className="natcard__picture natcard__picture--2">
                    &nbsp;
                  </div>
                  <h4 className="natcard__heading">
                    <span className="natcard__heading-span natcard__heading-span--2">
                      Advanced Package
                    </span>
                  </h4>
                  <div className="natcard__details">
                    <ul>
                      <li>3 BHK</li>
                      <li>Secure Entry</li>
                      <li>Customized AC remote</li>
                    </ul>
                  </div>
                </div>
                <div className="natcard__side natcard__side--back natcard__side--back-2">
                  <div className="natcard__cta">
                    <div className="natcard__price-box">
                      <p className="natcard__price-only">Only</p>
                      <p className="natcard__price-value">₹ 45000</p>
                    </div>
                    <NavLink to="#" className="btn btn--white">
                      Book now!
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-1-of-3">
              <div className="natcard">
                <div className="natcard__side natcard__side--front">
                  <div className="natcard__picture natcard__picture--3">
                    &nbsp;
                  </div>
                  <h4 className="natcard__heading">
                    <span className="natcard__heading-span natcard__heading-span--3">
                      Customized Package
                    </span>
                  </h4>
                  <div className="natcard__details">
                    <ul>
                      <li>Customized rooms</li>
                      <li>Customized Security</li>
                    </ul>
                  </div>
                </div>
                <div className="natcard__side natcard__side--back natcard__side--back-3">
                  <div className="natcard__cta">
                    <div className="natcard__price-box">
                      <p className="natcard__price-only">Only</p>
                      <p className="natcard__price-value">One Message away</p>
                    </div>
                    <Link
                      className="btn btn--white"
                      activeClass="active"
                      to="contact"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={700}
                    >
                      Contact Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section-features" id="features">
          <div className="rownat">
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-home feature-box__icon"></i>
                <h3 className="heading-tertiary  u-margin-bottom-small">
                  Smart Home
                </h3>
                <p className="feature-box__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere dolor vero corrupti voluptas
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-server-cloud feature-box__icon"></i>
                <h3 className="heading-tertiary  u-margin-bottom-small">
                  Cloud Server
                </h3>
                <p className="feature-box__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere dolor vero corrupti voluptas
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-smartphone feature-box__icon"></i>
                <h3 className="heading-tertiary  u-margin-bottom-small">
                  Mobile controlled
                </h3>
                <p className="feature-box__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere dolor vero corrupti voluptas
                </p>
              </div>
            </div>
            <div className="col-1-of-4">
              <div className="feature-box">
                <i className="icon-basic-world feature-box__icon"></i>
                <h3 className="heading-tertiary  u-margin-bottom-small">
                  Explore
                </h3>
                <p className="feature-box__text">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Facere dolor vero corrupti voluptas
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section-book" id="contact">
          <div className="rownat">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form-land">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">Contact Us now</h2>
                  </div>

                  <div className="form-land__group">
                    <input
                      type="text"
                      className="form-land__input"
                      placeholder="Full name"
                      id="name"
                      required
                    />
                    <label htmlFor="name" className="form-land__label">
                      Full name
                    </label>
                  </div>

                  <div className="form-land__group">
                    <input
                      type="email"
                      className="form-land__input"
                      placeholder="Email address"
                      id="email"
                      required
                    />
                    <label htmlFor="email" className="form-land__label">
                      Email address
                    </label>
                  </div>
                  <div className="form-land__group">
                    <input
                      type="text"
                      className="form-land__input"
                      placeholder="description"
                      id="description"
                      required
                    />
                    <label htmlFor="description" className="form-land__label">
                      description
                    </label>
                  </div>
                  <div className="form-land__group u-margin-bottom-medium">
                    <div className="form-land__radio-group">
                      <input
                        type="radio"
                        className="form-land__radio-input"
                        id="small"
                        name="size"
                      />
                      <label htmlFor="small" className="form-land__radio-label">
                        <span className="form-land__radio-button"></span>
                        Home
                      </label>
                    </div>

                    <div className="form-land__radio-group">
                      <input
                        type="radio"
                        className="form-land__radio-input"
                        id="large"
                        name="size"
                      />
                      <label htmlFor="large" className="form-land__radio-label">
                        <span className="form-land__radio-button"></span>
                        Building
                      </label>
                    </div>
                  </div>

                  <div className="form-land__group">
                    <button className="btn btn--green">Next step &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};
export default Landing;
