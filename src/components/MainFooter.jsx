import BrandTitle from "./BrandTitle";
import "../styles/components/main-footer.sass";

function MainFooter() {
  return (
    <footer className="p-3 text-center d-flex flex-column gap-2">
      <BrandTitle />
      <nav>
        <a href="#">Termos de uso</a> - <a href="#"> Políticas de privacidade</a>
        {" "}-<a href="#"> Contato</a>
      </nav>
      <p className="mb-0">
        Este site não é afiliado ao Facebook/Meta Inc. Os resultados do curso
        podem variar conforme o comprometimento de cada aluno. Consulte sempre
        um profissional antes de iniciar qualquer mudança alimentar ou física.
      </p>
      <a
        href="https://manassesndombele.vercel.app"
        target="_blank"
        rel="external"
        className="mb-0"
      >
        &copy; 2025 - Manassés Ndombele - Desenvolvedor Fullstack Freelancer
      </a>
    </footer>
  );
}

export default MainFooter;
