import { useState } from "preact/hooks";
import React from "react";
import AuthenticationService from "../../service/authentication.service";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");

  const handelSubmit = async () => {
    const res = await AuthenticationService.register(
      name,
      userName,
      email,
      password
    );
    if (res.status === 201) {
      alert("Register Succesfull");
    } else {
      alert("Error");
    }
  };

  return (
    <div className="LoginCardLayout">
      <div className="LoginStickyLogoBar">
        <nav className="LoginStickyLogoBar-nav">
          <a
            href="/-/login_page_log?se=%7B%22action%22%3A%22LinkClicked%22%2C%22sub_action%22%3A%22AsanaLogo%22%2C%22location%22%3A%22LoginPage%22%2C%22url%22%3A%22https%3A%2F%2Fasana.com%2F%22%2C%22name%22%3A%22LinkClicked%22%2C%22non_user_action_event%22%3Afalse%7D&allowed=login_page&dest=https%3A%2F%2Fasana.com%2F"
            className="PrimaryLink LoginStickyLogoBar-asanaLogoContainer BaseLink"
          >
            <img
              className="LoginStickyLogoBar-asanaLogo"
              src="https://d3ki9tyy5l5ruj.cloudfront.net/obj/6c76122a923c696febd26d2a843aa6daf960a3df/logo.png"
              alt="Asana logo"
            />
          </a>
        </nav>
      </div>
      <div className="LoginCardLayout-card">
        <div className="LoginCardLayout-backButtonContainer" />
        <div className="LoginCardLayout-card--content">
          <h2 className="TypographyPresentation TypographyPresentation--colorDefault TypographyPresentation--h2 TypographyPresentation--fontWeightNormal TypographyPresentation--textAlignCenter LoginCardLayout-title--withSubtitle LoginCardLayout-title">
            Welcome to&nbsp;Asana
          </h2>
          <span className="TypographyPresentation TypographyPresentation--colorWeak TypographyPresentation--xl TypographyPresentation--fontWeightMedium TypographyPresentation--textAlignCenter LoginCardLayout-subtitle">
            To get started, please sign in
          </span>
          <div className="LoginDefaultView-content">
            <div>{/* DEBUG-TAG: login */}</div>
            <div name="login" id="debug_page_load_marker" />
            <div
              className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--xlarge SecondaryButton--standardTheme SecondaryButton GoogleSignInButton--sparse GoogleSignInButton LoginDefaultView-ssoButton"
              role="button"
              tabIndex={0}
            >
              <svg
                className="ThemeableRectangularButtonPresentation-leftIcon GoogleSignInButton-logo--sparse GoogleSignInButton-logo"
                viewBox="0 0 18 18"
              >
                <path
                  d="M17.64,9.20454545 C17.64,8.56636364 17.5827273,7.95272727 17.4763636,7.36363636 L9,7.36363636 L9,10.845 L13.8436364,10.845 C13.635,11.97 13.0009091,12.9231818 12.0477273,13.5613636 L12.0477273,15.8195455 L14.9563636,15.8195455 C16.6581818,14.2527273 17.64,11.9454545 17.64,9.20454545 L17.64,9.20454545 Z"
                  fill="#4285F4"
                />
                <path
                  d="M9,18 C11.43,18 13.4672727,17.1940909 14.9563636,15.8195455 L12.0477273,13.5613636 C11.2418182,14.1013636 10.2109091,14.4204545 9,14.4204545 C6.65590909,14.4204545 4.67181818,12.8372727 3.96409091,10.71 L0.957272727,10.71 L0.957272727,13.0418182 C2.43818182,15.9831818 5.48181818,18 9,18 L9,18 Z"
                  fill="#34A853"
                />
                <path
                  d="M3.96409091,10.71 C3.78409091,10.17 3.68181818,9.59318182 3.68181818,9 C3.68181818,8.40681818 3.78409091,7.83 3.96409091,7.29 L3.96409091,4.95818182 L0.957272727,4.95818182 C0.347727273,6.17318182 0,7.54772727 0,9 C0,10.4522727 0.347727273,11.8268182 0.957272727,13.0418182 L3.96409091,10.71 L3.96409091,10.71 Z"
                  fill="#FBBC05"
                />
                <path
                  d="M9,3.57954545 C10.3213636,3.57954545 11.5077273,4.03363636 12.4404545,4.92545455 L15.0218182,2.34409091 C13.4631818,0.891818182 11.4259091,0 9,0 C5.48181818,0 2.43818182,2.01681818 0.957272727,4.95818182 L3.96409091,7.29 C4.67181818,5.16272727 6.65590909,3.57954545 9,3.57954545 L9,3.57954545 Z"
                  fill="#EA4335"
                />
              </svg>
              Continue with Google
            </div>
            <span className="SeparatorRow LoginDefaultView-separatorRow">
              <span className="SeparatorRow-horizontalLine" />
              <span className="TypographyPresentation TypographyPresentation--colorWeak TypographyPresentation--l SeparatorRow-label LoginDefaultView-separatorRowLabel">
                or
              </span>
              <span className="SeparatorRow-horizontalLine" />
            </span>
            <form className="LoginEmailForm" name="loginEmailForm">
              <div className="FormRowStructure--labelPlacementTop FormRowStructure LoginEmailForm-email">
                <div className="FormRowStructure-label">
                  <label
                    className="BaseLabel LabelPresentation"
                    htmlFor="lui_76"
                  >
                    Enter Name
                  </label>
                </div>
                <div className="FormRowStructure-contents">
                  <div className="ValidatedInput">
                    <input
                      type="text"
                      className="TextInputBase SizedTextInput SizedTextInput--medium TextInput TextInput--medium LoginEmailForm-emailInput"
                      id="lui_76"
                      name="e"
                      defaultValue=""
                      aria-required="true"
                      autoComplete="username"
                      autofocus=""
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="FormRowStructure-label">
                  <label
                    className="BaseLabel LabelPresentation"
                    htmlFor="lui_76"
                  >
                    User Name
                  </label>
                </div>
                <div className="FormRowStructure-contents">
                  <div className="ValidatedInput">
                    <input
                      type="text"
                      className="TextInputBase SizedTextInput SizedTextInput--medium TextInput TextInput--medium LoginEmailForm-emailInput"
                      id="lui_76"
                      name="e"
                      defaultValue=""
                      aria-required="true"
                      autoComplete="username"
                      autofocus=""
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>
                </div>
                <div className="FormRowStructure-label">
                  <label
                    className="BaseLabel LabelPresentation"
                    htmlFor="lui_76"
                  >
                    Email address
                  </label>
                </div>
                <div className="FormRowStructure-contents">
                  <div className="ValidatedInput">
                    <input
                      type="email"
                      className="TextInputBase SizedTextInput SizedTextInput--medium TextInput TextInput--medium LoginEmailForm-emailInput"
                      id="lui_76"
                      name="e"
                      defaultValue=""
                      aria-required="true"
                      autoComplete="username"
                      autofocus=""
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="FormRowStructure-label">
                  <label
                    className="BaseLabel LabelPresentation"
                    htmlFor="lui_76"
                  >
                    Password
                  </label>
                </div>
                <div className="FormRowStructure-contents">
                  <div className="ValidatedInput">
                    <input
                      type="password"
                      className="TextInputBase SizedTextInput SizedTextInput--medium TextInput TextInput--medium LoginEmailForm-emailInput"
                      id="lui_76"
                      name="e"
                      defaultValue=""
                      aria-required="true"
                      autoComplete="username"
                      autofocus=""
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div
                className="ThemeableRectangularButtonPresentation--isEnabled ThemeableRectangularButtonPresentation ThemeableRectangularButtonPresentation--large NuxButton LoginEmailForm-continueButton"
                role="button"
                tabIndex={0}
                onClick={handelSubmit}
              >
                Submit
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="LoginFooter">
        <nav>
          <ul className="LoginFooter-navRow">
            <li className="LoginFooter-navRowItem">
              <a href="https://asana.com/" className="HiddenLink BaseLink">
                <span className="TypographyPresentation TypographyPresentation--s">
                  Asana.com
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a
                href="https://asana.com/support"
                className="HiddenLink BaseLink"
              >
                <span className="TypographyPresentation TypographyPresentation--s">
                  Support
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a href="https://asana.com/apps" className="HiddenLink BaseLink">
                <span className="TypographyPresentation TypographyPresentation--s">
                  Integrations
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a href="https://forum.asana.com" className="HiddenLink BaseLink">
                <span className="TypographyPresentation TypographyPresentation--s">
                  Forum
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a
                href="https://developers.asana.com"
                className="HiddenLink BaseLink"
              >
                <span className="TypographyPresentation TypographyPresentation--s">
                  Developers &amp; API
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a
                href="https://asana.com/resources"
                className="HiddenLink BaseLink"
              >
                <span className="TypographyPresentation TypographyPresentation--s">
                  Resources
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a href="https://asana.com/guide" className="HiddenLink BaseLink">
                <span className="TypographyPresentation TypographyPresentation--s">
                  Guide
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a
                href="https://asana.com/templates"
                className="HiddenLink BaseLink"
              >
                <span className="TypographyPresentation TypographyPresentation--s">
                  Templates
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a
                href="https://asana.com/pricing"
                className="HiddenLink BaseLink"
              >
                <span className="TypographyPresentation TypographyPresentation--s">
                  Pricing
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a href="https://asana.com/terms" className="HiddenLink BaseLink">
                <span className="TypographyPresentation TypographyPresentation--s">
                  Terms
                </span>
              </a>
            </li>
            <li className="LoginFooter-navRowItem">
              <a
                href="https://asana.com/terms#privacy-policy"
                className="HiddenLink BaseLink"
              >
                <span className="TypographyPresentation TypographyPresentation--s">
                  Privacy
                </span>
              </a>
            </li>
          </ul>
        </nav>
        <span className="TypographyPresentation TypographyPresentation--colorWeak TypographyPresentation--s TypographyPresentation--textAlignCenter">
          This site is protected by reCAPTCHA and the Google{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://policies.google.com/privacy"
            className="SecondaryLink BaseLink"
          >
            Privacy Policy
          </a>{" "}
          and{" "}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://policies.google.com/terms"
            className="SecondaryLink BaseLink"
          >
            Terms of Service
          </a>{" "}
          apply.
        </span>
      </div>
    </div>
  );
}
