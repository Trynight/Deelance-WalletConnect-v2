import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
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

            <ul>
              <li>
                <NavLink to="/">{t("Home")}</NavLink>
              </li>
              <div className="drop-btn" ref={dropdownRef}>
                <a
                  href="#drop"
                  className="dp"
                  onMouseEnter={() =>
                    isBellow1024px ? null : setIsHover(true)
                  }
                  onMouseLeave={() =>
                    isBellow1024px ? null : setIsHover(false)
                  }
                  onClick={() => dropdownToggler()}
                >
                  {t("About")}
                  <FaAngleDown />
                </a>
                <div
                  className={isHover ? "dropdown-active" : "dropdown"}
                  onMouseEnter={() =>
                    isBellow1024px ? null : setIsHover(true)
                  }
                  onMouseLeave={() =>
                    isBellow1024px ? null : setIsHover(false)
                  }
                >
                  <li>
                    <ScrollLink
                      to="about-us"
                      style={{ cursor: "pointer" }}
                      className="a-link"
                      onClick={() => setShowMediaIcons(false)}
                    >
                      {t("About")}
                    </ScrollLink>
                  </li>

                  <li>
                    <NavLink to="/team">{t("Team")}</NavLink>
                  </li>

                  <li>
                    <a
                      href="https://docs.deelance.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("Whitepaper")}
                    </a>
                  </li>
                </div>
              </div>

              <li>
                <NavLink to="/rewards">{t("header.links.win")}</NavLink>
              </li>
              <li>
                <NavLink to="/nft-market">{t("Nft Marketplace")}</NavLink>
              </li>
              <li>
                <NavLink to="/job-portal">{t("find job")}</NavLink>
              </li>
              <li>
                <NavLink to="/academy">{t("Academy")}</NavLink>
              </li>
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
              <li><Web3Button icon={false} /></li>
              {!isBelow1080px && <LanguageSelector />}
            </ul>
          </div>

          {isBelow1080px && (
            <div className={`black-screen ${showMediaIcons && "show"}`}></div>
          )}

          {isBelow1080px && (
            <div className="hamburger-menu">
              <a
                href="#home"
                onClick={() => setShowMediaIcons(!showMediaIcons)}
              >
                <GiHamburgerMenu />
              </a>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default Navbar;
