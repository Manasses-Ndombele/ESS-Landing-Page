import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Este campo é obrigatório!"),
  email: Yup.string()
    .email("Email inválido!")
    .required("Este campo é obrigatório!"),
  card_number: Yup.number().required("Este campo é obrigatório!"),
  expiration_date: Yup.date().required("Este campo é obrigatório!"),
  cvv: Yup.number().required("Este campo é obrigatório!"),
});

function ModalCheckout() {
  return (
    <div id="checkout-modal">
      <h2>Finalize sua compra de forma segura e rápida!</h2>
      <Formik
        initialValues={{
          name: "",
          email: "",
          card_number: "",
          expiration_date: "",
          cvv: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          console.log(values);
          setSubmitting(true);
          resetForm();
        }}
      >
        <Form>
          <div>
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
          <div>
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
          <div>
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
              name="card-number"
            />
            <section>
              <img src="/visa-flag.png" alt="Visa" />
              <img src="/mastercard-flag.png" alt="Mastercard" />
              <img src="/american-express-flag.png" alt="American Express" />
              <img src="/paypal-flag.png" alt="PayPal" />
            </section>
          </div>
          <div>
            <label htmlFor="expiration-date-field" className="form-label">
              Data de expiração
            </label>
            <Field
              type="date"
              className="form-control"
              name="expiration_date"
              id="expiration-date-field"
            />
            <ErrorMessage
              component={"span"}
              className="text-danger"
              name="expiration_date"
            />
          </div>
          <div>
            <label htmlFor="cvv-field" className="form-label">
              CVV do cartão
            </label>
            <Field
              type="number"
              className="form-control"
              name="cvv"
              id="cvv-field"
            />
            <ErrorMessage
              component={"span"}
              className="text-danger"
              name="cvv"
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default ModalCheckout;
