<<<<<<< HEAD
=======
<<<<<<< Updated upstream
import React from 'react';
import '../Css/PreBuiltPC.css';
import '../Css/LaptopView.css';



const LaptopPageInfoTable = () => {

=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
                                <li>
                                    <span>ROG Nebula HDR Display</span>
                                </li>
                                <li>
                                    <span>16-inch</span>
                                </li>
                                <li>
                                    <span>QHD+ 16:10 (2560 x 1600, WQXGA)</span>
                                </li>
                                <li>
                                    <span>IPS-Level</span>
                                </li>
                                <li>
                                    <span>Anti-glare display</span>
                                </li>
                                <li>
                                    <span>DCI-P3:100%</span>
                                </li>

                                <li>
                                    <span>Refresh Rate:240Hz</span>
                                </li>
                                <li>
                                    <span>Response Time:3ms</span>
                                </li>
                                <li>
                                    <span>G-Sync</span>
                                </li>
                                <li>
                                    <span>Pantone Validated</span>
                                </li>
                                <li>
                                    <span>MUX Switch + NVIDIA® Advanced Optimus</span>
                                </li>
                                <li>
                                    <span>Support Dolby Vision HDR :Yes</span>
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898

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
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
<<<<<<< HEAD
                                    <span>{laptop.laptopProcessor}</span>

=======
<<<<<<< Updated upstream
                                    <span>13th Gen Intel® Core™ i9-13980HX Processor 2.2 GHz (36M Cache, up to 5.6 GHz, 24 cores: 8 P-cores and 16 E-cores)</span>
=======
                                    <span>{laptop.laptopProcessor}</span>

>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
<<<<<<< HEAD
                            <span>Graphics	</span>
=======
<<<<<<< Updated upstream
                            <span>Memory Slot	</span>
=======
                            <span>Graphics	</span>
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                        </td>
                        <td>
                            <ul>
                                <li>
<<<<<<< HEAD
                                    <span>{laptop.laptopGraphics}</span>
=======
<<<<<<< Updated upstream
                                    <span>2x SO-DIMM slots</span>
=======
                                    <span>{laptop.laptopGraphics}</span>
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
<<<<<<< HEAD
                            <span>Memory</span>
=======
<<<<<<< Updated upstream
                            <span>Video Graphics	</span>
=======
                            <span>Memory</span>
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                        </td>
                        <td>
                            <ul>
                                <li>
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
                                    <span>NVIDIA® GeForce RTX™ 4060 Laptop GPU
                                        ROG Boost: 2420MHz* at 140W (2370MHz Boost Clock+50MHz OC, 115W+25W Dynamic Boost)
                                        8GB GDDR6</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>M.2 slots support either SATA and NVMe	</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>2</span>
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>I/O Ports	</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>1x 3.5mm Combo Audio Jack</span>
                                </li>
                                <li>
                                    <span>1x HDMI 2.1 FRL</span>
                                </li>
                                <li>
                                    <span>2x USB 3.2 Gen 2 Type-A</span>
                                </li>

                                <li>
                                    <span>1x USB 3.2 Gen 2 Type-C support DisplayPort™ / power delivery / G-SYNC</span>
                                </li>
                                <li>
                                    <span>1x 2.5G LAN port</span>
                                </li>
                                <li>
                                    <span>1x Thunderbolt™ 4 support DisplayPort™ / G-SYNC</span>
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                                </li>
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
                            <span>Internet	</span>
                        </td>
                        <td>
                            <ul>
                                <li>
                                    <span>Wi-Fi 6E(802.11ax) (Triple band) 2*2 + Bluetooth® 5.3 Wireless Card (*Bluetooth® version may change with OS version different.)</span>
                                </li>
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
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

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                            </ul>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <span>Audio	</span>
                        </td>
                        <td>
                            <ul>
<<<<<<< HEAD
=======
<<<<<<< Updated upstream
                                <li>
                                    <span>Smart Amp Technology</span>
                                </li>
                                <li>
                                    <span>Dolby Atmos</span>
                                </li>
                                <li>
                                    <span>AI noise-canceling technology</span>
                                </li>
                                <li>
                                    <span>Hi-Res certification</span>
                                </li>
                                <li>
                                    <span>Support Microsoft Cortana near field/Far field</span>
                                </li>
                                <li>
                                    <span>Built-in array microphone</span>
                                </li>
                                <li>
                                    <span>2-speaker system with Smart Amplifier Technology</span>
                                </li>
=======
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898

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

<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 405ef563bbaab54065b22971f3144edb1d6e0898
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>

    );
};

export default LaptopPageInfoTable;
