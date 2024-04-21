// Cardview.js
import React, { useState, useEffect } from 'react';
import '../Css/Cardview.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cardviewproductdetails = () => {
    const { id } = useParams();
    const [laptop, setLaptop] = useState(null);

    useEffect(() => {
        // ID'ye sahip olan laptop bilgisini API'den çekme
        axios.get(`https://localhost:44379/api/home/laptops/${id}`)
            .then(response => {
                setLaptop(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [id]);

    if (!laptop) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <div className="CardviewproductdetailsMain">
                <div className="table-reponsive box">
                    <table id="example" className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Case</th>
                                <th>Processor</th>
                                <th>Office</th>
                                <th>Memory</th>
                                <th>Video Card</th>
                                <th>Primary Storage</th>
                                <th>Sound Card</th>
                                <th>Internal Wireless Network Adapter</th>
                                <th>Operating System</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{laptop.case}</td>
                                <td>{laptop.processor}</td>
                                <td>{laptop.office}</td>
                                <td>{laptop.memory}</td>
                                <td>{laptop.videoCard}</td>
                                <td>{laptop.primaryStorage}</td>
                                <td>{laptop.soundCard}</td>
                                <td>{laptop.internalWirelessNetworkAdapter}</td>
                                <td>{laptop.operatingSystem}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Cardviewproductdetails;
