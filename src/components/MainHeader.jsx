import BrandTitle from './BrandTitle'
import '../styles/components/main-header.sass'

function MainHeader() {
    return (
        <header>
            <div className="waveforms position-relative">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="position-absolute start-0">
                    <path fill="#380808" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,144C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="position-absolute top-0 start-0">
                    <path fill="#FB1313" fillOpacity="1" d="M0,32L80,58.7C160,85,320,139,480,144C640,149,800,107,960,90.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
                </svg>
            </div>
            <BrandTitle />
            <h2 className="slogan text-center p-3 fw-bold text-uppercase">Passo a passo infalível para ser uma pessoa mais <strong>saudável e fitness!</strong></h2>
            <p className="intro text-center p-3">Saiba como milhares de utilizaram o método secreto e inusitado do nosso produto <strong>Emagrecimento Sem Segredos</strong> e alcance você também o seu sonho através deste curso incrível!</p>
        </header>
    )
}

export default MainHeader
