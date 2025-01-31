import BrandTitle from './BrandTitle'
import '../styles/components/main-footer.sass'

function MainFooter() {
    return (
        <footer className="p-3 text-center d-flex flex-column gap-2">
            <BrandTitle />
            <nav>
                <a href="#">Termos de uso</a> -
                <a href="#"> Políticas de privacidade</a> -
                <a href="#"> Contato</a>
            </nav>
            <p className="mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum dolores illum quas similique quibusdam! Quos, exercitationem ex nisi molestias inventore laboriosam, iusto optio officiis labore beatae nemo officia alias unde.</p>
            <a href="https://manassesndombele.vercel.app" target="_blank" rel="external" className="mb-0">&copy; 2025 - Manassés Ndombele - Desenvolvedor Fullstack Freelancer</a>
        </footer>
    )
}

export default MainFooter
