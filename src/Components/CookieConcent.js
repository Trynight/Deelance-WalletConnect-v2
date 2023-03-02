import React from "react";
import CookieConsent from "react-cookie-consent";

function CookieConcent() {
  return (
    <>
      <CookieConsent location="bottom" debug enableDeclineButton flipButtons>
        This website uses cookies to improve the experience. Essential cookies
        will be stored in order to run the website.
        <span
          style={{
            fontSize: "10px",
          }}
        >
          You can accept or decline to store optional cookies.
        </span>
      </CookieConsent>
    </>
  );
}

export default CookieConcent;
