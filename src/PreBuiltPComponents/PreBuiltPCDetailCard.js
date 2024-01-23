import React, { useState } from 'react';
import '../Css/PreBuiltPC.css';
import { Link } from 'react-router-dom';

const PreBuiltPCDetailCard = () => {
    // API'den gelen veri listesi
    const apiDataList = [
        {
            "id": 12,
            "title": "XOTIC PC G3 Meshify Extreme Ready to Ship",
            "description": "Royal_Mirage Sport Brown Perfu...",
            "price": '$1,649.00',
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "AMD Ryzen™ 5 7600",
            "category": "AUS TUF GAMING A620M-PLUS WIFI",
            "thumbnail": "GeForce RTX™ 4060 Ti",
            "images": [
                "https://i5.walmartimages.com/seo/MSI-GF63-Thin-11UC-1276US-15-6-Gaming-Laptop-144Hz-Intel-Core-i5-11400H-NVIDIA-GeForce-RTX-3050-4GB-16GB-DDR4-Memory-512GB-NVMe-SSD-Windows-11_c53d3561-5068-4ef5-b81b-b61fbe3bd189.1026f3576f0aa70bb082c66e850f5458.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF",
                "https://i5.walmartimages.com/asr/169fbcb8-037d-4915-9106-b09642915a7f.2b19bc70c4982d172221dfcc99e76fa8.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            ]
        },
        {
            "id": 11,
            "title": "XOTIC PC G3 Meshify Extreme Ready to Ship",
            "description": "Royal_Mirage Sport Brown Perfu...",
            "price": 40,
            "discountPercentage": 15.66,
            "rating": 4,
            "stock": 52,
            "brand": "Royal_Miragedssdsdsdsd",
            "category": "AUS TUF GAMING A620M-PLUS WIFI",
            "thumbnail": "https://i.dummyjson.com/data/products/12/thumbnail.jpg",
            "images": [
                "https://i5.walmartimages.com/seo/MSI-GP75-Leopard-10SFK-Gaming-Laptop-Intel-Core-i7-10750H-2-60GHz-10th-Gen-17-3-FHD-Display-32GB-RAM-512GB-SSD-NVIDIA-GeForce-RTX-2070-Windows-11-Hom_255457f8-3d4d-436f-b1cc-3b03497fab7d.cc13c8a62a6e0bbe153e501c8edeed1d.jpeg?odnHeight=640&odnWidth=640&odnBg=FFFFFF",
                "https://i5.walmartimages.com/asr/169fbcb8-037d-4915-9106-b09642915a7f.2b19bc70c4982d172221dfcc99e76fa8.png?odnHeight=640&odnWidth=640&odnBg=FFFFFF"
            ]
        },
        // Diğer öğeler buraya eklenebilir
    ];


    // Her kart için ayrı hovered durumu
    const [hoveredStates, setHoveredStates] = useState(Array(apiDataList.length).fill(false));

    // Hover durumunu güncelleme fonksiyonu
    const handleHover = (index, isHovered) => {
        setHoveredStates(prevStates => {
            const newHoveredStates = [...prevStates];
            newHoveredStates[index] = isHovered;
            return newHoveredStates;
        });
    };

    return (
        <>
            {apiDataList.map((apiData, index) => (
                <div
                    key={apiData.id}
                    className="PreBuiltPCDetailCard"
                    onMouseEnter={() => handleHover(index, true)}
                    onMouseLeave={() => handleHover(index, false)}
                >
                    {hoveredStates[index] ? (
                        <div className="PreBuiltPCDetailCardimg">
                            <Link to={`/product/${apiData.id}`}>
                                <img src={apiData.images[1]} alt="" />
                            </Link>
                        </div>
                    ) : (
                        <div className="PreBuiltPCDetailCardimg">
                            <Link to={`/product/${apiData.id}`}>
                                <img src={apiData.images[0]} alt="" />
                            </Link>
                        </div>
                    )}
                    <div className="PreBuiltPCDetailCardflexx">

                    <div className="PreBuiltPCDetailCardtext">
                        <span>{apiData.title}</span>
                    </div>
                    <div className="PreBuiltPCDetailCartDetail">
                        <ul>
                            <li>aa
                                <p>{apiData.description}</p>
                            </li>
                            <li>
                                <p>Price: ${apiData.price}</p>
                            </li>
                            <li>
                                <p>Rating: {apiData.rating}</p>
                            </li>
                            <li>
                                <p>Rating: {apiData.brand}</p>
                            </li>
                            <li>
                                <p>Rating: {apiData.category}</p>
                            </li>
                        </ul>
                    </div>
                    <div className="PreBuiltPCDetailCartDetaisnize-price-list">
                        <span>{apiData.price}</span>
                        <p className="text-sky-400/100">  <span>Or from</span>
                            <strong>{apiData.price}</strong>
                        </p>
                    </div>
                    </div>

                </div>
            ))}
        </>
    );
};

export default PreBuiltPCDetailCard;
