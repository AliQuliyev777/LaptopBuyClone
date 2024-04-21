import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // React Router Link ekleyin
import '../Css/SearchProduct.css';

const SearchProduct = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showSearchProduct, setShowSearchProduct] = useState(true); // Eklediğimiz state

    const handleSearch = async (event) => {
        setSearchTerm(event.target.value);
        setLoading(true);

        try {
            // Arama terimini kodlama
            const searchTermEncoded = encodeURIComponent(event.target.value);

            // Arama teriminin uzunluğunu kontrol etmek için bir minimum ekleme
            if (searchTermEncoded.length < 3) {
                // Arama terimi minimum uzunluktan kısa olduğunda hata durumu
                throw new Error('Search term is too short. Please enter at least 3 characters.');
            }

            const response = await fetch(`https://localhost:44379/api/Home/search?name=${searchTermEncoded}`);

            if (response.ok) {
                const data = await response.json();
                setSearchResults(data);
            } else {
                // HTTP yanıtı başarısız olduğunda veya hatalı olduğunda arama sonuçlarını temizle
                setSearchResults([]);
                throw new Error('Search request failed. Please try again later.');
            }
        } catch (error) {
            // Hata durumunda hata iletisi gösterme
            console.error('Error searching for laptops:', error);
            // Kullanıcıya hata iletisi göstermek için uygun bir mekanizma kullanılabilir
            // Örneğin, bir bildirim bileşeni kullanılabilir
        }

        setLoading(false);
    };




    const handleCloseSearchProduct = () => {
        setShowSearchProduct(false);
    };
    return (

        <div className={showSearchProduct ? "SearchProductMain" : "SearchProductMain hidden"}>
            <div className="close-button" onClick={handleCloseSearchProduct}>
                <p>Click here to close</p>
            </div>
            <div className="SearchProductMaincontaıner">
                <form>
                    <div className="input-group">
                        <input
                            type="text"
                            id="search"
                            placeholder="Search..."
                            autoComplete="off"
                            value={searchTerm}
                            onChange={handleSearch}
                        />
                        <label htmlFor="search" onClick={(e) => { e.stopPropagation(); setSearchTerm(''); setSearchResults([]); }}>
                            <i className="fa fa-solid fa-delete-left"></i>
                        </label>



                    </div>
                    <div className="suggestion-list hıdden">
                        {loading && <p>Loading...</p>}
                        {!loading && searchResults.map((laptop) => (
                            <div key={laptop.id}>
                                {/* Link ile laptop sayfasına gitmek için */}
                                <Link to={`/LaptopPage/${laptop.laptopId}`} onClick={() => { document.querySelector('.SearchProductMain').classList.add('hidden'); }}>
                                    {laptop.laptopName}
                                    <div className='SearchProductMaincontaınerImage'>
                                        <img src={laptop.laptopImage1} alt="" />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </form>
                <div id="apps"></div>
            </div>
        </div>
    );
};

export default SearchProduct;
