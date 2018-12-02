import React, {Component} from "react";
// ---
import "./Footer.css";


class Footer extends Component {
    /*constructor(props) {
        super(props);
    }*/
    onClickLogout(){

    }
    render() {
        return (
            <footer data-role="footer" className="main-foot">

                <div className="footer-top">
                    <div className="wrapper">
                        <ul className="no-li inline">
                            <li className="footer-top--eu--li">
                                <img src="./img/footer/top/desktop/eu.png" className="footer-top--eu" />
                            </li>
                            <li className="footer-top--gerald--li">
                                <img src="./img/footer/top/desktop/gerald.png" className="footer-top--gerald"/>
                            </li>
                            <li className="footer-top--18plus--li">
                                <img src="./img/footer/top/desktop/18plus.png" className="footer-top--18plus"/>
                            </li>
                            <li className="footer-top--wheel--li">
                                <img src="./img/footer/top/desktop/wheel.png" className="footer-top--wheel"/>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="cols box-links">
                        <div className="col col16per">
                            <strong>PLAY</strong>
                            <ul>
                                <li>
                                    <a href="/en/facts/lottery-play" className="ui-link">All lotteries</a>
                                </li>
                                <li>
                                    <a href="/euromillions/play" className="ui-link">EuroMillions</a>
                                </li>
                                <li>
                                    <a href="/christmas-lottery/play" className="ui-link">Christmas Lottery</a>
                                </li>
                                <li>
                                    <a href="/powerball/play" className="ui-link">Powerball</a>
                                </li>
                                <li>
                                    <a href="/en/facts/lottery-drawing-times" className="ui-link">Draw Times</a>
                                </li>
                                <li>
                                    <a href="/en/facts/euromillions-drawing-times" className="ui-link">EuroMillions Draw Time</a>
                                </li>
                                <li>
                                    <a href="/en/facts/powerball-drawing-times" className="ui-link">Powerball Draw Time</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col col16per">
                            <strong>WINNING NUMBERS</strong>
                            <ul>
                                <li>
                                    <a href="/en/facts/lottery-results" className="ui-link">All lotteries results</a>
                                </li>
                                <li>
                                    <a href="/euromillions/results" className="ui-link">EuroMillions Results</a>
                                </li>
                                <li>
                                    <a href="/euromillions/results/draw-history-page" className="ui-link">EuroMillions Draw History</a>
                                </li>
                                <li>
                                    <a href="/christmas-lottery/results" className="ui-link">Christmas Lottery Results</a>
                                </li>
                                <li>
                                    <a href="/powerball/results" className="ui-link">Powerball Results</a>
                                </li>
                                <li>
                                    <a href="/powerball/results/draw-history-page" className="ui-link">Powerball Draw History</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col col20per">
                            <strong>MY ACCOUNT</strong>
                            <ul>
                                <li>
                                    <a href="/sign-in" className="ui-link">Log In</a>
                                </li>
                                <li>
                                    <a href="/sign-up" className="ui-link">Sign Up</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col col16per">
                            <strong>HELP</strong>
                            <ul>
                                <li>
                                    <a href="/euromillions/faq" className="ui-link">FAQ</a>
                                </li>
                                <li>
                                    <a href="/contact" className="ui-link">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col col16per">
                            <strong>ABOUT</strong>
                            <ul>
                                <li>
                                    <a href="/legal/about" rel="nofollow" className="ui-link">About Us</a>
                                </li>
                                <li>
                                    <a href="/legal/index" className="ui-link">Terms &amp; Conditions</a>
                                </li>
                                <li>
                                    <a href="/legal/privacy" rel="nofollow" className="ui-link">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="/legal/cookies" rel="nofollow" className="ui-link">Cookies</a>
                                </li>
                                <li>
                                    <a href="/en/facts" rel="nofollow" className="ui-link">Blog</a>
                                </li>



                            </ul>
                        </div>
                        <div className="col col16per">
                            <strong>LANGUAGES</strong>
                            <ul>
                                <li><a href="https://euromillions.com" className="ui-link">Global English</a></li>
                                <li><a href="https://euromillions.com/ru" className="ui-link">Russian</a></li>
                                <li><a href="https://euromillions.com/es" className="ui-link">Spanish</a></li>
                                <li><a href="https://euromillions.com/it" className="ui-link">Italian</a></li>
                                <li><a href="https://euromillions.com/nl" className="ui-link">Dutch</a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="cards-block">
                        <div className="inner">

                            <ul className="no-li inline">
                                <li className="visa-li">
                                    <a href="http://www.visaeurope.com/" className="visa-a ui-link" title="Visa Europe" rel="nofollow">
                                        <img src="./img/footer/cards/desktop/visa.png"/>
                                    </a>
                                </li>
                                <li className="master-li">
                                    <a href="http://www.mastercard.com/" className="master-a ui-link" title="Mastercard" rel="nofollow">
                                        <img src="./img/footer/cards/desktop/mastercard.png"/>
                                    </a>
                                </li>
                                <li className="comodo-li">
                                    <a href="https://www.comodo.com/" className="comodo-a ui-link" title="Comodo" rel="nofollow">
                                        <img src="./img/footer/cards/desktop/comodo.png"/>
                                    </a>
                                </li>
                                <li className="pcidss-li">
                                    <a href="#" className="pcidss-a ui-link" title="PCI DSS Compliant">
                                        <img src="./img/footer/cards/desktop/pci-dss-compliant.png"/>
                                    </a>
                                </li>

                            </ul>
                        </div>

                    </div>
                </div>


                <div className="wrapper">
                    <div className="copyright-text">

                        <p>
                            This service operates under the Gaming License #5536/JAZ authorised and regulated by the Government of Curaçao. This site is operated by PanaMedia B.V., Emancipatie Boulevard 29, Willemstad, Curaçao and payment processing services are provided by PanaMedia International Limited, 30/3 Sir Augustus Bartolo Street, XBX 1093, Ta Xbiex Malta (EU). All transactions are charged in Euros. Prices displayed in other currencies are for informative purposes only and are converted according to actual exchange rates.            </p>
                        <p>
                            Copyright © 2011-2018 by EuroMillions.com. All rights reserved.            </p>

                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
