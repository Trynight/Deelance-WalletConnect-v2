import React, { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

function Accordion({ title, children }) {
  const [isAccordionOpen, setIsAccordion] = useState(false);
  const accordionMenuRef = useRef(null);

  useEffect(() => {
    if (isAccordionOpen) {
      accordionMenuRef.current.style.height =
        accordionMenuRef.current.scrollHeight + "px";
    } else {
      accordionMenuRef.current.style.height = 0;
    }
  }, [isAccordionOpen]);

  return (
    <div className={`accordion ${isAccordionOpen && "active"}`}>
      <button onClick={() => setIsAccordion((val) => !val)}>
        <span className="accordion-title">{title}</span>

        <span className="down-arrow">
          <BiChevronDown />
        </span>
      </button>

      <div className="accordion-body-wrapper" ref={accordionMenuRef}>
        <div className="accordion-body">{children}</div>
      </div>
    </div>
  );
}

export default Accordion;
