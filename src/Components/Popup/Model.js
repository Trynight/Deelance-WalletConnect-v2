import React, { useState } from "react";
import Toast from "./Toast";
import "./Modelll.css";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
// import { FaTelegram } from "react-icons/fa";

function Model({ setIsModal }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2gb6skl",
        "template_62uujcv",
        form.current,
        "B9w0v-pm5DquLkrPw"
      )
      // emailjs
      //   .sendForm(
      //     "service_zeapxa2",
      //     "template_0dm8dnd",
      //     form.current,
      //     "Jjh1PVkv4mQ9dUVXf"
      //   )
      .then(
        (result) => {
          e.preventDefault();
          setShowToast(true);
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [showToast, setShowToast] = useState(false);
  const toastRef = OutsideClickDetector(() => setShowToast(false));
  // const popTost =OutsideClickDetector(()=>{
  //   setShowToast(false)
  // })

  return (
    <div className="modalBackground">
      <div className="modalContainer" Ref={toastRef}>
        <Toast
          title="Your Response has been submitted"
          state={showToast}
          stateSetter={setShowToast}
        />
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setIsModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="">
          <section className="section-box">
            <div className="formWrapper">
              <header className="pop-head">
                <h2 className="text-center   mb-10px lh-1">Join us!</h2>
                <h1 className="fs-55px weight-7 text-center  lh-1">
                  We are still in beta.Get
                  <span className="red"> Early Access</span> by joining on our
                  waitlist.
                </h1>
              </header>
              <form onSubmit={sendEmail} ref={form}>
                {/*  */}
                <input
                  type="text"
                  className="fs-26px  weight-3"
                  placeholder="Full Name :"
                  name="full_name"
                  required
                />
                <input
                  type="email"
                  className="fs-26px  weight-3"
                  placeholder="Email :"
                  name="email"
                  required
                />

                <label for="signup" className="white">
                  Choose a option:
                </label>
                <select id="option">
                  <option value="freelancer">
                    {" "}
                    <input
                      type="text"
                      className="fs-26px  weight-3"
                      placeholder="Freelance :"
                      name="free_l"
                      value="Freelance"
                    />
                    Freelance
                  </option>
                  <option value="employer" id="employer" name="employer">
                    <input
                      type="text"
                      className="fs-26px  weight-3"
                      placeholder="Employer"
                      name="emp"
                      value="Employer"
                    />
                    Employer
                  </option>
                  <option value="Jobseeker" name="Jobseeker">
                    <input
                      type="text"
                      className="fs-26px  weight-3"
                      placeholder="Jobseeker"
                      name="job_s"
                      value="Jobseeker"
                    />
                    Jobseeker
                  </option>
                </select>

                <div className="btn-modal">
                  <button type="submit" className="fs-26px  weight-5 pointer">
                    Request early access
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Model;
