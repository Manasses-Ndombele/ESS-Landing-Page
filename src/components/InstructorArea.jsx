import '../styles/components/instructor-area.sass'

function InstructorArea() {
    return (
        <div id="instructor-area" className="p-3 d-flex flex-column align-items-center gap-3 my-4">
            <img src="/instructor-xl.png" alt="Instrutora do curso" />
            <div id="instructor-history">
                <h2 className="fw-bold">QUEM SOU EU?</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error non minus mollitia illum distinctio corporis voluptas consequatur impedit, cumque iure natus vitae, eum reiciendis qui ab! Expedita quisquam atque ex.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A modi totam animi molestiae molestias error veritatis dolor, numquam cupiditate, sit eum unde libero fuga laborum quisquam doloremque, quibusdam ipsum voluptates!</p>
            </div>
        </div>
    )
}

export default InstructorArea
