import "../styles/components/instructor-area.sass";
import instructorPhoto from "../assets/instructor-xl.png";

function InstructorArea() {
  return (
    <div
      id="instructor-area"
      className="p-3 d-flex flex-column align-items-center gap-3 my-4"
    >
      <img src={instructorPhoto} alt="Instrutora do curso" />
      <div id="instructor-history">
        <h2 className="fw-bold">QUEM SOU EU?</h2>
        <p>
          <strong>CEO da DC Cosmetics | Produtora de conteúdo</strong>
        </p>
        <p>
          Eu era só mais uma mulher tentando conciliar a maternidade e o
          casamento. De consultora de beleza a CEO da DC Cosmetics, parecia que
          tinha conquistado tudo... exceto minha paz com a balança.
        </p>
        <p>
          Aos 32 anos, depois do nascimento do meu segundo filho, me vi 28kg
          acima do peso, investi mais de R$ 120 mil em especializações em
          nutrição comportamental, metabolismo e psicologia alimentar. Testei
          cada técnica em mim mesma antes de compartilhar. O resultado? Uma
          metodologia que já transformou mais de 8.000 vidas, provando que é
          possível emagrecer comendo bem, sem exercícios extremos e
          principalmente - sem culpa.
        </p>
      </div>
    </div>
  );
}

export default InstructorArea;
