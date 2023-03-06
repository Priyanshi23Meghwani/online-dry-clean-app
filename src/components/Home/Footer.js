import React from "react";
import "./Footer.css";
import Logo from "../../assets/FabCare.png";

// footer component
const Footer = () => {

    return(
        <div className="footer">
            <footer className="container-fluid">
                <div className="row">
                    <div className="col-md">
                        <img className="img-fluid" src={Logo}/>
                    </div>
                    <div className="col-md-3">
                        <h5> About Company</h5>
                        <p>We are a leading dry cleaning <br/>company with over 20 years of <br/>experience in the industry.</p>
                        
                    </div>
                    <div className="col-md-3">
                        <h5>Office</h5>
                        <p>1234 Main Street</p>
                        <p>City, State ZIP</p>
                        <p>abc@company.com</p>
                        <p>0123456789</p>
                    </div>
                    <div className="col-md-3 xyz">
                        <h5>Online Dry Clean &copy; 2023 - All Rights Reserved</h5>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer;