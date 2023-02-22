import React from "react";
import Nav2 from "../component/Nav2";
import Footer from "../component/Footer";
import "../scss/Show_contact.scss";

const Show_contact = () => {
    return (
        <div>
            <Nav2 />
            <div className="show_contact">
                <div className="contact_infos">
                    <h1 className="contact_name">Bertram Gilfoyle</h1>
                    <ul className="contact-infos">
                        <li>
                            <b>Name:</b>
                        </li>
                        <li>
                            <b>TVA:</b>
                        </li>
                        <li>
                            <b>Country:</b>
                        </li>
                        <li>
                            <b>Type:</b>
                        </li>
                    </ul>
                </div>
                <img
                    className="contact_img"
                    src="../img/contact1.svg"
                    alt=""
                />
            </div>
            <Footer />
        </div>
    );
};

export default Show_contact;