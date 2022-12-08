import React, { useState } from 'react'
import ContactForm from '../components/contact/ContactForm'
import PageContainer from '../components/PageContainer'

function Contact() {
    const [state] = useState({
        heading: "contact us",
        pageHeading: "leave your message in the contact form",
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia libero beatae dolor adipisci. Aperiam impedit distinctio nam itaque repellendus facilis eum sapiente, veritatis labore aliquid ut eveniet repellat! Praesentium, voluptatem."
    })

    return (
        <PageContainer data={state} >
            <ContactForm />
        </PageContainer>
    )
}

export default Contact

