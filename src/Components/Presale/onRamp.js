import React from "react";

function onRamp({ setIsModal2 }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer-2" style={{ width: "auto" }}>
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setIsModal2(false);
            }}
          >
            X
          </button>
        </div>
        <div className="">
          <section className="">
            <div className="formWrapper-2">
              <iframe
                style={{
                  borderRadius: "4px",
                  border: "1px solid #58585f",
                  margin: "auto",
                  maxWidth: "460px",
                }}
                src="https://global.transak.com/"
                height="540px"
                width="360px"
                title="Onramper widget"
                allow="accelerometer; autoplay; camera; gyroscope; payment"
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default onRamp;
