import { BsPersonRaisedHand } from 'react-icons/bs'
import MainCtaBtn from './MainCtaBtn'

function TestimoniesArea() {
    return (
        <div className="testimonies-area">
            <h2>TESTEMUNHOS DE ALGUNS ALUNOS!</h2>
            <div className="testimonies-containers">
                <div className="testimony-container">
                    <p className="testimony-header">
                        <BsPersonRaisedHand />
                        <span>Francisco Hernandez</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!</p>
                </div>
                <div className="testimony-container">
                    <p className="testimony-header">
                        <BsPersonRaisedHand />
                        <span>Pablo Marcelino</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!</p>
                </div>
                <div className="testimony-container">
                    <p className="testimony-header">
                        <BsPersonRaisedHand />
                        <span>Thiago Finn</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!</p>
                </div>
                <div className="testimony-container">
                    <p className="testimony-header">
                        <BsPersonRaisedHand />
                        <span>Bruno Peregrino</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!</p>
                </div>
                <div className="testimony-container">
                    <p className="testimony-header">
                        <BsPersonRaisedHand />
                        <span>Rodrigo Abrãao</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!</p>
                </div>
                <div className="testimony-container">
                    <p className="testimony-header">
                        <BsPersonRaisedHand />
                        <span>Malu Peregrina</span>
                    </p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!</p>
                </div>
            </div>
            <MainCtaBtn text="QUERO EMAGRECER AGORA" />
        </div>
    )
}

export default TestimoniesArea
