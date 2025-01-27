import '../styles/components/main-cta-btn.sass'

function MainCtaBtn(props) {
    return (
        <button type="button" className="main-cta-btn border-0 rounded-2 w-100 p-2 fw-bold">{props.text}</button>
    )
}

export default MainCtaBtn
