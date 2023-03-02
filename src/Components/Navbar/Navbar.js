import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";
import NavLogo from "../../assets/main-logo.svg";
import { useTranslation } from "react-i18next";
import { ethers } from "ethers";
import UserContext from "../../UserContext";
import { Link as ScrollLink } from "react-scroll";
import LanguageSelector from "Components/LanguageSelector";
import { IoMdClose } from "react-icons/io";
import { Web3Button } from "@web3modal/react";
import LinkScroller from "Components/LinkScroller";

function Navbar() {
  const { connectWallet, disconnectWallet, provider, contracts, account } =
    useContext(UserContext);
  const [showComp, setShowComp] = useState(false);
  const isBelow1080px = useMediaQuery("(max-width : 1080px)");

  const disconnectButt = async (e) => {
    e.preventDefault();
    const disc = await disconnectWallet();
    if (disc) {
      setShowComp(!showComp);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const providera = new ethers.providers.Web3Provider(window.ethereum);
    const networka = await providera.getNetwork();
    console.log("CIAOOO", networka.chainId);
    if (networka.chainId !== 1) {
      alert("Sorry wrong ChainID, switch to ETH chain!");
      return false;
    } else {
      try {
        const success = await connectWallet();
        if (success) {
          console.log("ACC", account);
          setShowComp(!showComp);
        }
      } catch (error) {
        console.error(error);
        alert("Something wrong, did you have any wallet?", error);
        return;
      }
    }
  };

  const [showMediaIcons, setShowMediaIcons] = useState(false);
  // const [isOpen, setIsOpen] =useState(false)
  const mobileMenueRef = OutsideClickDetector(() => setShowMediaIcons(false));

  const [isHover, setIsHover] = useState(false);

  const isBellow1024px = useMediaQuery("(max-width : 64em)");

  const dropdownRef = OutsideClickDetector(() => {
    setIsHover(false);
  });
  const dropdownToggler = () => {
    setIsHover((val) => !val);
  };
  const { t } = useTranslation("common");
  const location = useLocation();

  return (
    <>
      <div className="container">
        <nav className="main-nav">
          <div className="logo">
            {" "}
            <div className="d-flex foot-logo">
              <NavLink to="/">
                <img src={NavLogo} alt="" className="" />
              </NavLink>
            </div>
          </div>
          <div
            ref={mobileMenueRef}
            className={`menu-link mobile-menu-link ${showMediaIcons && "open"}`}
          >
            {isBelow1080px && (
              <div className="-navbar-mobile-header">
                <img src={NavLogo} alt="" className="-navbar-mobile-logo" />

                <div className="-navbar-lang-close-btn">
                  <LanguageSelector />

                  <button
                    className="-navbar-close-btn"
                    onClick={() => setShowMediaIcons(false)}
                  >
                    <IoMdClose />
                  </button>
                </div>
              </div>
            )}

            <div className="-nav-links">
              <NavLink className="-nav-anchor" to="/">
                {t("Home")}
              </NavLink>

              <div className="about-dropdown" ref={dropdownRef}>
                <a className="-nav-anchor">
                  {t("About")}
                  <FaAngleDown />
                </a>

                <div className="nav-about-dropdown-wrapper">
                  <div className="nav-about-dropdown-content">
                    <LinkScroller
                      id="about-us"
                      to="/"
                      className="-nav-anchor"
                      wait={location.pathname === "/" ? 0 : 100}
                      onClick={() => setShowMediaIcons(false)}
                      scrollerOptions={{
                        offset: -20,
                      }}
                    >
                      About
                    </LinkScroller>

                    <NavLink className="-nav-anchor" to="/team">
                      {t("Team")}
                    </NavLink>

                    <a
                      href="https://docs.deelance.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="-nav-anchor"
                    >
                      {t("Whitepaper")}
                    </a>
                  </div>
                </div>
              </div>

              <NavLink className="-nav-anchor" to="/rewards">
                {t("header.links.win")}
              </NavLink>
              <NavLink className="-nav-anchor" to="/nft-market">
                {t("Nft Marketplace")}
              </NavLink>
              <NavLink className="-nav-anchor" to="/job-portal">
                {t("find job")}
              </NavLink>
              <NavLink className="-nav-anchor" to="/academy">
                {t("Academy")}
              </NavLink>
              {/* {account ? (
                <li>
                  <a href="/" className="p1-btn" onClick={disconnectButt}>
                    {`${account.substring(0, 6)}...${account.substring(
                      account.length - 4
                    )}`}
                  </a>
                </li>
              ) : (
                <li>
                  <a href="/" className="p1-btn" onClick={handleClick}>
                    {t("Connect")}
                  </a>
                </li>
              )} */}
              <div className="-nav-connect-btn">
                <Web3Button icon={false} />
              </div>

              {!isBelow1080px && <LanguageSelector />}
            </div>
          </div>

          {isBelow1080px && (
            <div className={`black-screen ${showMediaIcons && "show"}`}></div>
          )}

          {isBelow1080px && (
            <div className="hamburger-menu">
              <button
                onClick={() => setShowMediaIcons(!showMediaIcons)}
                className="hamburger"
              >
                <GiHamburgerMenu />
              </button>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
