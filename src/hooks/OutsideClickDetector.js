import React from "react";

const OutsideClickDetector = (handler) => {
  let domNode = React.useRef(null);

  React.useEffect(() => {
    const func = (e) => {
      if (!domNode.current?.contains(e.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", func);

    return () => {
      document.removeEventListener("mousedown", func);
    };
  });

  return domNode;
};

export default OutsideClickDetector;
