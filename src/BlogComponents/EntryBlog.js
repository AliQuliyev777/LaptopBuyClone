import React, { useState, useEffect } from 'react';
import '../Css/Blog.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Import axios

const EntryBlog = () => {
    const [kukllan, setKukllan] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://newsdata.io/api/1/news?apikey=pub_383438c788d55e180c8cd260d0469508292a6&q=pegasus&language=en');
                console.log('API call successful:', response.data);

                // Güncellenmiş verileri kukllan adlı diziye atayalım
                setKukllan(response.data.results);

            } catch (error) {
                console.error('Error fetching data:', error.message);
            }
        };

        fetchData();
    }, []);



    const [textColor, setTextColor] = useState('white');
    const [textDecoration, setTextDecoration] = useState('none');

    const [textColor1, setTextColor1] = useState('white');
    const [textDecoration1, setTextDecoration1] = useState('none');

    const onMouseOverHandler = () => {
        setTextColor('white');
        setTextDecoration('underline solid green');
    };
    const onMouseOutHandler = () => {
        setTextColor('white');
        setTextDecoration('none');

    };
    const onMouseOverHandler1 = () => {
        setTextColor1('yellow');
        setTextDecoration1('underline solid green');
    };
    const onMouseOutHandler1 = () => {
        setTextColor1('white');
        setTextDecoration1('none');
    };
    return (
        <>
            <div className="EntryBlogMain">
                <div className="EntryBlogMainBlog">

                    <div className="EntryBlogShowDiv" onMouseOver={onMouseOverHandler1}
                        onMouseOut={onMouseOutHandler1}>

                        <div className="EntryBlogShowDivText">
                            <div className="EntryBlogShowDivTexth2">
                                <Link to="/">
                                    <h2
                                        onMouseOver={onMouseOverHandler1}
                                        onMouseOut={onMouseOutHandler1}
                                        style={{ color: textColor1, textDecoration1: textDecoration1 }}
                                    >
                                        Alameda’s paper trail leads straight to Sam Bankman-Fried
                                    </h2>
                                </Link>
                            </div>
                            <div className="EntryBlogShowDivTextp">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quod ad magni?
                                    Inventore harum tempore saepe veniam recusandae esse dolorum.
                                </p>
                                <span>TOM WARREN</span> <span>20 MINUTES AGO</span>
                            </div>
                        </div>

                    </div>

                    <div className="EntryBlogTopStories">
                        <h2>Top Stories</h2>
                        {kukllan.map((article, index) => (

                            <div className="EntryBlogTopStoriesDivs" onMouseOver={onMouseOverHandler} onMouseOut={onMouseOutHandler}>
                                <div className="EntryBlogTopStoriesDivLogo">
                                    <div className="EntryBlogTopStoriesDivLogo121">
                                        <h2>1</h2>
                                    </div>
                                </div>
                                <div className="EntryBlogTopStoriesDiv">
                                    <Link to="/" className="EntryBlogh2">
                                        <h2

                                            onMouseOver={onMouseOverHandler}
                                            onMouseOut={onMouseOutHandler}
                                            style={{ color: textColor, textDecoration: textDecoration }}

                                            className="EntryBlogh2">
                                            <Link to={article.link}>
                                                <h2>{article.title}</h2>
                                            </Link>                                        </h2>
                                    </Link>
                                    <div className="EntryBlogTopStoriesDivtime flex">
                                        <Link to="/">
                                            <p>Jay Peters</p>
                                        </Link>
                                        <p>{article.creator ? article.creator.join(", ") : ""}</p> <p>{article.pubDate}</p>
                                    </div>
                                </div>
                                <div className="EntryBlogTopStoriesImage">
                                    <Link to={article.link}>
                                        <img src={article.image_url} alt="" />
                                    </Link>
                                </div>
                            </div>

                        ))}

                    </div>
                </div>


            </div>
        </>
    );
};

export default EntryBlog;
