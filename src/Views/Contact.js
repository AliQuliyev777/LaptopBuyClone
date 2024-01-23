import React from 'react';
import '../Css/Contact.css'
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <section className="ContactMainDiv">
            <h1>CONTACT INFORMATION</h1>
            <div className="ContactFlexDiv">
                <div className="ContactOneDiv">
                    <div className="CustomerServiceText">
                        <h1>Customer Service & Sales</h1>
                    </div>
                    <div className="CustomerServiceSupport">
                        <p>Sales & Support Hours </p>
                        <br />
                        <div className="SupportHourAll">
                            <p>Monday - Friday</p>
                            <p>9:00AM - 5:30 PM CST</p>
                        </div>
                        <br />

                        <div className="OnlineSupportAll">
                            <p>XOTIC PC Lifetime Online Support</p>
                            <p>Ticketing System                              <span>Email <span style={{ color: 'red', cursor: 'pointer' }}> Submit a Request</span></span></p>
                            <span>Email <span style={{ color: 'red', cursor: 'pointer' }}>sales@xoticpc.com | support@xoticpc.com</span></span>
                        </div>
                        <br />

                        <p>Apple Messaging</p>
                        <Link to="/">
                            <img src="https://ucarecdn.com/623b829e-6ed8-4e30-81ce-a7cdaed16476/Messages%20for%20Business%20-%20Message%20Us%20-%20Black.svg" alt="" />
                        </Link>
                        <p >XOTIC PC Lifetime Telephone Customer Service & Sales</p>
                        <p><span style={{ color: 'red', cursor: 'pointer' }}>1-877-289-9684 </span> (US & Canada)</p>
                        <p><span style={{ color: 'red', cursor: 'pointer' }}>402-466-2090 </span> (US & Canada)</p>

                    </div>
                </div>


                <div className="ContactOneDiv">
                    <div className="CustomerServiceText">
                        <h1>Corporate Info</h1>
                    </div>
                    <div className="CustomerServiceSupport">
                        <p>Headquarters </p>
                        <div className="SupportHourAll">
                            <p>4000 Lowell Circle</p>
                            <p>Lincoln, NE   68502</p>
                        </div>
                        <br />

                        <div className="OnlineSupportAll">
                            <p>Business Hours</p>
                            <p>Monday - Friday</p>
                            <p>9:00AM - 5:30 PM CST</p>
                        </div>
                        <br />

                        <p>Business Phone</p>
                        <p>402-466-2090</p>
                        <br />
                        <p>Apple Messaging</p>
                        <Link to="/">
                            <img src="https://ucarecdn.com/623b829e-6ed8-4e30-81ce-a7cdaed16476/Messages%20for%20Business%20-%20Message%20Us%20-%20Black.svg" alt="" />
                        </Link>
                        <p >Human Resources</p>
                        <p><span style={{ color: 'red', cursor: 'pointer' }}>Human Resources</span></p>
                        <br />
                        <p>Marketing</p>
                        <p>For marketing inquiries or proposals send to:</p>
                        <p><span style={{ color: 'red', cursor: 'pointer' }}>marketing@xoticpc.com</span></p>

                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6042.952309968123!2d-96.71035!3d40.773545!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8796beaa76cd02a1%3A0x4487230b7e6515a5!2sXOTIC%20PC!5e0!3m2!1str!2sus!4v1695872777651!5m2!1str!2sus"
                width="100%"
                height="350vh"
                frameBorder="0"
                style={{ border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            />
        </section>


    );
}

export default Contact;
