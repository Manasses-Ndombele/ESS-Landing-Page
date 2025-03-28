import { useEffect } from "react";
import "../styles/components/promotion-modal.sass";

function ModalPromotion() {
  useEffect(() => {
    const promotionShowed = sessionStorage.getItem("promotionShowed");
    if (!promotionShowed) {
      const handleMouseMove = (event) => {
        if (event.clientY <= 20) {
          document.querySelector("button#promotion-modal-open-btn").click();
          window.removeEventListener("mousemove", handleMouseMove);
        }
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }
  });
  return (
    <>
      <div
        className="modal fade"
        aria-hidden="true"
        tabIndex="-1"
        id="promotion-modal"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-capitalize">
                Opa! Você quer desistir do seu sonho sem antes tentar? 😔
              </h5>
            </div>
            <div className="modal-body">
              <p>
                Fechar esta página agora é como desistir antes mesmo de começar!
                O ‘Emagrecimento Sem Segredos’ já transformou milhares de vidas,
                e você pode ser a próxima história de sucesso. Dê esse primeiro
                passo – seu futuro eu vai agradecer!
                <strong className="d-block mt-2">
                  ✨ 👉 Clique no botão abaixo e garanta sua vaga com 25% de
                  desconto por tempo limitado!
                </strong>
              </p>
              <p>
                <span className="d-block fw-bold">25%</span> desconto agora
              </p>
              <button
                type="button"
                data-bs-toggle="modal"
                data-bs-target="#checkout-modal"
                className="rounded-3 w-100 p-2 text-uppercase fw-bold"
              >
                Comprar agora!
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#promotion-modal"
        id="promotion-modal-open-btn"
        className="visually-hidden"
      >
        Comprar agora!
      </button>
    </>
  );
}

export default ModalPromotion;
