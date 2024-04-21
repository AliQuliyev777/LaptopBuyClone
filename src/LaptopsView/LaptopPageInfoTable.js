import React, { } from 'react';
import '../Css/PreBuiltPC.css';
import '../Css/LaptopView.css';
import { useParams } from 'react-router-dom';



const LaptopPageInfoTable = ({ laptops }) => {
    const { laptopId } = useParams();
    const laptop = laptops && laptops.find(laptop => laptop.laptopId === parseInt(laptopId));


    if (!laptop) {
        return <div>Laptop not found</div>;
    }
    return (
        <>
            <table className="LaptopPageInfoTableMain">
                <thead>
                    <tr>
                        <th width="109"><span>Description</span></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span>Display</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopDisplay}</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Resolution	</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>{laptop.laptopResolution}</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>AdditionalDisplay	</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>{laptop.laptopAdditionalDisplay}</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Processor	</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>{laptop.laptopProcessor}</span>

                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Graphics	</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>{laptop.laptopGraphics}</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Memory</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>{laptop.laptopMemory}</span>

                                </li>



                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Storage	</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>{laptop.laptopStorage}</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>OperatingSystem	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopOperatingSystem}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Ioports	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopIoports}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Camera	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopCamera}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Audio	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopAudio}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Ioports	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopIoports}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>NetworkCommunication	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopNetworkCommunication}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Ioports	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopIoports}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Battery	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopBattery}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>PowerSupply	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopPowerSupply}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Color	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopColor}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Dimensions	</span>
                        </td>
                        <td>
                            <ul>

                                <li>
                                    <span>{laptop.laptopDimensions}</span>
                                </li>

                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>

    );
};

export default LaptopPageInfoTable;
