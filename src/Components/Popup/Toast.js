import React, { useEffect } from "react";

function Toast({ title, state, stateSetter, toastRef }) {
  useEffect(() => {
    if (state) {
      stateSetter(true);

      setTimeout(() => {
        stateSetter(false);
      }, 3000);
    } else {
      stateSetter(false);
    }

    return () => stateSetter(false);
  }, [state]);

  return (
    <div className={` ${state ? "active-tost" : "tost"}`} ref={toastRef}>
      <p className="">{title}</p>

      {/* <button onClick={() => stateSetter(false)}>
        <IoClose color="white" />
      </button> */}
    </div>
  );
}

export default Toast;
