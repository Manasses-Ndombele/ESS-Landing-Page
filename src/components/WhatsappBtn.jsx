import "../styles/components/whatsapp-btn.sass";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

function WhatsappBtn() {
  useEffect(() => {
    let handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelector("button#whatsapp-btn")
            .classList.add("visually-hidden");
        } else {
          document
            .querySelector("button#whatsapp-btn")
            .classList.remove("visually-hidden");
        }
      });
    };

    let observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: "0.1",
    };

    let mainObserver = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    mainObserver.observe(document.querySelector("footer"));
  }, []);

  return (
    <button
      type="button"
      className="position-fixed rounded-circle bottom-0 end-0 m-3 border-0"
      id="whatsapp-btn"
    >
      <FaWhatsapp />
    </button>
  );
}

export default WhatsappBtn;
