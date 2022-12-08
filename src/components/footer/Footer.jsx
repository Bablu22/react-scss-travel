import React from 'react'
import FooterIntro from './FooterIntro'
import FooterLinks from './FooterLinks'

function Footer() {


    const footerStyle = {
        background: 'url("/assets/footer/footer.jpg")',
        backgroundAttachment: 'fixed',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
    }
    return (
        <div className="footer" style={footerStyle}>
            <div className="footer_container">
                <div className="container">
                    <div className="footer_container_block">
                        <div className="row">
                            <div className="col-6">
                                <FooterIntro />
                            </div>
                            <div className="col-6">
                                <FooterLinks />
                            </div>
                        </div>
                    </div>
                    <div className="footer_bottom">
                        <p>&copy; copy right travel friends {new Date().getFullYear()}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer