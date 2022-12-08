import React, { useState } from 'react'
import AboutImage from '../components/about/AboutImage'
import PageContainer from '../components/PageContainer'

function About() {
    const [state] = useState({
        heading: "about us",
        pageHeading: "world best travel agency company since 2005",
        message: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia libero beatae dolor adipisci. Aperiam impedit distinctio nam itaque repellendus facilis eum sapiente, veritatis labore aliquid ut eveniet repellat! Praesentium, voluptatem."
    })

    return (
        <PageContainer data={state} >
            <AboutImage />
        </PageContainer>
    )
}


export default About

