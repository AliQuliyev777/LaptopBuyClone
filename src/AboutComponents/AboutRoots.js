import React, { useState } from 'react';
import '../Css/About.css';

const images = [
    {
        src: 'https://www.geekgeneration.fr/wp-content/uploads/2019/10/MSI.png',
        alt: 'Image 1',
        Name: 'Support',
        paragraf1: 'Our commitment is easy. We deliver cutting edge technology with rock solid stability and support. All systems are hand built to order and supported by true enthusiasts in Lincoln, Nebraska. ',
        paragraf2: 'Deep in the roots of all XOTIC PC staff is hardworking midwest values. In our core we unwaveringly believe hard work and perseverance will pay off in the long run. We are relentless to achieve customer satisfaction.',
        paragraf3: 'Deep in the roots of all XOTIC PC staff is hardworking midwest values. In our core we unwaveringly believe hard work and perseverance will pay off in the long run. We are relentless to achieve customer satisfaction.',
        paragraf4: 'Deep in the roots of all XOTIC PC staff is hardworking midwest values. In our core we unwaveringly believe hard work and perseverance will pay off in the long run. We are relentless to achieve customer satisfaction.',
    },
    {
        src: 'https://static.tweaktown.com/content/8/2/8279_07_asus-dual-geforce-gtx-1060-mid-range-cheap.jpg',
        alt: 'Image 2',
        Name: 'Support2',
        paragraf1: 'Each component is hand selected and qualified to provide only the most jaw dropping experience possible. We are known for our overclocking without sacrificing stability',
        paragraf2: '2nd stability and support. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo i2sa, quam amet, vero eos, repellat voluptatibus deleniti ipsum odio nostrum nihil voluptatum omnis molestias corrupti qu',
        paragraf3: 'Deep in the roots of all XOTIC PC staff is hardworking midwest values. In our core we unwaveringly believe hard work and perseverance will pay off in the long run. We are relentless to achieve customer satisfaction.',
        paragraf4: 'Deep in the roots of all XOTIC PC staff is hardworking midwest values. In our core we unwaveringly believe hard work and perseverance will pay off in the long run. We are relentless to achieve customer satisfaction.',
    },
    {
        src: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/ba793716045415.5629a4e0b7c64.png',
        alt: 'Image 2',
        Name: 'Support2',
        paragraf1: 'Each component is hand selected and qualified to provide only the most jaw dropping experience possible. We are known for our overclocking without sacrificing stability',
        paragraf2: '2nd stability and support. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo i2sa, quam amet, vero eos, repellat voluptatibus deleniti ipsum odio nostrum nihil voluptatum omnis molestias corrupti qu',
        paragraf3: 'Deep in the roots of all XOTIC PC staff is hardworking midwest values. In our core we unwaveringly believe hard work and perseverance will pay off in the long run. We are relentless to achieve customer satisfaction.',
        paragraf4: 'Deep in the roots of all XOTIC PC staff is hardworking midwest values. In our core we unwaveringly believe hard work and perseverance will pay off in the long run. We are relentless to achieve customer satisfaction.',
    },
    // Diğer resimler buraya eklenebilir...
];

const AboutRoots = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const toggleParagraf2 = (index) => {
        if (selectedImage === index) {
            // Eğer aynı resme tekrar tıklanırsa, seçilen resmi kaldır
            setSelectedImage(null);
        } else {
            // Başka bir resme tıklanırsa, yeni resmi seç
            setSelectedImage(index);
        }
    }

    return (
        <>
            <section className="AboutRootsMain">
                <div className="AboutRootsMainDiv">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className={`AboutRootsDiv1 ${selectedImage === index ? 'selected' : ''}`}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                            />
                            <div className="asasa">
                                <h3>{image.Name}</h3>
                                <p>{image.paragraf1}</p>
                                <div className="asasa2" onClick={() => toggleParagraf2(index)}>
                                    <i className={`fa-solid fa-down-long ${selectedImage === index ? 'fa-down' : ''}`} />
                                </div>
                            </div>

                            <div className={`Paragraf ${selectedImage === index ? 'block' : 'none'}`}>
                                <p>{image.paragraf2}</p>
                                <p>{image.paragraf3}</p>
                                <p>{image.paragraf4}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default AboutRoots;
