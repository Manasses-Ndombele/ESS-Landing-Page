import '../styles/components/bonus-area.sass'

function BonusArea() {
    return (
        <div id="bonus-area" className="p-3 mt-4">
            <h2 className="text-center p-2">ADQUIRINDO O CURSO</h2>
            <p className="text-center p-2 bonus-main-description">Você também ganha 3 bônus totalmente de graça e também de forma gratuita</p>
            <div className="bonus-cards d-flex flex-column align-items-center gap-3">
                <div className="bonus-card d-flex flex-column align-items-center gap-3">
                    <img src="/ebook-cover-1.png" alt="Ebook de Bonus" />
                    <div className="bonus-description">
                        <h3 className="fw-bold text-center">BÔNUS #1</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi perferendis hic harum consectetur eius! Recusandae ut totam illum nam itaque natus ipsa, quia, minus non corporis explicabo, dolorum nisi.</p>
                        <p>AOA 2450,00 <strong className="d-block mt-2">Hoje: Grátis</strong></p>
                    </div>
                </div>
                <div className="bonus-card d-flex flex-column align-items-center gap-3">
                    <img src="/ebook-cover-2.png" alt="Ebook de Bonus" />
                    <div className="bonus-description">
                        <h3 className="fw-bold text-center">BÔNUS #2</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi perferendis hic harum consectetur eius! Recusandae ut totam illum nam itaque natus ipsa, quia, minus non corporis explicabo, dolorum nisi.</p>
                        <p>AOA 1850,00 <strong className="d-block mt-2">Hoje: Grátis</strong></p>
                    </div>
                </div>
                <div className="bonus-card d-flex flex-column align-items-center gap-3">
                    <img src="/ebook-cover-3.png" alt="Ebook de Bonus" />
                    <div className="bonus-description">
                        <h3 className="fw-bold text-center">BÔNUS #3</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quasi perferendis hic harum consectetur eius! Recusandae ut totam illum nam itaque natus ipsa, quia, minus non corporis explicabo, dolorum nisi.</p>
                        <p>AOA 4400,00 <strong className="d-block mt-2">Hoje: Grátis</strong></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BonusArea
