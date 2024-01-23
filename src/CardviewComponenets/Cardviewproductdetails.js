import React from 'react';
import '../Css/Cardview.css';
// import { Link } from 'react-router-dom';


const Cardviewproductdetails = () => {

    return (
        <>
            <div className="CardviewproductdetailsMain">
                <div class="table-reponsive box">
                    <table id="example" class="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Case</th>
                                <th>Processor</th>
                                <th>Office</th>
                                <th>Memory</th>
                                <th>Video Card	</th>
                                <th>Primary Storage	</th>
                                <th>Sound Card	</th>
                                <th>Internal Wireless Network Adapter</th>
                                <th>Operating System</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                                <td>$320,800</td>
                                <td>$320,800</td>
                                <td>$320,800</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    );
};

export default Cardviewproductdetails;
