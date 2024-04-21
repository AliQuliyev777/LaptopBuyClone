import React, { useState, useEffect } from 'react';
import '../Css/PreBuiltPC.css';

const AccosoriesMain = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const jsonData = await response.json();
        console.log('API call successful:', jsonData);
        setProducts(jsonData.products);
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products/categories');
        const jsonData = await response.json();
        console.log('API call successful:', jsonData);
        const slicedCategories = jsonData.slice(0, 6); // Slice the first 6 categories
        setCategories(slicedCategories); // Store sliced categories in state
      } catch (error) {
        console.error('Error fetching categories:', error.message);
      }
    };

    fetchCategories();
  }, []);

  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

  return (
    <>

      <div className='bg-black AccosoriesMain '	>
        <div className="">
          <div className="row mb-5 ">
            <div className="col-md-3 ">
              <div className=" mb-4 " >
                <div className="card-header">Categories</div>
                <div className="list-group list-group-flush ">
                  {categories.map((category, index) => (
                    <span
                      className={`list-group-item list-group-item-action ${selectedCategory === category ? 'active' : ''}`}
                      key={index}
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </span>
                  ))}

                </div>
              </div>
            </div>


            <div className="col-md-9">
              <div className="card ">
                <div className="card-body bg-black flex">
                  <div className="row">
                    {filteredProducts.map((product, index) => (
                      <div className="col-md-4 mb-4" key={index}>
                        <div className="card">
                          <img className="card-img-top" src={product.images[0]} alt="" />
                          <div className="card-body">
                            <p className="h6"><small className="text-muted">{product.title}</small><br /></p>
                            <p className="m-0">
                              <i className="fa-xs far fa-star" />
                              <i className="fa-xs far fa-star" />
                              <i className="fa-xs far fa-star" />
                              <i className="fa-xs far fa-star" />
                              <i className="fa-xs far fa-star" />
                            </p>
                            <p className="h5 m-0">$782.00</p>
                          </div>
                          <div className="card-footer p-0">
                            <div className="btn-group" role="group">
                              <button type="button" className="btn btn-light">
                                <i className="fas fa-cart-plus" />
                                <span>Add Cart</span>
                              </button>
                              <button type="button" className="btn btn-light">
                                <i className="fas fa-shopping-cart" />
                              </button>
                              <button type="button" className="btn btn-light">
                                <i className="fas fa-heart" />
                              </button>
                              <button type="button" className="btn btn-light">
                                <i className="fas fa-sync-alt" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}


                  </div>
                </div>
                <div className="card-footer p-3">
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="pagination m-0">
                        <li className="page-item disabled">
                          <span className="page-link" href="#" tabIndex={-1} aria-disabled="true">Previous</span>
                        </li>
                        <li className="page-item"><span className="page-link" href="#">1</span></li>
                        <li className="page-item"><span className="page-link" href="#">2</span></li>
                        <li className="page-item"><span className="page-link" href="#">3</span></li>
                        <li className="page-item">
                          <span className="page-link" href="#">Next</span>
                        </li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <p className="text-right mb-0 mt-1">Showing 1 to 12 of 12 (1 Pages)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>




        </div>

        <div className="container">
          <div className="row mb-5">

            <div className="col-md-12 mt-5 mb-5">
              <div className="card">
                <div className="card-body">
                  <ul className="nav justify-content-center">
                    <li className="nav-item">
                      <span className="nav-link" href="#"><i className="fa-2x fab fa-facebook-f" /></span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link" href="#"><i className="fa-2x fab fa-twitter" /></span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link" href="#"><i className="fa-2x fab fa-instagram" /></span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link" href="#"><i className="fa-2x fab fa-google-plus-g" /></span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link" href="#"><i className="fa-2x fab fa-youtube" /></span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link" href="#"><i className="fa-2x fab fa-pinterest" /></span>
                    </li>
                    <li className="nav-item">
                      <span className="nav-link" href="#"><i className="fa-2x fab fa-linkedin-in" /></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


          </div>
        </div>

      </div>

    </>
  );
};

export default AccosoriesMain;
