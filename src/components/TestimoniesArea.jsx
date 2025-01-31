import MainCtaBtn from './MainCtaBtn'
import '../styles/components/testimonies-area.sass'

function TestimoniesArea() {
    return (
        <>
            <div id="testimonies-area-lg" className="p-3">
                <h2 className="text-center my-3 testimony-title">TESTEMUNHOS DE ALGUNS ALUNOS!</h2>
                <div id="testimonies-carousel" className="carousel slide carousel-fade mb-4" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="3000">
                            <div className="testimony-container rounded-3 p-3">
                                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                                    <img src="/testimony-1.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                                    <span>Bruno Peregrino</span>
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="testimony-container rounded-3 p-3">
                                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                                    <img src="/testimony-2.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                                    <span>Malu Peregrina</span>
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="testimony-container rounded-3 p-3">
                                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                                    <img src="/testimony-3.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                                    <span>Thiago Nicéia</span>
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="testimony-container rounded-3 p-3">
                                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                                    <img src="/testimony-4.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                                    <span>Thiago Finéas</span>
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="testimony-container rounded-3 p-3">
                                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                                    <img src="/testimony-5.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                                    <span>Pablo Marcelo</span>
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="3000">
                            <div className="testimony-container rounded-3 p-3">
                                <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                                    <img src="/testimony-6.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                                    <span>Bruno Perrucho</span>
                                </p>
                                <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                            </div>
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
                <div className="cta-container">
                    <MainCtaBtn text="QUERO EMAGRECER AGORA" />
                </div>
            </div>
            <div id="testimonies-area-xl" className="p-3 d-none mt-5">
                <h2 className="text-center my-3 testimony-title">TESTEMUNHOS DE ALGUNS ALUNOS!</h2>
                <div className="testimonies-containers d-flex flex-wrap justify-content-center gap-3 my-4">
                    <div className="testimony-container rounded-3 p-3">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <img src="/testimony-1.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                            <span>Bruno Peregrino</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container rounded-3 p-3">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <img src="/testimony-2.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                            <span>Malu Peregrina</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container rounded-3 p-3">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <img src="/testimony-3.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                            <span>Thiago Nicéia</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container rounded-3 p-3">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <img src="/testimony-4.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                            <span>Thiago Finéas</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container rounded-3 p-3">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <img src="/testimony-5.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                            <span>Pablo Marcelo</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                    <div className="testimony-container rounded-3 p-3">
                        <p className="testimony-header d-flex align-items-center gap-1 fw-bold">
                            <img src="/testimony-6.jpg" alt="Foto de um cliente satisfeito" className="rounded-circle p-2" />
                            <span>Bruno Perrucho</span>
                        </p>
                        <p>“Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci voluptatibus ab beatae eum nulla explicabo repudiandae quis. At quos illum, eveniet veritatis quibusdam illo accusantium adipisci reprehenderit fugit sapiente nulla!”</p>
                    </div>
                </div>
                <div className="cta-container">
                    <MainCtaBtn text="QUERO EMAGRECER AGORA" />
                </div>
            </div>
        </>
    )
}

export default TestimoniesArea
