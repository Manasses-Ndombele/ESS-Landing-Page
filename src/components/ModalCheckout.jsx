import { MdLock } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/components/modal-checkout.sass";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo é obrigatório!"),
  email: Yup.string()
    .email("Email inválido!")
    .required("Este campo é obrigatório!"),
  card_number: Yup.number()
    .min(111111111111, "Número do cartão inválido")
    .required("Este campo é obrigatório!"),
  expiration_date: Yup.string()
    .required("Este campo é obrigatório!")
    .matches(/^\d{4}-(0[1-9]|1[0-2])$/, "Formato inválido. Use YYYY-MM"),
  cvv: Yup.number()
    .min(100, "O CVV é entre 3 á 4 dígitos")
    .max(9999, "O CVV é entre 3 á 4 dígitos")
    .required("Este campo é obrigatório!"),
  coupon: Yup.string().required("Este campo é obrigatório!"),
});

function ModalCheckout() {
  return (
    <div
      id="checkout-modal"
      className="modal fade"
      aria-hidden="true"
      tabIndex="-1"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h5 className="modal-title d-flex align-items-center">
              <MdLock />
              <span className="text-uppercase fw-bold">Compra segura!</span>
            </h5>
            <button
              type="button"
              className="btn border-0 p-0 close-btn"
              data-bs-dismiss="modal"
              aria-label="Close"
            >
              <MdClose />
            </button>
          </div>
          <div className="modal-body">
            <Formik
              initialValues={{
                name: "",
                email: "",
                card_number: "",
                expiration_date: "",
                cvv: "",
                cupom: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log(values);
                setSubmitting(true);
                resetForm();
                window.alert(
                  "Pagamento efetuado com sucesso! O acesso ao curso será brevemente enviado para o seu email."
                );

                document
                  .querySelector("div#checkout-modal")
                  .querySelector("button.close-btn")
                  .click();
              }}
            >
              <Form>
                <div className="mb-3">
                  <label htmlFor="name-field" className="form-label">
                    Nome
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Seu nome"
                    name="name"
                    id="name-field"
                  />
                  <ErrorMessage
                    component={"span"}
                    className="text-danger"
                    name="name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email-field" className="form-label">
                    Email
                  </label>
                  <Field
                    type="email"
                    className="form-control"
                    placeholder="Seu email"
                    name="email"
                    id="email-field"
                  />
                  <ErrorMessage
                    component={"span"}
                    className="text-danger"
                    name="email"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="card-number-field" className="form-label">
                    Número do cartão
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    placeholder="Seu número do cartão"
                    name="card_number"
                    id="card-number-field"
                  />
                  <ErrorMessage
                    component={"span"}
                    className="text-danger"
                    name="card_number"
                  />
                  <section className="d-grid justify-content-center mt-2">
                    <img src="/visa-flag.png" className="" alt="Visa" />
                    <img src="/mastercard-flag.png" alt="Mastercard" />
                    <img
                      src="/american-express-flag.png"
                      alt="American Express"
                    />
                    <img src="/paypal-flag.png" alt="PayPal" />
                  </section>
                </div>
                <div className="mb-3">
                  <label htmlFor="expiration-date-field" className="form-label">
                    Data de expiração
                  </label>
                  <Field
                    type="month"
                    className="form-control"
                    placeholder="YYYY-MM (ANO-MÊS)"
                    name="expiration_date"
                    id="expiration-date-field"
                  />
                  <ErrorMessage
                    component={"span"}
                    className="text-danger"
                    name="expiration_date"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="cvv-field" className="form-label">
                    CVV do cartão
                  </label>
                  <Field
                    type="number"
                    className="form-control"
                    placeholder="CVV"
                    name="cvv"
                    id="cvv-field"
                  />
                  <ErrorMessage
                    component={"span"}
                    className="text-danger"
                    name="cvv"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="coupon-field" className="form-label">
                    Cupom
                  </label>
                  <Field
                    type="text"
                    className="form-control"
                    placeholder="Cupom"
                    name="coupon"
                    id="coupon-field"
                  />
                  <ErrorMessage
                    component={"span"}
                    className="text-danger"
                    name="coupon"
                  />
                </div>
                <div className="mb-3">
                  <button
                    type="submit"
                    className="btn btn-dark fw-bold w-100 text-uppercase"
                  >
                    Enviar
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalCheckout;
