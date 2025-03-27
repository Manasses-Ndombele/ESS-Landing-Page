import { FiChevronsDown } from "react-icons/fi";
import "../styles/components/arrow-bottom.sass";

function ArrowBottom() {
  return (
    <div id="arrow-animated" className="position-absolute bottom-0 start-0 ps-2 pb-3 opacity-75">
      <FiChevronsDown />
    </div>
  );
}

export default ArrowBottom;
