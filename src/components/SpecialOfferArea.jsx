import BrandTitle from './BrandTitle'
import MainCtaBtn from './MainCtaBtn'

function SpecialOfferArea() {
    return (
        <div className="special-offer-area">
            <BrandTitle />
            <h2>OFERTA ESPECIAL</h2>
            <p>De <span className="old-price">AOA 15.590,00</span> SÓ HOJE POR APENAS</p>
            <p className="new-price">AOA 5.500,00</p>
            <MainCtaBtn text="COMPRAR AGORA MEU CURSO" />
        </div>
    )
}

export default SpecialOfferArea
