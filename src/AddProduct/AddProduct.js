import React, { useState } from 'react';
import axios from 'axios';
import '../Css/AddProduct.css';

const AddProduct = () => {
    const [laptop, setLaptop] = useState({
        laptopName: '',
        laptopCompany: '',
        laptopPrice: '',
        laptopDisplay: '',
        laptopResolution: '',
        laptopAdditionalDisplay: '',
        laptopProcessor: '',
        laptopGraphics: '',
        laptopMemory: '',
        laptopStorage: '',
        laptopCamera: '',
        laptopAudio: '',
        laptopBattery: '',
        laptopPowerSupply: '',
        laptopColor: '',
        laptopImage1: '',
        laptopImage2: '',
        laptopImage3: '',
        laptopImage4: '',
        laptopImage5: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLaptop(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://localhost:44379/api/Home', laptop);
            alert('Laptop added successfully!');
            setLaptop({
                laptopName: '',
                laptopCompany: '',
                laptopPrice: '',
                laptopDisplay: '',
                laptopResolution: '',
                laptopAdditionalDisplay: '',
                laptopProcessor: '',
                laptopGraphics: '',
                laptopMemory: '',
                laptopStorage: '',
                laptopCamera: '',
                laptopAudio: '',
                laptopBattery: '',
                laptopPowerSupply: '',
                laptopColor: '',
                laptopImage1: '',
                laptopImage2: '',
                laptopImage3: '',
                laptopImage4: '',
                laptopImage5: ''
            });
        } catch (error) {
            console.error('Error adding laptop:', error);
            alert('An error occurred while adding the laptop.');
        }
    };

    const laptopFeatures = [
        'laptopName', 'laptopCompany', 'laptopPrice', 'laptopDisplay', 'laptopResolution',
        'laptopAdditionalDisplay', 'laptopProcessor', 'laptopGraphics', 'laptopMemory',
        'laptopStorage', 'laptopCamera', 'laptopAudio', 'laptopBattery', 'laptopPowerSupply',
        'laptopColor', 'laptopImage1', 'laptopImage2', 'laptopImage3', 'laptopImage4', 'laptopImage5'
    ];

    return (
        <>
         
            
            <div className=" AddProductFormflex   " id="form">
                <form className="AddProductForm" onSubmit={handleSubmit}>
                    {laptopFeatures.map((feature, index) => (
                        <div key={index} className="mb-3">
                            <label htmlFor={feature} className="form-label">
                                {feature.replace('laptop', '')} 
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id={feature}
                                name={feature}
                                value={laptop[feature]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}
                    <div className="d-flex ">
                        <button
                            type="submit"
                            className="btn btn-success text-white btn-outline-success form-control w-50 m-3"
                            id="ekleButton"
                        >
                            Add Laptop
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default AddProduct;
