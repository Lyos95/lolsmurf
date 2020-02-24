import React, { Component } from 'react';
import Link from 'next/link';

const useTagFunc = () => {
    let useTag = '<use xlink:href="#star" />';
    return <svg className="star" dangerouslySetInnerHTML={{__html: useTag }} />;
}

class DetailsTab extends Component {

    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <div className="col-lg-12 col-md-12 tamosdandomargen">
                <div className="tab products-details-tab">
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <ul className="tabs">
                                <li 
                                    onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab1')}}
                                    className="current"
                                >
                                    <a href="#">
                                        <div className="dot"></div> Description
                                    </a>
                                </li>

                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab2')}}>
                                    <a href="#">
                                        <div className="dot"></div> Delivery
                                    </a>
                                </li>
                                
                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab3')}}>
                                    <a href="#">
                                        <div className="dot"></div> Why Buy From Us
                                    </a>
                                </li>

                                <li onClick={(e) => {e.preventDefault(); this.openTabSection(e, 'tab4')}}>
                                    <a href="#">
                                        <div className="dot"></div> Reviews
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="tab_content">
                                <div id="tab1" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <p>These accounts are perfect for anyone who wants to practice new champs in a different account or for those who want to smurf and prove themselves in ranked. You will receive the blue essence gained from leveling up as well as the capsules gained from getting to level 30. Inside these capsules, you can gain a mix of additional blue essence and champion shards!! With champion shards, you have 2 possibilities, you can either exchange them for blue essences or you can get the champion cheaper than you would in the league of legends store!! The accounts have a lifetime warranty
</p>

                                        <div className="row">
                                            <div className="col-lg-6 col-md-6">
                                                <ul>
                                                    <li>BE: Around 40000</li>
                                                    <li>Warranty: lifetime warranty</li>
                                                    <li>Email: Unverified</li>
                                                </ul>
                                            </div>

                                            <div className="col-lg-6 col-md-6">
                                                <ol>
                                                    <li>Name: Random Summoner name</li>
                                                    <li>Delivery: Instant delivery</li>
                                                    <li>Others: Capsules</li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                     

                                <div id="tab2" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <div className="table-responsive">
                                            <table className="table table-bordered">
                                                <tbody>
                                                    <tr>
                                                        <td>Delivery</td>
                                                        <td>As soon as you complete the transaction you will be redirect to a page that will contain your new account. In addition, we will send
                                                            you an email with all the account information  </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div id="tab3" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <p>Here are more great reasons to buy from us:</p>

                                        <ol>
                                            <li>If your account gets banned by a reasonable reasonm like, suspect of sharing account,buyed account detection, botting etc, we will give you another account completly for free</li>
                                            <li>We will give you the best support you can have</li>
                                            <li>We have been selling League of legends lvl 30 accounts for more than 5 years</li>
                                        </ol>
                                    </div>
                                </div>

                                <div id="tab4" className="tabs_item">
                                    <div className="products-details-tab-content">
                                        <div className="product-review-form">
                                            <h3>Customer Reviews</h3>

                                            

                                            <div className="review-comments">
                                                <div className="review-item">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <h3>100% trustworthly and fast delivery</h3>
                                                    <span><strong>Alfred</strong> on <strong>Sep 21, 2019</strong></span>
                                                    <p>Honestly had my doubts at first, thought I was gonna get scammed or something but nah this was legit. I just went and bought one of the accounts and within 2 minutes they sent me an email with the information.</p>
                                                </div>

                                                <div className="review-item">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="far fa-star"></i>
                                                    </div>
                                                    <h3>The warranty is amazing</h3>
                                                    <span><strong>Anonymous</strong> on <strong>Jan 21, 2020</strong></span>
                                                    <p>Very good, replace if banned, quick and easy</p>
                                                </div>

                                                <div className="review-item">
                                                    <div className="rating">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </div>
                                                    <h3>Fast delivery</h3>
                                                    <span><strong>Anonymous</strong> on <strong>Sep 21, 2019</strong></span>
                                                    <p>The easiest, most streamlined transaction imaginable. Quick and smooth delivery of the account. Would HUGELY recommend!</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DetailsTab;
