import BrandTitle from "./BrandTitle";
import MainCtaBtn from "./MainCtaBtn";
import "../styles/components/special-offer-area.sass";

function SpecialOfferArea() {
  return (
    <div id="special-offer-area" className="w-100 p-3">
      <div
        id="special-offer-container"
        className="p-3 d-flex flex-column align-items-center gap-2"
      >
        <BrandTitle />
        <h2 className="fw-bold text-center">OFERTA ESPECIAL</h2>
        <p className="text-center">
          De{" "}
          <strong className="text-decoration-line-through">
            AOA 15.590,00
          </strong>{" "}
          SÓ HOJE POR APENAS
        </p>
        <p className="new-price">AOA 5.500,00</p>
        <div className="cta-container w-100">
          <MainCtaBtn text="COMPRAR AGORA MEU CURSO" />
        </div>
      </div>
    </div>
  );
}

export default SpecialOfferArea;
