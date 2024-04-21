import React, { useState, useEffect } from 'react';
import '../Css/Desktops.css';




function DesktopClickAboutOverviewSpecifationCard() {
    const [urun, setUrun] = useState(null);

    useEffect(() => {
        // Ürün bilgilerini getir
        fetch('https://dummyjson.com/products/1')
            .then((res) => res.json())
            .then((veri) => setUrun(veri))
            .catch((hata) => console.error('Ürün getirme hatası:', hata));
    }, []);


    const DesktopSpecItem = ({ title, description, imageSrc, sub }) => {

        return (
            <div className="DesktopClickAboutOverviewSpecifationAllDiv">
                <div className="DesktopClickAboutOverviewSpecifationDiv">
                    <p>{sub}</p>

                    <h3>{title}</h3>
                    <br />
                    <p>{description}</p>
                </div>
                <div className="DesktopClickAboutOverviewSpecifationDiv2">
                    <img src={imageSrc} alt="" />
                </div>
            </div>
        );
    }

    const DesktopSpecItem2 = ({ title2, description2, imageSrc2, sub2 }) => {
        return (
            <div className="DesktopClickAboutOverviewSpecifationAllDiv">
                <div className="DesktopClickAboutOverviewSpecifationDiv2">
                    <img src={imageSrc2} alt="" />
                </div>
                <div className="DesktopClickAboutOverviewSpecifationDiv">
                    <p className='DesktopClickAboutOverviewSpecifationDivsub'>{sub2}</p>

                    <h3>{title2}</h3>
                    <br />
                    <p>{description2}</p>
                </div>
            </div>
        );
    }

    return (
        <>

            <div className="DesktopClickAboutOverviewSpecifationMain">
                <div className="DesktopClickAboutOverviewSpecifation">
                    <div className="DesktopClickAboutOverviewSpecifationAllDiv">
                        <div className="DesktopClickAboutOverviewSpecifationDiv2">
                            <div className="DesktopClickAboutOverviewSpecifationDiv2number">
                                <p>Video card is faster</p>
                                <p>up to 6X</p>
                            </div>
                            <div className="DesktopClickAboutOverviewSpecifationDiv2number">
                                <p>Video card is faster</p>
                                <p>up to 6X</p>
                            </div>
                            <div className="DesktopClickAboutOverviewSpecifationDiv2number">
                                <p>Video card is faster</p>
                                <p>up to 6X</p>
                            </div>
                            <div className="DesktopClickAboutOverviewSpecifationDiv2number">
                                <p>Video card is faster</p>
                                <p>up to 6X</p>
                            </div>
                        </div>
                        <div className="DesktopClickAboutOverviewSpecifationDiv">
                            <p>GPU</p>
                            <h3>TODAY'S INNOVATIONS SHAPING TOMORROW'S WORLD</h3>
                            <br />
                            <p>The G7 uses only the highest quality components to meet its stringent system requirements. It has state-of-the-art components throughout, from the graphics card and processor to the power supply and cooling system. The AMD RadeonTM RX 7000 Series and the NVIDIA GeForce RTX 4080/4090 belong to this category. It has powerful processors from AMD's RyzenTM RX 7000 Series and Intel's 14th Generation Core i7 and i9 series, making it suitable for both intensive gaming and professional use. In addition, the 7200MHz DDR5 RAM and the lightning-fast M2 PCIe 5.0 SSDs are included to provide top-notch performance in every area.</p>
                        </div>
                    </div>
                </div>
                <div className="DesktopClickAboutOverviewSpecifation">
                    <DesktopSpecItem
                        title="THE MOST ADVANCED GRAPHICS FOR GAMERS"
                        description="Experience unprecedented performance, visuals, and efficiency at 4K and beyond with AMD Radeon™ RX 7000 Series graphics cards, the world's first gaming GPUs powered by AMD RDNA™ 3 chiplet technology. Immerse yourself in breathtaking visuals with the pinpoint color accuracy of AMD Radiance Display™ Engine and boost frame rates with AMD FidelityFX™ Super Resolution and Radeon™ Super Resolution upscaling technologies.1,2 To unlock even more performance, combine AMD Radeon™ RX 7000 Series graphics and compatible AMD Ryzen™ processors to activate AMD smart technologies."
                        imageSrc="https://ucarecdn.com/0fefe44c-5409-40dc-b03c-9e8d64828c58/-/format/auto/-/preview/3000x3000/-/quality/lighter/AMDRadeon.png"
                    />
                </div>
                <div className="DesktopClickAboutOverviewSpecifation">
                    <DesktopSpecItem2
                        sub2="CPU"
                        title2="MORE CORES, MORE PROCESSING POWER  "
                        imageSrc2="https://ucarecdn.com/dcf1c425-fa75-430f-9cfb-8e210a6cbbba/-/format/auto/-/preview/3000x3000/-/quality/lighter/c57e486c-681b-4f21-a30a-ee14d436095b.jpg"
                        description2="The G7 LANCOOL has cutting-edge performance for both recreational and professional gamers thanks to the latest 14th Gen Intel® CoreTM desktop CPUs. 14th Generation Intel® CoreTM desktop CPUs are built for both gaming and work, with up to 24 cores and 32 threads, 6.0 GHz clock rates, and 36 MB cache.  "
                    />
                </div>
                <div className="DesktopClickAboutOverviewSpecifation">
                    <DesktopSpecItem
                        sub2="RAM AND STORAGE "
                        title="EXTREME SPEED    "
                        description="With an incredible 196GB of fast DDR5 memory, the G7 LANCOOL offers unmatched performance along with customizable design for a unique look.
                        Modern M.2 SSD drives ensure consistent data storage and are ideal for demanding workloads. Their increased throughput guarantees quick fixes for even the trickiest problems.      "
                        imageSrc="https://ucarecdn.com/2d33e7b5-0fa5-4ac7-ab18-f70d0102cd96/-/format/auto/-/preview/3000x3000/-/quality/lighter/01-990-of-pc-overview-FB-Fullbleed-DT-1440x968.jpg"
                    />
                </div>
            </div>


            <div className="DesktopClickAboutOverviewSpecifationDiv21">
                {urun ? (
                    <div className="DesktopClickAboutOverviewSpecifationDiv21">
                        <div className="DesktopClickAboutOverviewSpecifationDiv2number1">
                            <p>Memory</p>
                            <p>{urun.title}</p>
                        </div>
                        <div className="DesktopClickAboutOverviewSpecifationDiv2number1">
                            <p>Read SSD</p>
                            <p>{urun.price}</p>
                        </div>
                        <div className="DesktopClickAboutOverviewSpecifationDiv2number1">
                            <p>Memory frequency</p>
                            <p>{urun.brand}</p>
                        </div>
                        <div className="DesktopClickAboutOverviewSpecifationDiv2number1">
                            <p>Storage capacity</p>
                            <p>{urun.stock}</p>
                        </div>
                    </div>
                ) : (
                    <p>Ürün yükleniyor...</p>
                )}
            </div>

        </>
    );
}

export default DesktopClickAboutOverviewSpecifationCard;
