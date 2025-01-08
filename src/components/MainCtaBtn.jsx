import "../styles/components/main-cta-btn.sass";

function MainCtaBtn({ text }) {
  return (
    <button
      type="button"
      className="main-cta-btn border-0 rounded-2 w-100 p-2 fw-bold"
    >
      {text}
    </button>
  );
}

export default MainCtaBtn;
