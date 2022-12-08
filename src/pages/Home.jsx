import React, { useContext, useState } from "react";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Destinations from "../components/Destinations";
import Footer from "../components/footer/Footer";
import Gallery from "../components/gallery/Gallery";
import Header from "../components/Header";
import Modal from "../components/Modal";
import Services from "../components/service/Services";
import ModalContext from "../context/ModalContext";
import { OPEN_MODAL } from "../context/Types/ModalType";

function Home() {
    const { dispatch } = useContext(ModalContext);
    const [isUser, setIsUser] = useState(false);

    const handleUser = () => {
        setIsUser(!isUser);
    };

    const [state] = useState({
        heading: "We travel friends",
        paragraph:
            "Come and join with us! We travel the most famous place in the world",
    });

    return (
        <>
            <Header heading={state.heading} paragraph={state.paragraph}>
                <button
                    onClick={() => dispatch({ type: OPEN_MODAL })}
                    className="btn-default"
                >
                    Get Started
                </button>
            </Header>

            <Modal>
                {isUser ? (
                    <Login handleChange={handleUser} />
                ) : (
                    <Register handleChange={handleUser} />
                )}
            </Modal>
            <Destinations />
            <Services />
            <Gallery />
            <Footer />
        </>
    );
}

export default Home;
