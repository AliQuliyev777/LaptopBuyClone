import React, { useState } from 'react';
import '../Css/Blog.css';
import { Link } from 'react-router-dom';

const EntryBlog = () => {
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
                <div className="EntryBlogMainBlog"
              >
                    <div className="EntryBlogShowDiv"   onMouseOver={onMouseOverHandler1}
                    onMouseOut={onMouseOutHandler1}>
                        <Link to="/">
                            <img src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/750x600/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/24995990/236817_SBF_Trial_Stock_CAROLINE_ELLISON_B_CVirginia.jpg" alt="" />
                        </Link>
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
                        <div className="EntryBlogShowDivTextimg">
                            <img
                                src="https://xoticpc.com/cdn/shop/files/PNG-BLKBG-750-2.png?v=1671595773&width=500"
                                alt=""
                            />
                        </div>
                    </div>
                    <div className="EntryBlogTopStories">
                        <h2>Top Stories</h2>
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
                                        Apple’s new video reactions are making therapy incredibly awkward
                                    </h2>
                                </Link>
                                <div className="EntryBlogTopStoriesDivtime flex">
                                    <Link to="/">
                                        <p>Jay Peters</p>
                                    </Link>
                                    <time>Oct 14</time>
                                </div>
                            </div>
                            <div className="EntryBlogTopStoriesImage">
                                <Link to="/">
                                    <img
                                        src="https://cutewallpaper.org/23/hd-wallpaper-download-for-laptop/3037829491.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
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
                                        Apple’s new video reactions are making therapy incredibly awkward
                                    </h2>
                                </Link>
                                <div className="EntryBlogTopStoriesDivtime flex">
                                    <Link to="/">
                                        <p>Jay Peters</p>
                                    </Link>
                                    <time>Oct 14</time>
                                </div>
                            </div>
                            <div className="EntryBlogTopStoriesImage">
                                <Link to="/">
                                    <img
                                        src="https://cutewallpaper.org/23/hd-wallpaper-download-for-laptop/3037829491.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
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
                                        Apple’s new video reactions are making therapy incredibly awkward
                                    </h2>
                                </Link>
                                <div className="EntryBlogTopStoriesDivtime flex">
                                    <Link to="/">
                                        <p>Jay Peters</p>
                                    </Link>
                                    <time>Oct 14</time>
                                </div>
                            </div>
                            <div className="EntryBlogTopStoriesImage">
                                <Link to="/">
                                    <img
                                        src="https://cutewallpaper.org/23/hd-wallpaper-download-for-laptop/3037829491.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
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
                                        Apple’s new video reactions are making therapy incredibly awkward
                                    </h2>
                                </Link>
                                <div className="EntryBlogTopStoriesDivtime flex">
                                    <Link to="/">
                                        <p>Jay Peters</p>
                                    </Link>
                                    <time>Oct 14</time>
                                </div>
                            </div>
                            <div className="EntryBlogTopStoriesImage">
                                <Link to="/">
                                    <img
                                        src="https://cutewallpaper.org/23/hd-wallpaper-download-for-laptop/3037829491.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
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
                                        Apple’s new video reactions are making therapy incredibly awkward
                                    </h2>
                                </Link>
                                <div className="EntryBlogTopStoriesDivtime flex">
                                    <Link to="/">
                                        <p>Jay Peters</p>
                                    </Link>
                                    <time>Oct 14</time>
                                </div>
                            </div>
                            <div className="EntryBlogTopStoriesImage">
                                <Link to="/">
                                    <img
                                        src="https://cutewallpaper.org/23/hd-wallpaper-download-for-laptop/3037829491.jpg"
                                        alt=""
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EntryBlog;
