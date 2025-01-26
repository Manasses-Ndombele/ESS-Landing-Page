function SolutionsArea() {
    return (
        <div className="solutions-area">
            <h2>CONHEÇA AS SOLUÇÕES</h2>
            <p>Estes são os três pilares principais do nosso treinamento completo que vão fazer de ti uma pessoa fitness!</p>
            <div className="solutions-cards">
                <div className="solution-card">
                    <img src="/card-opt-1.jpg" alt="Solução para emagrecer" />
                    <div className="solution-description">
                        <h3>Dieta super saudável</h3>
                        <p>Uma dieta saudável é a chave essencial para qualquer pessoa poder ter um corpo muito saudável mesmo, o que ajuda muito no processo de emagrecimento</p>
                    </div>
                </div>
                <div className="solution-card">
                    <img src="/card-opt-2.jpg" alt="Solução para emagrecer" />
                    <div className="solution-description">
                        <h3>Exercícios físicos</h3>
                        <p>Exercícios físicos exclusivos e especiais inventados pela nossa própria equipa de criação de exercícios que é bastante criativa, engenhosa e dedicada.</p>
                    </div>
                </div>
                <div className="solution-card">
                    <img src="/card-opt-3.jpg" alt="Solução para emagrecer" />
                    <div className="solution-description">
                        <h3>Super autocontrole</h3>
                        <p>Temos disponível no treinamento uma IA assistente que vai analisar o seu cérebro com base em suas descrições para lhe gerar receitas de remédios mensais que ajudam no autocontrole.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SolutionsArea
