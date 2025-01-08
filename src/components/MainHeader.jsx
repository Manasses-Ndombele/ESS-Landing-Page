import TopClock from './TopClock'
import BrandTitle from './BrandTitle'
import '../styles/components/main-header.sass'

function MainHeader() {
    return (
        <header>
            <TopClock />
            <div className="intro-area">
                <BrandTitle />
                <h2 className="slogan text-center p-3 fw-bold text-uppercase">Passo a passo infalível para ser uma pessoa mais <strong>saudável e fitness!</strong></h2>
                <p className="intro text-center p-3">Saiba como milhares utilizaram o método secreto e inusitado do nosso produto <strong>Emagrecimento Sem Segredos</strong> e alcance você também o seu sonho através deste curso incrível!</p>
            </div>
        </header>
    )
}

export default MainHeader
