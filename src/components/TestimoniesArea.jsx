import "../styles/components/main-cta-btn.sass";
import "../styles/components/testimonies-area.sass";
import testimony1 from "../assets/testimony-1.jpg";
import testimony2 from "../assets/testimony-2.jpg";
import testimony3 from "../assets/testimony-3.jpg";
import testimony4 from "../assets/testimony-4.jpg";
import testimony5 from "../assets/testimony-5.jpg";
import testimony6 from "../assets/testimony-6.jpg";

function TestimoniesArea() {
  return (
    <>
      <div id="testimonies-area-lg" className="p-3">
        <h2 className="text-center my-3 testimony-title text-uppercase">
          Testemunhos de alguns alunos!
        </h2>
        <div
          id="testimonies-carousel"
          className="carousel slide carousel-fade mb-4"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="3000">
              <div className="testimony-container rounded-3 p-3">
                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                  <img
                    src={testimony1}
                    alt="Foto de um cliente satisfeito"
                    className="rounded-circle p-2"
                  />
                  <span>
                    Bruno Peregrino
                    <span className="d-block fw-normal">38 anos</span>
                  </span>
                </p>
                <p>
                  “Depois de anos tentando dietas malucas, o{" "}
                  <strong>Emagrecimento Sem Segredos</strong> me mostrou o
                  caminho certo. Em 3 meses perdi 12kg de forma saudável e sem
                  sofrimento. A metodologia da Fernanda Souza é revolucionária!”
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="testimony-container rounded-3 p-3">
                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                  <img
                    src={testimony2}
                    alt="Foto de um cliente satisfeito"
                    className="rounded-circle p-2"
                  />
                  <span>
                    Malu Peregrina
                    <span className="d-block fw-normal">32 anos</span>
                  </span>
                </p>
                <p>
                  “Como mãe de dois filhos, nunca tinha tempo para cuidar de
                  mim. A Fernanda me ensinou que emagrecer não é sobre
                  restrição, mas sobre equilíbrio. Perdi 8kg sem deixar de
                  curtir a vida e hoje me sinto mais confiante do que nunca! O
                  curso mudou minha relação com a comida e com meu corpo.”
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="testimony-container rounded-3 p-3">
                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                  <img
                    src={testimony3}
                    alt="Foto de um cliente satisfeito"
                    className="rounded-circle p-2"
                  />
                  <span>
                    Thiago Nicéia
                    <span className="d-block fw-normal">45 anos</span>
                  </span>
                </p>
                <p>
                  “Sou empresário e sempre priorizei meu trabalho acima da
                  saúde. O método da Fernanda Souza me fez entender que saúde é
                  produtividade. Em 4 meses eliminei a gordura visceral que me
                  incomodava há anos. Recomendo para qualquer profissional!”
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="testimony-container rounded-3 p-3">
                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                  <img
                    src={testimony4}
                    alt="Foto de um cliente satisfeito"
                    className="rounded-circle p-2"
                  />
                  <span>
                    Ana Jordão<span className="d-block fw-normal">29 anos</span>
                  </span>
                </p>
                <p>
                  “Aprendi mais com a Fernanda em 2 meses do que em 10 anos de
                  nutricionistas. Seu jeito direto e sem enrolação mostra que
                  ela realmente entende a rotina de quem é mãe e empreendedora.
                  Finalmente encontrei um programa que se adapta à minha vida!”
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="testimony-container rounded-3 p-3">
                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                  <img
                    src={testimony5}
                    alt="Foto de um cliente satisfeito"
                    className="rounded-circle p-2"
                  />
                  <span>
                    Pablo Marcelo
                    <span className="d-block fw-normal">45 anos</span>
                  </span>
                </p>
                <p>
                  “Como fã dos cosméticos da Fernanda, quando lançou o curso eu
                  não pensei duas vezes. E não me arrependo! Perdi 15kg
                  entendendo meu corpo, sem remédios ou loucuras. A abordagem
                  humana dela faz toda diferença.”
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="3000">
              <div className="testimony-container rounded-3 p-3">
                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                  <img
                    src={testimony6}
                    alt="Foto de um cliente satisfeito"
                    className="rounded-circle p-2"
                  />
                  <span>
                    Nathália Arcurel
                    <span className="d-block fw-normal">35 anos</span>
                  </span>
                </p>
                <p>
                  “Depois do segundo filho, meu metabolismo mudou completamente.
                  A Fernanda Souza me mostrou como respeitar meu novo corpo
                  enquanto atingia meus objetivos. Hoje não só emagreci, mas
                  ganhei energia para cuidar dos meus filhos e negócios!”
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonies-carousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonies-carousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="cta-container mx-auto d-flex justify-content-center w-100">
          <button
            type="button"
            className="main-cta-btn text-uppercase border-0 w-100 fw-bold"
            data-bs-target="#checkout-modal"
            data-bs-toggle="modal"
          >
            Quero emagrecer agora
          </button>
        </div>
      </div>
      <div id="testimonies-area-xl" className="p-3 d-none mt-5">
        <h2 className="text-center my-3 testimony-title text-uppercase">
          Testemunhos de alguns alunos!
        </h2>
        <div className="testimonies-containers d-flex flex-wrap justify-content-center gap-3 my-4">
          <div className="testimony-container rounded-3 p-3">
            <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
              <img
                src={testimony1}
                alt="Foto de um cliente satisfeito"
                className="rounded-circle p-2"
              />
              <span>
                Bruno Peregrino
                <span className="d-block fw-normal">38 anos</span>
              </span>
            </p>
            <p>
              “Depois de anos tentando dietas malucas, o{" "}
              <strong>Emagrecimento Sem Segredos</strong> me mostrou o caminho
              certo. Em 3 meses perdi 12kg de forma saudável e sem sofrimento. A
              metodologia da Fernanda Souza é revolucionária!”
            </p>
          </div>
          <div className="testimony-container rounded-3 p-3">
            <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
              <img
                src={testimony2}
                alt="Foto de um cliente satisfeito"
                className="rounded-circle p-2"
              />
              <span>
                Malu Peregrina<span className="d-block fw-normal">32 anos</span>
              </span>
            </p>
            <p>
              “Como mãe de dois filhos, nunca tinha tempo para cuidar de mim. A
              Fernanda me ensinou que emagrecer não é sobre restrição, mas sobre
              equilíbrio. Perdi 8kg sem deixar de curtir a vida e hoje me sinto
              mais confiante do que nunca! O curso mudou minha relação com a
              comida e com meu corpo.”
            </p>
          </div>
          <div className="testimony-container rounded-3 p-3">
            <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
              <img
                src={testimony3}
                alt="Foto de um cliente satisfeito"
                className="rounded-circle p-2"
              />
              <span>
                Thiago Nicéia<span className="d-block fw-normal">45 anos</span>
              </span>
            </p>
            <p>
              “Sou empresário e sempre priorizei meu trabalho acima da saúde. O
              método da Fernanda Souza me fez entender que saúde é
              produtividade. Em 4 meses eliminei a gordura visceral que me
              incomodava há anos. Recomendo para qualquer profissional!”
            </p>
          </div>
          <div className="testimony-container rounded-3 p-3">
            <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
              <img
                src={testimony4}
                alt="Foto de um cliente satisfeito"
                className="rounded-circle p-2"
              />
              <span>
                Ana Jordão<span className="d-block fw-normal">29 anos</span>
              </span>
            </p>
            <p>
              “Aprendi mais com a Fernanda em 2 meses do que em 10 anos de
              nutricionistas. Seu jeito direto e sem enrolação mostra que ela
              realmente entende a rotina de quem é mãe e empreendedora.
              Finalmente encontrei um programa que se adapta à minha vida!”
            </p>
          </div>
          <div className="testimony-container rounded-3 p-3">
            <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
              <img
                src={testimony5}
                alt="Foto de um cliente satisfeito"
                className="rounded-circle p-2"
              />
              <span>
                Pablo Marcelo<span className="d-block fw-normal">45 anos</span>
              </span>
            </p>
            <p>
              “Como fã dos cosméticos da Fernanda, quando lançou o curso eu não
              pensei duas vezes. E não me arrependo! Perdi 15kg entendendo meu
              corpo, sem remédios ou loucuras. A abordagem humana dela faz toda
              diferença.”
            </p>
          </div>
          <div className="testimony-container rounded-3 p-3">
            <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
              <img
                src={testimony6}
                alt="Foto de um cliente satisfeito"
                className="rounded-circle p-2"
              />
              <span>
                Nathália Arcurel
                <span className="d-block fw-normal">35 anos</span>
              </span>
            </p>
            <p>
              “Depois do segundo filho, meu metabolismo mudou completamente. A
              Fernanda Souza me mostrou como respeitar meu novo corpo enquanto
              atingia meus objetivos. Hoje não só emagreci, mas ganhei energia
              para cuidar dos meus filhos e negócios!”
            </p>
          </div>
        </div>
        <div className="cta-container mx-auto d-flex justify-content-center w-100">
          <button
            type="button"
            className="main-cta-btn text-uppercase border-0 w-100 fw-bold"
            data-bs-target="#checkout-modal"
            data-bs-toggle="modal"
          >
            Quero emagrecer agora
          </button>
        </div>
      </div>
    </>
  );
}

export default TestimoniesArea;
