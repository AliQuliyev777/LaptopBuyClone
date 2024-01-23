import React from 'react';
import '../Css/Sponsorships.css';

const SponsorRequest = () => {
    return (
        <>
            <div className="SponsorshipsMain">
                <div className="SponsorshipsbackgroundSec">
                    <div className="SponsorshipscenterContainer container mx-auto px-4">
                        <div className="SponsorshipsformRelative">
                            <h2>
                                Influencer Sponsorship Request
                            </h2>
                            <div className="SponsorshipsformBodyDiv">
                                <label htmlFor="Name">Name</label>
                                <div className="SponsorshipsformtempContDiv1">
                                    <input type="text" name="lorem" id="Name" />
                                    <input type="text" name="lorem" id="Name" />
                                </div>
                                <label htmlFor="Email">Email</label>
                                <div className="SponsorshipsformtempContDiv12">
                                    <input type="text" name="lorem" id="Email" />
                                </div>
                                <label htmlFor="Phone">Phone</label>
                                <div className="SponsorshipsformtempContDiv12">
                                    <input type="text" name="lorem" id="Phone" />
                                </div>
                                <label htmlFor="lorem">Adress</label>

                                <div className="SponsorshipsformtempContDiv13">

                                    <input type="text" name="lorem" id="lorem" />
                                </div>

                                <br />
                                <div className="SponsorshipsformtempContDiv121">

                                    <input type="text" name="lorem" id="lorem" />

                                    <input type="text" name="lorem" id="lorem" />

                                </div>

                                <br />

                                <div className="SponsorshipsformtempContDiv121">

                                    <input type="text" name="lorem" id="Address" />

                                    <input type="text" name="lorem" id="Address" />
                                </div>
                                <br />

                                <div className="SponsorshipsformtempContDiv">

                                    <label class="select">

                                        <select id="lorem1" name="lorem1">

                                            <option value="1">Pure CSS Select</option>

                                            <option value="2">With wrapper</option>

                                            <option value="3">No JS!</option>

                                        </select>

                                    </label>

                                </div>

                                <label htmlFor="InfluencerProgram">Influencer Program *</label>

                                <div className="SponsorshipsformtempContDiv1">

                                    <input type="text" name="lorem" id="InfluencerProgram" />

                                </div>

                                <h2>Links to your social accounts</h2>

                                <label htmlFor="TwitchChannel">TwitchChannel</label>

                                <div className="SponsorshipsformtempContDiv1">

                                    <input type="text" name="lorem" id="TwitchChannel" />

                                </div>

                                <label htmlFor="Youtube Channel">Youtube Channel</label>

                                <div className="SponsorshipsformtempContDiv1">

                                    <input type="text" name="lorem" id="YoutubeChannel" />

                                </div>

                                <label htmlFor="TikTokChannel">TikTok Channel</label>

                                <div className="SponsorshipsformtempContDiv1">

                                    <input type="text" name="lorem" id="TikTokChannel" />

                                </div>

                                <label htmlFor="TwitterChannel">Twitter Channel</label>

                                <div className="SponsorshipsformtempContDiv1">

                                    <input type="text" name="lorem" id="lorem" />

                                </div>

                                <label htmlFor="InstagramPage">Instagram Page</label>

                                <div className="SponsorshipsformtempContDiv1">

                                    <input type="text" name="lorem" id="InstagramPage" />

                                </div>

                                <label htmlFor="FacebookPage">Facebook Page</label>

                                <div className="SponsorshipsformtempContDiv1">

                                    <input type="text" name="lorem" id="FacebookPage" />

                                </div>
                                <label htmlFor="OtherPage">Other Page</label>

                                <div className="SponsorshipsformtempContDiv1">

                                    <input type="text" name="lorem" id="OtherPage" />

                                </div>
                                <br />
                                <label htmlFor="textarea">Additional details you want us to know about you and your request</label>
                                <div className="SponsorshipsformtempContDiv1">
                                    <textarea name="Se" id="textarea" cols="100" rows="2"></textarea>
                                    <br />
                                    <br />
                                    <button type='submit'> Submit</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SponsorRequest;
