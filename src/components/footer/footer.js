import React from "react";
import "./style.css";

function Footer() {
    return (
        <div className="footer navbar-default col-sm-12 footer-sticky-bottom">
            <div className="container text-center">
                <p>Sean Gowing | © Copyright 2019</p>
                <p>
                    <a className="hvr-bob" href="https://github.com/twistedx/"> GitHub.com/twistedx |</a>
                    <a className="hvr-bob" href="https://www.linkedin.com/in/sean-gowing-07886891/">| LinkedIn.com/in/sean-gowing-07886891</a></p>
            </div>
        </div>
    );
}

export default Footer;