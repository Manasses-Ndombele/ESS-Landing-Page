import { IoChevronDownOutline } from "react-icons/io5";
import "../styles/components/FAQ.sass";

function FAQ() {
  return (
    <div id="faq-area">
      <h2 className="fw-bold text-center p-3">PERGUNTAS FREQUENTES</h2>
      <div className="accordion p-3">
        <div className="accordion-item rounded-0 bg-transparent">
          <h3 className="accordion-header">
            <button
              className="accordion-button bg-transparent d-flex align-items-center justify-content-between"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Qual a duração do curso?
              <IoChevronDownOutline />
            </button>
          </h3>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#faq-area"
          >
            <div className="accordion-body">
              <p>
                O curso tem duração de 30 dias, mas você recebe acesso vitalício
                a todas as atualizações! A metodologia é dividida em módulos
                semanais para você evoluir no ritmo ideal, com checkpoints de
                progresso a cada 7 dias.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-0 bg-transparent">
          <h3 className="accordion-header">
            <button
              className="accordion-button bg-transparent d-flex align-items-center justify-content-between collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Qual a plataforma do curso?
              <IoChevronDownOutline />
            </button>
          </h3>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#faq-area"
          >
            <div className="accordion-body">
              <p>
                O curso está hospedado na Udemy, a maior plataforma de educação
                online do mundo. Isso significa que você pode acessar de
                qualquer dispositivo (celular, tablet ou computador), baixar as
                aulas para ver offline e ainda aproveitar todos os recursos de
                acessibilidade da plataforma.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-0 bg-transparent">
          <h3 className="accordion-header">
            <button
              className="accordion-button bg-transparent d-flex align-items-center justify-content-between collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Qual o formato do curso?
              <IoChevronDownOutline />
            </button>
          </h3>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#faq-area"
          >
            <div className="accordion-body">
              <p>
                O conteúdo principal é em vídeo-aulas objetivas (de 5 a 20
                minutos cada), mas você também recebe 3 ebooks exclusivos como
                bônus: um guia de exercícios, manual de ioga para disciplina e
                livro de receitas saudáveis - tudo formatado para impressão ou
                leitura digital.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-0 bg-transparent">
          <h3 className="accordion-header">
            <button
              className="accordion-button bg-transparent d-flex align-items-center justify-content-between collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Tem suporte?
              <IoChevronDownOutline />
            </button>
          </h3>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#faq-area"
          >
            <div className="accordion-body">
              <p>
                Sim, e vai além do básico! Além do suporte técnico da Udemy,
                você terá acesso ao grupo VIP de alunos no WhatsApp com a
                Fernanda Souza respondendo pessoalmente dúvidas duas vezes por
                semana, mais plantões mensais ao vivo exclusivos para alunos.
                Nossa taxa de resolução de dúvidas é de 98% em até 24h.
              </p>
            </div>
          </div>
        </div>
        <div className="accordion-item rounded-0 bg-transparent">
          <h3 className="accordion-header">
            <button
              className="accordion-button bg-transparent d-flex align-items-center justify-content-between collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              Posso dividir o pagamento?
              <IoChevronDownOutline />
            </button>
          </h3>
          <div
            id="collapseFive"
            className="accordion-collapse collapse"
            data-bs-parent="#faq-area"
          >
            <div className="accordion-body">
              <p>
                Sim! A Udemy oferece parcelamento em até 12x no cartão (com
                juros da operadora). Para pagamentos à vista via PIX, oferecemos
                um desconto especial de 15% - basta usar o cupom PIX15 no
                checkout. Todos os planos dão acesso completo ao mesmo conteúdo
                e bônus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
