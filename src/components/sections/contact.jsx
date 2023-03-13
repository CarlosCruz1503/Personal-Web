import React, { useRef } from 'react';
import "../../styles/sections/contact.scss"
import * as yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"



const Contact = () => {

    const asuntoInput = useRef()
    const emailInput = useRef()
    const modal = useRef()


    const contactSchema = yup.object().shape(
        {
            asunto: yup.string(),
            email: yup.string()
                .email("Debes Ingresar un Email Valido")
                .required("Escribe tu gmail para contactarte"),
        })

    const initialValues = {
        asunto: "",
        email: "",
    }

    return (
        <div className='container contact' id="contact">
            <div className="div-contact">
                <h1 className='text-center'>Contactame</h1>
                <h4 className='text-center'>Si tienes algun proyecto en mente y/o necesitas una pagina web, no dudes en contactarme</h4>
                <Formik
                    initialValues={initialValues}
                    onSubmit={async (values) => {
                        let data = {
                            asunto: values.asunto,
                            email: values.email
                        }
                        modal.current.classList.add("show")
                        modal.current.setAttribute("role", "dialog")
                        modal.current.setAttribute("aria-modal", "true")
                        modal.current.style.display = "block"

                        setTimeout(() => {
                            modal.current.classList.toggle("show")
                            modal.current.setAttribute("role", "")
                            modal.current.setAttribute("aria-modal", "")
                            modal.current.style.display = "none"
                            asuntoInput.current.value = ""
                            emailInput.current.value = ""
                        }, 1500)

                        fetch("https://formsubmit.co/ajax/carlosjose445566@gmail.com", {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(data)
                        }).then(e => {
                            asuntoInput.current.value = ""
                            emailInput.current.value = ""

                            console.log(e)
                        })
                            .catch(e => console.log(e))

                    }}
                    validationSchema={contactSchema}

                >
                    {({ errors, isSubmitting }) => {

                        return (
                            <Form className='form-contact'>

                                <Field className="field" id="asunto" name="asunto" type="text" placeholder="Asunto" innerRef={asuntoInput} />
                                {
                                    errors.asunto && (
                                        <div>
                                            <ErrorMessage component="p" name="asunto" className='text-error' ></ErrorMessage>
                                        </div>
                                    )
                                }
                                <Field
                                    className="field"
                                    id="email"
                                    name="email"
                                    placeholder="Tú email"
                                    type="email"
                                    innerRef={emailInput}
                                />

                                {
                                    errors.email && (
                                        <div>
                                            <ErrorMessage component="p" name="email" className='text-error' ></ErrorMessage>
                                        </div>
                                    )
                                }

                                <button type="submit" className='btn btn-submit'>Submit</button>

                                <div class="modal fade" id="exampleModal" style={{ zIndex: "100000000000" }} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref={modal}>
                                    <div class="modal-dialog modal-lg modal-dialog-centered">
                                        <div class="modal-content" style={{ backgroundColor: "green", border: "none" }}>
                                            <div class="modal-header" style={{ border: "none", transform: "background 2s" }}>
                                                <h1 class="modal-title fs-5" id="exampleModalLabel" style={{ color: "black" }}> <i class="bi bi-check-circle-fill" style={{ color: "black" }}></i> Tú formulario fue enviado con exito</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default Contact;