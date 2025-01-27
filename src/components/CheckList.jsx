import '../styles/components/checklist.sass'

function CheckList() {
    return (
        <div id="checklist-area" className="px-3">
            <h2>ESSE CURSO É PARA VOCÊ QUE:</h2>
            <div className="checklist px-3">
                <ol className="ps-0">
                    <li>Já tentou parar de comer de forma desenfreada mas não conseguiu</li>
                    <li>Já tentou parar de comer de forma mais saudável mas não conseguiu</li>
                    <li>Já desistiu de tentar vencer isso!</li>
                    <li>Come constantemente por angústia</li>
                    <li>É totalmente sedentário, preguiçoso e procrastinador crônico!</li>
                </ol>
                <ol className="ps-0" start="6">
                    <li>É depressivo, solitário e por vezes um nerd e hacker!</li>
                    <li>Sente vergonha do seu próprio corpo principalmente em público</li>
                    <li>Gasta mais de 50% da sua renda mensal no McDonalds</li>
                    <li>Tem vontade de mudar mas se sente bloqueado</li>
                    <li>Tem fé e paciência para ver seus resultados</li>
                </ol>
            </div>
        </div>
    )
}

export default CheckList
