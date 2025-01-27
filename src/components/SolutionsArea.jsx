import '../styles/components/solutions-area.sass'

function SolutionsArea() {
    return (
        <div id="solutions-area">
            <h2 className="text-center fw-bold p-3">CONHEÇA AS SOLUÇÕES</h2>
            <p className="text-center px-3">Estes são os três pilares principais do nosso treinamento completo que vão fazer de ti uma pessoa fitness!</p>
            <div className="solutions-cards d-flex flex-column gap-3 mt-5">
                <div className="solution-card d-flex flex-column align-items-center py-2 px-4">
                    <img src="/card-opt-1.jpg" alt="Solução para emagrecer" className="rounded-circle" />
                    <div className="solution-description d-flex flex-column align-items-center mt-3 gap-2">
                        <h3 className="text-uppercase text-center">Dieta super saudável</h3>
                        <p className="text-center p-3">Uma dieta saudável é a chave essencial para qualquer pessoa poder ter um corpo muito saudável mesmo, o que ajuda muito no processo de emagrecimento</p>
                    </div>
                </div>
                <div className="solution-card d-flex flex-column align-items-center py-2 px-4">
                    <img src="/card-opt-2.jpg" alt="Solução para emagrecer" className="rounded-circle" />
                    <div className="solution-description d-flex flex-column align-items-center mt-3 gap-2">
                        <h3 className="text-uppercase text-center">Exercícios físicos</h3>
                        <p className="text-center p-3">Exercícios físicos exclusivos e especiais inventados pela nossa própria equipa de criação de exercícios que é bastante criativa, engenhosa e dedicada.</p>
                    </div>
                </div>
                <div className="solution-card d-flex flex-column align-items-center py-2 px-4">
                    <img src="/card-opt-3.jpg" alt="Solução para emagrecer" className="rounded-circle" />
                    <div className="solution-description d-flex flex-column align-items-center mt-3 gap-2">
                        <h3 className="text-uppercase text-center">Super autocontrole</h3>
                        <p className="text-center p-3">Temos disponível no treinamento uma IA assistente que vai analisar o seu cérebro com base em suas descrições para lhe gerar receitas de remédios mensais que ajudam no autocontrole.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsArea
