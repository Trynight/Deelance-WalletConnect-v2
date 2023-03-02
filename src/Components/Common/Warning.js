import React from "react";
import { useTranslation } from "react-i18next";

function Warning() {
  const { t } = useTranslation("common");

  return (
    <>
      {" "}
      <div className="warning-box">
        <h2>
          {t(
            "warnings.warning",
            "Cryptocurrency may be unregulated in your jurisdiction. The value of cryptocurrencies may go down as well as up. Profits may be subject to capital gains or other taxes applicable in your jurisdiction."
          )}
        </h2>
      </div>
    </>
  );
}

export default Warning;
