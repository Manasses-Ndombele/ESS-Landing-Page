import { FaClock } from "react-icons/fa";
import "../styles/components/top-clock.sass";

function TopClock() {
    return (
        <div id="top-clock" className="d-flex flex-column align-items-center p-2 gap-2">
            <FaClock />
            <p className="text-center text-uppercase">A promoção vai acabar em: <span>12h 30m 55s</span></p>
        </div>
    )
}

export default TopClock;
