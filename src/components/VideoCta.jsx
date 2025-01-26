import MainCtaBtn from './MainCtaBtn'

function VideoCTA() {
    return (
        <div className="video-cta">
            <img src="/state-1.png" alt="Estado 1 gorda" />
            <iframe width="560" height="315" src="https://www.youtube.com/embed/pwr_MbseLQ8?si=Cy3vlCKRTnfjhIjR" title="Nossos clientes satisfeitos!" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
            <img src="/state-2.png" alt="Estado 2 magra" />
            <MainCtaBtn text="QUERO EMAGRECER AGORA" />
        </div>
    )
}

export default VideoCTA
