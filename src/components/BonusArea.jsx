import "../styles/components/bonus-area.sass";

function BonusArea() {
  return (
    <div id="bonus-area" className="p-3 mt-4">
      <h2 className="text-center p-2">ADQUIRINDO O CURSO</h2>
      <p className="text-center p-2 bonus-main-description">
        Você também ganha 3 bônus totalmente de graça e também de forma gratuita
      </p>
      <div className="bonus-cards d-flex flex-column align-items-center gap-3">
        <div className="bonus-card d-flex flex-column align-items-center gap-3">
          <img src="/ebook-cover-1.png" alt="Ebook de Bonus" />
          <div className="bonus-description">
            <h3 className="fw-bold text-center">BÔNUS #1</h3>
            <p>
              Rotinas diárias de 15 a 30 minutos para todos os níveis, com foco
              em consistência e resultados progressivos. Transforme exercícios
              em hábitos duradouros usando apenas o peso do corpo e itens
              domésticos.
            </p>
            <p>
              AOA 2450,00 <strong className="d-block mt-2">Hoje: Grátis</strong>
            </p>
          </div>
        </div>
        <div className="bonus-card d-flex flex-column align-items-center gap-3">
          <img src="/ebook-cover-2.png" alt="Ebook de Bonus" />
          <div className="bonus-description">
            <h3 className="fw-bold text-center">BÔNUS #2</h3>
            <p>
              Métodos da ioga para desenvolver disciplina mental e física.
              Inclui sequências matinais (energia) e noturnas (relaxamento) de
              10 minutos, adaptáveis para iniciantes e perfeitas para rotinas
              agitadas.
            </p>
            <p>
              AOA 1850,00 <strong className="d-block mt-2">Hoje: Grátis</strong>
            </p>
          </div>
        </div>
        <div className="bonus-card d-flex flex-column align-items-center gap-3">
          <img src="/ebook-cover-3.png" alt="Ebook de Bonus" />
          <div className="bonus-description">
            <h3 className="fw-bold text-center">BÔNUS #3</h3>
            <p>
              50 receitas saudáveis e rápidas (até 20 minutos), com ingredientes
              comuns. Desde opções low-carb até versões light de comfort foods,
              todas testadas e aprovadas por quem tem pouco tempo.
            </p>
            <p>
              AOA 4400,00 <strong className="d-block mt-2">Hoje: Grátis</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BonusArea;
