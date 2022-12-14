import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'

function NotFound() {
    const [state] = useState({
        heading: "Oops,404",
        paragraph: "Sorry, the page you are looking for does not exist",
        image: "assets/images/404.jpg",
    })
    return (
        <Header heading={state.heading} paragraph={state.paragraph} image={state.image}>
            <Link to="/" className='btn-default'>Go to home</Link>
        </Header>
    )
}

export default NotFound


