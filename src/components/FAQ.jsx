function FAQ() {
    return (
        <div className="accordion" id="faq-area">
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Qual a duração do curso?
                    </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#faq-area">
                    <div className="accordion-body">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis adipisci cum sit numquam quas cupiditate, debitis molestias quibusdam temporibus similique. Repellendus dolorem eos dolor atque placeat, architecto aperiam impedit voluptatem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur, perferendis facere unde repellat quisquam deserunt enim ullam repudiandae veritatis, excepturi quas perspiciatis vitae inventore iste eum pariatur ab voluptates.
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Qual a plataforma do curso?
                    </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#faq-area">
                    <div className="accordion-body">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, repellat! Vitae ea esse facilis iusto sit non laborum eius facere nulla enim. Ex rem suscipit quas dolor totam, dolore non. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat dignissimos doloremque quibusdam? Eveniet suscipit repellendus distinctio ipsa veritatis illo odio ut quae dignissimos molestiae at id, quaerat nulla dolorem eius?
                    </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Os dados do meu cartão de crédito estão seguros?
                    </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#faq-area">
                    <div className="accordion-body">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi, reprehenderit quo. Voluptatum eligendi iusto ullam molestiae laudantium obcaecati, quasi nobis exercitationem expedita minus repudiandae quos? Dignissimos dolorum accusantium similique odio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae fugit reiciendis excepturi optio totam non tempora deserunt eius quibusdam illo. Dicta corporis et officia magni rerum quaerat, voluptatum culpa aliquam.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ
