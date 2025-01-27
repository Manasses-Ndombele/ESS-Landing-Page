import { BsPersonRaisedHand } from 'react-icons/bs'
import MainCtaBtn from './MainCtaBtn'
import '../styles/components/testimonies-area.sass'

function TestimoniesArea() {
    return (
        <div id="testimonies-area" className="p-3">
            <h2 className="text-center my-3">TESTEMUNHOS DE ALGUNS ALUNOS!</h2>
            <div id="testimonies-carousel" className="carousel slide carousel-fade mb-4" data-bs-ride="carousel">
                <div className="carousel-inner testimonies-containers">
                    <div className="testimony-container carousel-item active rounded-3 p-3" data-bs-interval="3000">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <BsPersonRaisedHand />
                            <span>Francisco Hernandez</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container carousel-item rounded-3 p-3" data-bs-interval="3000">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <BsPersonRaisedHand />
                            <span>Pablo Marcelino</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container carousel-item rounded-3 p-3" data-bs-interval="3000">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <BsPersonRaisedHand />
                            <span>Thiago Finn</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container carousel-item rounded-3 p-3" data-bs-interval="3000">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <BsPersonRaisedHand />
                            <span>Bruno Peregrino</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container carousel-item rounded-3 p-3" data-bs-interval="3000">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <BsPersonRaisedHand />
                            <span>Rodrigo Abrãao</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container carousel-item rounded-3 p-3" data-bs-interval="3000">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <BsPersonRaisedHand />
                            <span>Malu Peregrina</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#testimonies-carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#testimonies-carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <MainCtaBtn text="QUERO EMAGRECER AGORA" />
        </div>
    )
}

export default TestimoniesArea
