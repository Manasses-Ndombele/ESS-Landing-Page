import { IoCheckmarkDoneSharp } from 'react-icons/io5'

function CheckList() {
    return (
        <div className="checklist-area">
            <h2>ESSE CURSO É PARA VOCÊ QUE:</h2>
            <div className="checklist">
                <ul>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>Já tentou parar de comer de forma desenfreada mas não conseguiu</span>
                    </li>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>Já tentou parar de comer de forma mais saudável mas não conseguiu</span>
                    </li>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>Já desistiu de tentar vencer isso!</span>
                    </li>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>Come constantemente por angústia</span>
                    </li>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>É totalmente sedentário, preguiçoso e procrastinador crônico!</span>
                    </li>
                </ul>
                <ul>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>É depressivo, solitário e por vezes um nerd e hacker!</span>
                    </li>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>Sente vergonha do seu próprio corpo principalmente em público</span>
                    </li>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>Gasta mais de 50% da sua renda mensal no McDonalds</span>
                    </li>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>Tem vontade de mudar mas se sente bloqueado</span>
                    </li>
                    <li>
                        <IoCheckmarkDoneSharp />
                        <span>Tem fé e paciência para ver seus resultados</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default CheckList
