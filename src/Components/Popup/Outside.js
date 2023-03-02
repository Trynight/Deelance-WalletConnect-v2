import React, { useRef } from 'react';

function ClosePopupOnOutsideClick({ children, onClose }) {
  const ref = useRef(null);

  const handleClickOutside = event => {
    if (ref.current && !ref.current.contains(event.target)) {
      onClose();
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={ref}>
      {children}
    </div>
  );
}

<ClosePopupOnOutsideClick onClose={() => setIsOpen(false)}>
  <Popup>Popup content</Popup>
</ClosePopupOnOutsideClick>