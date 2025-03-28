import { useState, useEffect } from "react";
import { FaClock } from "react-icons/fa";
import "../styles/components/top-clock.sass";

function generate_number(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function TopClock() {
  const [clockHour, setClockHour] = useState(generate_number(0, 23));
  const [clockMinutes, setClockMinutes] = useState(generate_number(0, 59));
  const [clockSeconds, setClockSeconds] = useState(generate_number(0, 59));
  const [isFixed, setIsFixed] = useState(window.scrollY);
  useEffect(() => {
    const timer = setInterval(() => {
      setClockSeconds((prevSeconds) => {
        if (prevSeconds < 59) {
          return prevSeconds + 1;
        } else {
          setClockMinutes((prevMinutes) => {
            if (prevMinutes < 59) {
              return prevMinutes + 1;
            } else {
              setClockHour((prevHour) => {
                return prevHour < 23 ? prevHour + 1 : 0;
              });
              return 0;
            }
          });
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="top-clock"
      className={`${
        isFixed ? "fixed" : ""
      } d-flex flex-column align-items-center px-2 py-1 gap-2`}
    >
      <FaClock />
      <p className="text-center text-uppercase">
        A promoção vai acabar em:{" "}
        <strong className="text-lowercase">
          {String(clockHour).padStart(2, "0")}h{" "}
          {String(clockMinutes).padStart(2, "0")}m{" "}
          {String(clockSeconds).padStart(2, "0")}s
        </strong>
      </p>
    </div>
  );
}

export default TopClock;
