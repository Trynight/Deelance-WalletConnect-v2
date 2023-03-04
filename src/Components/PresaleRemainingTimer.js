import React, { useContext, useEffect, useState } from "react";
import UserContext from "UserContext";

function PresaleRemainingTimer({ somestate, setSomeState }) {
  const { account } = useContext(UserContext);
  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (!account) {
      const intervalId = setInterval(() => {
        const date = new Date();
        const futureDate = new Date("2023-04-03T00:00:00");
        const difference = futureDate - date;

        if (difference >= 0) {
          setCountdown({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    } else {
      const intervalId = setInterval(() => {
        const date = new Date();
        const futureDate = new Date("2023-04-03T00:00:00");
        const difference = futureDate - date;

        if (difference >= 0) {
          setCountdown({
            days: Math.floor(difference / (1000 * 60 * 60 * 24)),
            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((difference / (1000 * 60)) % 60),
            seconds: Math.floor((difference / 1000) % 60),
          });
        } else {
          clearInterval(intervalId);
        }
      }, 1000);
    }
  }, [account, somestate]);

  return (
    <p className="white count-down text-center mb-0">
      <span className="green">{countdown.days}</span> DAYS,{" "}
      <span className="green">{countdown.hours}</span> HOURS,{" "}
      <span className="green">{countdown.minutes}</span> MINUTES,{" "}
      <span className="green">{countdown.seconds}</span> SECONDS Remaining
    </p>
  );
}

export default PresaleRemainingTimer;
