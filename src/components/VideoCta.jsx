import MainCtaBtn from './MainCtaBtn'
import '../styles/components/video-cta.sass'

function VideoCTA() {
    return (
        <div className="video-cta position-relative p-4">
            <img src="/state-1.png" alt="Estado 1 gorda" className="position-absolute" />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pwr_MbseLQ8?si=Cy3vlCKRTnfjhIjR" title="Nossos clientes satisfeitos!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" className="w-100 pb-4"></iframe>
            <img src="/state-2.png" alt="Estado 2 magra" className="position-absolute" />
            <MainCtaBtn text="QUERO EMAGRECER AGORA" />
        </div>
    )
}

export default VideoCTA
