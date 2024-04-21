<<<<<<< Updated upstream
import React from 'react';
import '../Css/Cardview.css';
// import { Link } from 'react-router-dom';


const Cardviewproductdetails = () => {
=======
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
>>>>>>> Stashed changes

    return (
        <>
            <div className="CardviewproductdetailsMain">
<<<<<<< Updated upstream
                <div class="table-reponsive box">
                    <table id="example" class="table table-striped table-bordered">
=======
                <div className="table-reponsive box">
                    <table id="example" className="table table-striped table-bordered">
>>>>>>> Stashed changes
                        <thead>
                            <tr>
                                <th>Case</th>
                                <th>Processor</th>
                                <th>Office</th>
                                <th>Memory</th>
<<<<<<< Updated upstream
                                <th>Video Card	</th>
                                <th>Primary Storage	</th>
                                <th>Sound Card	</th>
=======
                                <th>Video Card</th>
                                <th>Primary Storage</th>
                                <th>Sound Card</th>
>>>>>>> Stashed changes
                                <th>Internal Wireless Network Adapter</th>
                                <th>Operating System</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
<<<<<<< Updated upstream
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td>$320,800</td>
                                <td>$320,800</td>
                                <td>$320,800</td>
=======
                                <td>{laptop.case}</td>
                                <td>{laptop.processor}</td>
                                <td>{laptop.office}</td>
                                <td>{laptop.memory}</td>
                                <td>{laptop.videoCard}</td>
                                <td>{laptop.primaryStorage}</td>
                                <td>{laptop.soundCard}</td>
                                <td>{laptop.internalWirelessNetworkAdapter}</td>
                                <td>{laptop.operatingSystem}</td>
>>>>>>> Stashed changes
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
    );
};

export default Cardviewproductdetails;
