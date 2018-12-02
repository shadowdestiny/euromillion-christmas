import React, {Component} from "react";
// ---
import "./Header.css";
// ---
import "font-awesome/css/font-awesome.css";

class Header extends Component {
    /*constructor(props) {
        super(props);
    }*/
    onClickLogout(){

    }
    render() {
        return (
            <header data-role="header" className="header">
                <div className="top-bar--desktop">
                    <nav className="top-nav desktop">
                        <div className="wrapper">
                            <a href="/" className="logo logo-desktop-a ui-link" title="Go to Homepage">
                                <img src="https://images.euromillions.com/imgs/logo-desktop.png" alt="Euromillions" />
                            </a>
                            <ul className="ul-top-nav">
                                <div className="social social--top">
                                    <ul>
                                        <li className="fb"><a href="https://www.facebook.com/Euromillionscom-204411286236724/" className="ui-link">
                                            <span className="icon-facebook-3"></span>
                                        </a>
                                        </li>
                                        <li className="tw"><a href="https://twitter.com/_lotteries" className="ui-link">
                                            <span className="icon-twitter"></span>
                                        </a>
                                        </li>
                                        <li className="gp"><a href="https://plus.google.com/+Euromillionscom" className="ui-link">
                                            <span className="icon-gplus-1"></span>
                                        </a>
                                        </li>
                                        <li className="instagram"><a href="https://www.instagram.com/euromillions.com_/" className="ui-link">
                                            <span className="icon-instagram"></span>
                                        </a>
                                        </li>
                                    </ul>
                                </div>
                                <li className="li-language" id="li-language--desktop">
                                    <a className="link myLang li-language--main-link ui-link" href="javascript:void(0);">English</a>
                                    <div className="div-language">
                                        <div className="div-language--shade"></div>
                                        <div className="div-language--content">
                                            <ul className="no-li">
                                                <li className="language--li--current">
                                                    <a className="link myLang ui-link" href="javascript:void(0);">English</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:globalFunctions.setLanguage('es,christmasPlay');" className="ui-link">Español</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:globalFunctions.setLanguage('ru,christmasPlay');" className="ui-link">русский</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:globalFunctions.setLanguage('it,christmasPlay');" className="ui-link">Italiano</a>
                                                </li>
                                                <li>
                                                    <a href="javascript:globalFunctions.setLanguage('nl,christmasPlay');" className="ui-link">Nederlands</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="li-currency" id="li-currency--desktop">
                                    <a rel="nofollow" className="link myCur li-currency--main-link ui-link" href="javascript:void(0);">
                                        <span className="currency--symbol">€</span>
                                        &nbsp; EUR


                                    </a>
                                    <div className="div-currency" style={{"display":"none"}}>
                                        <div className="div-currency--shade"></div>
                                        <div className="div-currency--content">
                                            <ul className="no-li">
                                                <li className="currency--li--current">
                                                    <a rel="nofollow" href="javascript:globalFunctions.setCurrency('EUR');" className="ui-link">
                            <span className="currency--li--code">
                                EUR                            </span>
                                                        <span className="currency--li--name">
                                Euro                            </span>
                                                    </a>
                                                </li>
                                                <li className="currency--li">
                                                    <a rel="nofollow" href="javascript:globalFunctions.setCurrency('USD');" className="ui-link">
                            <span className="currency--li--code">
                                USD                            </span>
                                                        <span className="currency--li--name">
                                US Dollar                            </span>
                                                    </a>
                                                </li>
                                                <li className="currency--li">
                                                    <a rel="nofollow" href="javascript:globalFunctions.setCurrency('GBP');" className="ui-link">
                            <span className="currency--li--code">
                                GBP                            </span>
                                                        <span className="currency--li--name">
                                Pound Sterling                            </span>
                                                    </a>
                                                </li>
                                                <li className="currency--li">
                                                    <a rel="nofollow" href="javascript:globalFunctions.setCurrency('CHF');" className="ui-link">
                            <span className="currency--li--code">
                                CHF                            </span>
                                                        <span className="currency--li--name">
                                Swiss Franc                            </span>
                                                    </a>
                                                </li>
                                                <li className="currency--li">
                                                    <a rel="nofollow" href="javascript:globalFunctions.setCurrency('RUB');" className="ui-link">
                            <span className="currency--li--code">
                                RUB                            </span>
                                                        <span className="currency--li--name">
                                Russian Ruble                            </span>
                                                    </a>
                                                </li>
                                                <li className="currency--li">
                                                    <a rel="nofollow" href="javascript:globalFunctions.setCurrency('AUD');" className="ui-link">
                            <span className="currency--li--code">
                                AUD                            </span>
                                                        <span className="currency--li--name">
                                Australian Dollar                            </span>
                                                    </a>
                                                </li>
                                                <li className="currency--li--show-all">
                                                    <a rel="nofollow" href="/currency" className="ui-link">

                                                        Show all currencies




                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>


                                <li className="li-sign">
                                    <a rel="nofollow" className="btn-theme btn-secondary ui-link" href="/sign-up">Register</a>
                                </li>
                                <li className="li-sign">
                                    <a rel="nofollow" className="btn-theme btn-primary ui-link" href="/sign-in">Log In</a>

                                </li>


                            </ul>
                        </div>
                    </nav>
                </div>
                <div className="top-bar--mobile">
                    <nav className="top-nav mobile">
                        <div className="wrapper">

                            <a href="/" className="logo logo-mobile-a ui-link" title="Go to Homepage">
                                <img src="https://images.euromillions.com/imgs/logo-mobile.png" alt="Euromillions" className="img--logo-tablet"/>
                                <img src="https://images.euromillions.com/imgs/logo-mobile-small.png" alt="Euromillions" className="img--logo-mobile"/>
                                <img src="https://images.euromillions.com/imgs/logo-mobile.png" alt="Euromillions" className="img--logo-xxs" />
                            </a>


                            <ul className="ul-top-nav xs--min">

                                <div className="sign-block xxs--max">
                                    <ul className="ul-top-nav">
                                        <li className="li-sign">
                                            <a rel="nofollow" className="btn-theme btn-secondary ui-link" href="/sign-up">Register</a>
                                        </li>
                                        <li className="li-sign">
                                            <a rel="nofollow" className="btn-theme btn-primary ui-link" href="/sign-in">Log In</a>

                                        </li>

                                    </ul>
                                </div>

                            </ul>
                        </div>
                    </nav>
                </div>

                <div className="head">
                    <div className="wrapper wrapper--desktop-menu">

                        <nav className="main-nav desktop">
                            <ul>
                                <li className="li-play">
                                    <a href="/euromillions/play" className="ui-link">
                                        <span className="txt">Play EuroMillions</span>
                                    </a>
                                </li>
                                <li className="li-play-powerball">
                                    <a href="/powerball/play" className="ui-link">
                                        <span className="txt">Play Powerball</span>
                                    </a>
                                </li>
                                <li className="li-christmas active">
                                    <a href="/christmas-lottery/play" className="ui-link">
                                        <span className="txt">Christmas Lottery</span>
                                    </a>
                                </li>
                                <li className="li-numbers">
                                    <a href="#" className="ui-link">
                                        <span className="txt">Lottery Results</span>
                                    </a>

                                    <div className="submenu">
                                        <ul>
                                            <li>
                                                <a href="/euromillions/results" className="ui-link">
                                                    EuroMillions Results                </a>
                                            </li>
                                            <li>
                                                <a href="/euromillions/results/draw-history-page" className="ui-link">
                                                    EuroMillions History                </a>
                                            </li>
                                            <li>
                                                <a href="/powerball/results" className="ui-link">
                                                    Powerball Results                </a>
                                            </li>
                                            <li>
                                                <a href="/powerball/results/draw-history-page" className="ui-link">
                                                    Powerball History                </a>
                                            </li>
                                            <li>
                                                <a href="/christmas-lottery/results" className="ui-link">
                                                    Christmas Lottery Results                </a>
                                            </li>
                                            <li>
                                                <a href="/en/facts/lottery-results" className="ui-link">
                                                    All results                 </a>
                                            </li>
                                        </ul>
                                    </div>

                                </li>

                                <li className="li-plays">
                                    <a href="#" className="ui-link">
                                        <span className="txt">Play Lotteries</span>
                                    </a>

                                    <div className="submenu">
                                        <ul>
                                            <li>
                                                <a href="/euromillions/play" className="ui-link">
                                                    EuroMillions                </a>
                                            </li>
                                            <li>
                                                <a href="/euromillions/help" className="ui-link">
                                                    How to Play EuroMillions                </a>
                                            </li>
                                            <li>
                                                <a href="/powerball/play" className="ui-link">
                                                    Powerball                </a>
                                            </li>
                                            <li>
                                                <a href="/powerball/how-to-play" className="ui-link">
                                                    How to play Powerball                </a>
                                            </li>
                                            <li>
                                                <a href="/christmas-lottery/play" className="ui-link">
                                                    Christmas Lottery                </a>
                                            </li>
                                            <li>
                                                <a href="/en/facts/lottery-play" className="ui-link">
                                                    All lotteries                 </a>
                                            </li>
                                        </ul>
                                    </div>

                                </li>
                                <li className="li-blog">
                                    <a href="/en/facts" className="ui-link">
                                        <span className="txt">Blog</span>
                                    </a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                </div>
                <nav className="nav mobile">
                    <div className="nav-mobile--inner wrapper">
                        <div className="menu-account-block">
                            <div className="top-nav--mobile-account">

                                <a rel="nofollow" href="/sign-in" className="top-nav--mobile-account--icon ui-link"></a>

                                <div className="top-nav--mobile-account--menu">
                                    <div className="top-nav--mobile-account--menu--inner">

                                        <div className="top-nav--mobile-account--menu--top">
                                            <div className="home-block">
                                                <a className="home-block--ico ico-block ui-link" href="/" title="Go to Homepage"></a>
                                                <a className="home-block--link ui-link" href="/" title="Go to Homepage">Home</a>
                                            </div>









                                        </div>
                                        <div className="top-nav--mobile-account--menu--close">
                                        </div>
                                        <ul className="top-nav--mobile-account--menu--list">
                                            <li className="li--lottery">
                                                <strong>
                                                    Play Lotteries<br/>
                                                </strong>
                                                <a href="/euromillions/play" className="ui-link">Play EuroMillions</a>
                                                <a href="/powerball/play" className="ui-link">Play Powerball</a>
                                                <a href="/christmas-lottery/play" className="ui-link">Christmas Lottery</a>
                                                <a href="/en/facts/lottery-play" className="ui-link">All lotteries</a>
                                                <a href="/euromillions/help" className="ui-link">How to Play EuroMillions</a>
                                                <a href="/powerball/how-to-play" className="ui-link">How to play Powerball</a>
                                            </li>
                                            <li>
                                                <strong>
                                                    Lottery Results<br/>
                                                </strong>
                                                <a href="/euromillions/results" className="ui-link">EuroMillions Results</a>
                                                <a href="/euromillions/results/draw-history-page" className="ui-link">EuroMillions History</a>
                                                <a href="/powerball/results" className="ui-link">Powerball Results</a>
                                                <a href="/powerball/results/draw-history-page" className="ui-link">Powerball History</a>
                                                <a href="/christmas-lottery/results" className="ui-link">Christmas Lottery Results</a>
                                                <a href="/en/facts/lottery-results" className="ui-link">All results</a>
                                            </li>
                                            <li>
                                                <a href="/en/facts" className="ui-link">Blog</a>
                                            </li>
                                            <li>
                                                <a rel="nofollow" href="/sign-in" className="ui-link">Log In</a>
                                                <a rel="nofollow" href="/sign-up" className="ui-link">Register</a>
                                            </li>
                                            <li className="li--lang">
                                                <a href="#" className="ui-link">English</a>

                                                <div className="li--lang--languages">
                                                    <ul className="no-li">



                                                        <li>
                                                            <a href="javascript:globalFunctions.setLanguage('es,christmasPlay');" className="ui-link">Español</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:globalFunctions.setLanguage('ru,christmasPlay');" className="ui-link">русский</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:globalFunctions.setLanguage('it,christmasPlay');" className="ui-link">Italiano</a>
                                                        </li>
                                                        <li>
                                                            <a href="javascript:globalFunctions.setLanguage('nl,christmasPlay');" className="ui-link">Nederlands</a>
                                                        </li>
                                                    </ul>
                                                </div>


                                            </li>
                                            <li className="li--cur">
                                                <a href="#" className="ui-link">€ EUR</a>
                                                <div className="li--cur--currencies">
                                                    <ul className="no-li">
                                                        <li>
                                                            <a rel="nofollow" href="javascript:globalFunctions.setCurrency('USD');" className="ui-link">
                                                                USD US Dollar                                        </a>
                                                        </li>
                                                        <li>
                                                            <a rel="nofollow" href="javascript:globalFunctions.setCurrency('GBP');" className="ui-link">
                                                                GBP Pound Sterling                                        </a>
                                                        </li>
                                                        <li>
                                                            <a rel="nofollow" href="javascript:globalFunctions.setCurrency('CHF');" className="ui-link">
                                                                CHF Swiss Franc                                        </a>
                                                        </li>
                                                        <li>
                                                            <a rel="nofollow" href="javascript:globalFunctions.setCurrency('RUB');" className="ui-link">
                                                                RUB Russian Ruble                                        </a>
                                                        </li>
                                                        <li>
                                                            <a rel="nofollow" href="javascript:globalFunctions.setCurrency('AUD');" className="ui-link">
                                                                AUD Australian Dollar                                        </a>
                                                        </li>
                                                        <li>
                                                            <a rel="nofollow" href="/currency" className="ui-link">Show all currencies</a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                            </div>
                        </div>

                        <button className="menu-ham"><span className="bar"></span></button>

                        <ul>
                            <div className="wrapper">


                            </div>
                        </ul>
                    </div>

                </nav>
            </header>
        );
    }
}

export default Header;
