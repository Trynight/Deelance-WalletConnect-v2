import React from "react";
import "./Team.css";
import { FaLinkedin } from "react-icons/fa";
import Addy from '../../assets/team/addy.png'
import Deeba from '../../assets/team/deeba.png'
import Don from '../../assets/team/don.png'
import Guru from '../../assets/team/gurpreet.png'
import ROBERTO from '../../assets/team/roberto.png'
import Noor from '../../assets/team/noor.png'
import Jhosi from '../../assets/team/jhosi.png'
import Jagjeet from '../../assets/team/jagjeet.png'
import Shoiab from '../../assets/team/suhaib.png'
import Viki from '../../assets/team/viki.png'

function Team() {
  return (
    <section className="team">
      <div className="container">
        <div className="team-head text-center">
          <h1>TEAM</h1>
          <div className="team-sub ">
            <p>
              DeeLancer team is composed of people that worked as freelancers
              ,understand the frustrations and pain points people face web2
              Problems . We're here to help break the ice by connecting a wide
              range of people and skill sets in web3 Space and bring ownership
              to all .
            </p>
          </div>
        </div>

        <div className="team-grid ">
        <div className="mb-12">
              <div className="team-box">
                <div className="linked">
                  <a className="linked-in" href="https://www.linkedin.com/in/suresh-joshi-61b3998" target='_blank' rel="noreferrer">
                    <FaLinkedin />{" "}
                  </a>{" "}
                </div>
                <div className="text-center box-img">
                  <img
                    src={Jhosi}
                    alt=""
                  />
                  <h2>SURESH JOSHI</h2>
                  <p>CO- FOUNDER</p>
                </div>
                <div className="team_details">
                  <p>
                    Having worked in the digital space for over 20 years he has
                    developed and delivered innovative communications across all
                    paid search media. His love for performance marketing and
                    his association with Finixio (London) an affiliation
                    specialist in the blockchain and crypto space, as a partner
                    & performance marketing head only enriched his clarity and
                    vision on the possibilities of blockchain...
                  </p>
                </div>
              </div>
            </div>
   

          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/jagjeet-jena-a48452163" target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={Jagjeet}
                  alt=""
                />
                <h2>JAGJEET JENA</h2>
                <p>PARTNER</p>
              </div>
              <div className="team_details">
                <p>
                  CEO and Co-Founder of Battle Infinity( Metaverse Battle Games
                  Platform ). having vast Technical experience in
                  leadership.Always self motivated to find ideas, solution and
                  face challenging environment to prove skills. A creative mind
                  working alongside a superior team, on course to deliver a
                  project that exceeds all expectations.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/roberto-cinque/" target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={ROBERTO}
                  alt=""
                />
                <h2>ROBERTO</h2>
                <p>PROJECT HEAD</p>
              </div>
              <div className="team_details">
                <p>
                  As an experienced full stack developer I've worked in the Web,
                  Blockchain for 7 years. During this time I built dozens of
                  modern and professional platforms which are making profits for
                  several companies worldwide. Building websites, crypto coins
                  and tokens, exchange platforms, defi platforms, NFT related
                  platforms, my major work fields.
                </p>
              </div>
            </div>
          </div>

          {/* 2rd */}
          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/suhaibt/" target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={Shoiab}
                  alt=""
                />
                <h2>SHOAIB</h2>
                <p>SENIOR DEVELOPER</p>
              </div>
              <div className="team_details">
                <p>
                  Experienced in Technology & Financial services sector, with 9
                  years of technical experience in strategic leadership
                  .Highlighted by consistent success, validated by tangible
                  KPIs, with a demonstrated history of working across
                  traditional and digital sets. He a creative mind working
                  alongside a superior team, on course to deliver a project that
                  exceeds all expectations .
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/deeba-965b49121"  target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={Deeba}
                  alt=""
                />
                <h2>DEBBA</h2>
                <p>CMO</p>
              </div>
              <div className="team_details">
                <p>
                  Communication and content expert ,with over 7years experience
                  in Marketing and Business Development. she is innovator
                  fascinated with Potential of blockchain. Debba has unique
                  abilities and is an excellent individual with special- Mindset
                  that distinguishes from the crowd .
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/adnan-a-rahi-9a2573216/" target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={Addy}
                  alt=""
                />
                <h2>ADNAN A RAHI</h2>
                <p>QC/ SECURITY SPECIALIST</p>
              </div>
              <div className="team_details">
                <p>
                  Addy began career as freelancer and completed 1000 plus
                  assignments since three years , thought-out I build and
                  secured tokens , launchpad’s , defi and other web3
                  applications .
                </p>
              </div>
            </div>
          </div>
          {/* 3rd */}
          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/dommeti-k-329235257/" target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={Don}
                  alt=""
                />
                <h2>DOMMETI</h2>
                <p>Founder / CEO</p>
              </div>
              <div className="team_details">
                <p>
                  Having been in market since two decades and his experience is
                  from the tech, Engineering and investment side. Demonstrated
                  ability to identify emerging global trends and then
                  create/execute vision to build/rationalize investment
                  businesses across various asset classes and geographical
                  markets. web3 is his vision, and he is responsible for
                  developing and building a specialist team to make web3
                  Platform the home of freelancers.
                </p>
              </div>
            </div>
          </div>
  

          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/gurpreetsingh993/" target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={Guru}
                  alt=""
                />
                <h2>GURPREET SINGH</h2>
                <p>SOCIAL MEDIA MANAGER</p>
              </div>
              <div className="team_details">
                <p>
                  Social media marketer with more than five years of experience
                  collaborating with marketing agencies and different types of
                  startups. Creativity and data analysis are his strength,
                  Strategist, innovative and social media.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/noor-alam-aa722314b/" target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={Noor}
                  alt=""
                />
                <h2>NOOR ALAM</h2>
                <p>FULL STACK DEVELOPER</p>
              </div>
              <div className="team_details">
                <p>
                  Noor Alam is full stack web developer with 5 years experiance
                  working in all kind of platforms , ha has very strong
                  background and expertise in React , NodeJs and phyton he is a
                  great team player and self starter.
                </p>
              </div>
            </div>
          </div>
          <div></div>
          <div className="justify-content-center margin-auto">
          <div className="mb-12">
            <div className="team-box">
              <div className="linked">
                <a className="linked-in" href="https://www.linkedin.com/in/visakh-john-thykoodan-8b4709172/" target='_blank' rel="noreferrer">
                  <FaLinkedin />{" "}
                </a>{" "}
              </div>
              <div className="text-center box-img">
                <img
                  src={Viki}
                  alt=""
                />
                <h2>VISAKH</h2>
                <p>COMMUNITY MANAGER</p>
              </div>
              <div className="team_details">
                <p>
                  Visakh is a Marketing & Socials expert within the Digital
                  marketing space while having the knowledge of an
                  all-around-crypto individual. His involvement with crypto
                  exceeds 3 years and has the required skills to expose Dework
                  into hundreds of thousands of people worldwide with his unique
                  marketing skills.
                </p>
              </div>
            </div>
          </div>
            <div></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
