import "../styles/components/whatsapp-btn.sass";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect } from "react";

function WhatsappBtn() {
  useEffect(() => {
    let handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document
            .querySelector("div#overlay-btn")
            .classList.add("visually-hidden");
        } else {
          document
            .querySelector("div#overlay-btn")
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
    <div id="whatsapp-btn-container" className="position-fixed bottom-0 end-0 pe-3 pb-3">
      <div id="overlay-btn" className="position-relative">
        <section className="rounded-circle position-absolute top-0 end-0"></section>
        <button
          type="button"
          className="rounded-circle border-0"
          id="whatsapp-btn"
        >
          <FaWhatsapp />
        </button>
      </div>
    </div>
  );
}

export default WhatsappBtn;
