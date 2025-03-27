import BrandTitle from "./BrandTitle";
import "../styles/components/intro-area.sass";

function IntroArea() {
  return (
    <div className="intro-area my-4">
      <BrandTitle />
      <h2 className="slogan text-center p-3 fw-bold text-uppercase">
        Passo a passo infalível para ser uma pessoa mais <strong>saudável e fitness!</strong>
      </h2>
      <p className="intro text-center p-3">
        Saiba como milhares utilizaram o método secreto e inusitado do nosso
        produto <strong>Emagrecimento Sem Segredos</strong> e alcance você
        também o seu sonho através deste curso incrível!
      </p>
    </div>
  );
}

export default IntroArea;
