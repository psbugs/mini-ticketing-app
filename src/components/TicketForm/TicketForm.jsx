// src/components/TicketForm/TicketForm.jsx
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useTickets } from "../../context/TicketContext";
import "../../index.css";

const ticketSchema = Yup.object({
    title: Yup.string().required("Title is required."),
    description: Yup.string().required("Description is required."),
    priority: Yup.string().oneOf(["low", "medium", "high"]).required("Priority is required"),
});

export default function TicketForm({ onClose }) {
    const { addTicket } = useTickets();

    return (
        <div className="card">
            <Formik
                initialValues={{ title: "", description: "", priority: "low" }}
                validationSchema={ticketSchema}
                onSubmit={(values, { resetForm }) => {
                    addTicket(values);
                    resetForm();
                    onClose()
                }}
            >
                <Form>
                    <label>Title</label>
                    <Field name="title" />
                    <ErrorMessage name="title" component="div" className="error" />

                    <label>Description</label>
                    <Field as="textarea" name="description" rows="4" />
                    <ErrorMessage name="description" component="div" className="error" />

                    <label>Priority</label>
                    <Field as="select" name="priority">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </Field>

                    <button className="btn-primary" type="submit">Create Ticket</button>
                </Form>
            </Formik>
        </div>
    );
}
