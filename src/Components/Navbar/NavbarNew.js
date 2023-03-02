import React, { useState, useContext, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavbarNew.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaAngleDown } from "react-icons/fa";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import useMediaQuery from "hooks/useMediaQuery";
import NavLogo from "../../assets/main-logo.svg";
import { useTranslation } from "react-i18next";
import { ethers } from "ethers";
import UserContext from "../../UserContext";
import { Link as ScrollLink } from "react-scroll";
import { Web3Button } from "@web3modal/react";

const languages = [
  { value: "en", text: "english" },
  { value: "en", text: "English" },
  { value: "ar", text: "Arabic" },
  { value: "ru", text: "russian" },
  { value: "ja", text: "japan" },
];

function NavbarNew() {
  const { connectWallet, disconnectWallet, provider, contracts, account } =
    useContext(UserContext);
  const [showComp, setShowComp] = useState(false);

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

  const [lang, setLang] = useState("en");

  // This function put query that helps to
  // change the language
  const handleChange = (e) => {
    setLang(e.target.value);
    let loc = "/";
    window.location.replace(loc + "?lng=" + e.target.value);
  };

  return (
    <>
      <nav className={styles.navbar}>
        <div className="container">
          <div className={styles.navbarInner}>
            <div>
              <NavLink to="/" className={styles.navbarLogo}>
                <img src={NavLogo} alt="" />
              </NavLink>
            </div>
            <div ref={mobileMenueRef}>
              <ul className={styles.linkList}>
                <li>
                  <NavLink to="/" className={styles.link}>
                    {t("header.links.home")}
                  </NavLink>
                </li>
                <li ref={dropdownRef}>
                  <a href="#drop" className={styles.link}>
                    {t("header.links.about")}
                    <FaAngleDown />
                  </a>
                  <ul className={styles.dropdown}>
                    <li>
                      <ScrollLink
                        to="about-us"
                        onClick={() => setShowMediaIcons(false)}
                        className={styles.link}
                      >
                        {t("header.links.about_us_menu.1")}
                      </ScrollLink>
                    </li>

                    <li>
                      <NavLink to="/team" className={styles.link}>
                        {t("header.links.about_us_menu.2")}
                      </NavLink>
                    </li>

                    <li>
                      <a
                        href="https://docs.deelance.com/"
                        target="_blank"
                        rel="noreferrer"
                        className={styles.link}
                      >
                        {t("header.links.about_us_menu.3")}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/rewards" className={styles.link}>
                    {t("header.links.win")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/nft-market" className={styles.link}>
                    {t("header.links.nft_marketplace")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/job-portal" className={styles.link}>
                    {t("header.links.find_job")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/academy" className={styles.link}>
                    {t("header.links.academy")}
                  </NavLink>
                </li>
                {account ? (
                  <li>
                    <a href="/" onClick={disconnectButt}>
                      {`${account.substring(0, 6)}...${account.substring(
                        account.length - 4
                      )}`}
                    </a>
                  </li>
                ) : (
                  <li>
                    {/* <button className={styles.btn} onClick={handleClick}>
                      Connect
                    </button> */}
                    <Web3Button icon={false} />
                  </li>
                )}
                {/* <li>
              <select
                value={lang}
                onChange={handleChange}
                className="explore-btn"
              >
                {languages.map((item) => {
                  return (
                    <option key={item.value} value={item.value}>
                      {item.text}
                    </option>
                  );
                })}
              </select>
            </li> */}
              </ul>
            </div>
            {/* hamburget menu start  */}
            {/* <div>
            <a href="#home" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavbarNew;
