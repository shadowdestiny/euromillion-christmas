import React, {Component} from 'react';
//import axios from 'axios';
import Header from "./header/Header";
import Footer from "./footer/Footer";

class ChristmasLotery extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            foreach_euro : 30.00,
            total_tickets_selected : 0,
            tickets       : [
                {
                    serial              : "00007",
                    available_tickets   : 6,
                    count_selected      : 0
                },
                {
                    serial              : "00008",
                    available_tickets   : 2,
                    count_selected      : 0
                },
                {
                    serial              : "00009",
                    available_tickets   : 2,
                    count_selected      : 0
                },
                {
                    serial              : "00010",
                    available_tickets   : 2,
                    count_selected      : 0
                },
                {
                    serial              : "00011",
                    available_tickets   : 4,
                    count_selected      : 0
                },
                {
                    serial              : "00012",
                    available_tickets   : 7,
                    count_selected      : 0
                },
                {
                    serial              : "00014",
                    available_tickets   : 10,
                    count_selected      : 0
                },
            ],
        };
    }

    calcule(){
        return parseFloat(this.state.total_tickets_selected * this.state.foreach_euro).toFixed(2);
    }

    componentWillMount() {

        /*axios.get('http://35.202.88.103/category',{headers:{
            'Content-Type': 'application/json',
            'Api-Token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImFkbWluQHJlbGVudGxlc3MuY29tIiwic3ViIjo0LCJpc3MiOiJodHRwOi8vMzUuMjAyLjg4LjEwMy91c2Vycy9sb2dpbiIsImlhdCI6MTU0MzU0MTAxNSwiZXhwIjoxNTQzNTQ0NjE1LCJuYmYiOjE1NDM1NDEwMTUsImp0aSI6IkEwZGZDN214Z0RQSjBONjUifQ.dQGKhDrcjDPM1XJ04qdRfSFdKsWX19Fw6TPVoruhe1U'
        },
            responseType: 'json'
        }).then((response) => {
            console.log(response);
        });*/



        /*axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
            console.log(response.data);

            let countries = [];

            response.data.forEach(function(element) {
                countries.push({
                    label:element.name,
                    value:element.numericCode
                });
            });
            this.setState({
                countries,
                country_selected : countries.find(function(element) {
                    return element.label === "Spain";
                }),
            });
        });*/
    }

    sum(){
        const tickets = this.state.tickets;
        let total_tickets_selected = 0;

        tickets.forEach(function(element){
            total_tickets_selected += element.count_selected;
        });

        this.setState({
            total_tickets_selected
        });
    }

    add(element){
        console.log(element);
        let tickets = this.state.tickets;

        let found = tickets.find(function(e) {
            return e.serial === element.serial;
        });

        let key = tickets.find(function(e) {
            return e.serial === element.serial;
        });

        if (found.count_selected < found.available_tickets)
            found.count_selected++;

        tickets[key] = found;

        this.setState({
            tickets
        })

        console.log(tickets);

        this.sum()
    }
    decrease(element){
        console.log(element);
        let tickets = this.state.tickets;

        let found = tickets.find(function(e) {
            return e.serial === element.serial;
        });

        let key = tickets.find(function(e) {
            return e.serial === element.serial;
        });

        if (found.count_selected > 0)
            found.count_selected--;

        tickets[key] = found;

        this.setState({
            tickets
        })

        console.log(tickets);

        this.sum()

    }

    createTable = () => {
        let table = [];

        const tickets = this.state.tickets;
        const forEach = 3;

        const td = (i, element) => {
            //let element = elements;
            return <td className="td-ticket" key={i+"td"}>
                        <div className="td-ticket--inner">
                            <div className="christmasTicketImg">
                                <img src="./img/christmas-lottery/desktop/ChristmasTicket.png" />
                                <span className="christmasTicketTxt">{ element.serial }</span>
                            </div>
                            <div className="td-ticket-buttons--row">
                                <div className="td-ticket-buttons">
                                    <input type="button"  className="removeTicket" value="-" onClick={() => this.decrease(element)}/>
                                    <span id="showNumTickets_1">{ element.count_selected }</span>
                                    {/*<input type="hidden"  value="6" />
                                    <input type="hidden"  name="numTickets_1" value="0"  />*/}
                                    <input type="button"  className="addTicket" value="+" onClick={() => this.add(element)}/>
                                </div>
                                <div className="tickets-available">
                                    {element.available_tickets} Available Tickets
                                </div>
                            </div>
                        </div>
                    </td>

        };

        let con = 0;
        let children = [];
        tickets.forEach(function(element,i){

            children.push(
                td(i,element)
            )

            con++;
            if (con === forEach || tickets.length === i + 1){
                table.push(<tr className="row" key={i}>{children}</tr>)
                children = [];
                con = 0;
            }

        });

        return table
    }

    render() {
        return (
            <div data-role="page" id="main-page" data-url="main-page" className="ui-page-theme-a ui-page-active" >
                <script>var myLogged = ''</script>
                <div className="cookies-block--desktop">
                </div>
                <Header/>

                <div data-role="content" className="ui-content" role="main">

                    <main id="content">
                        <div className="christmas--page">

                            <div className="banner">
                                <div className="top-banner--section">

                                    <div className="top-banner--banner">
                                        <div className="wrapper">







                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wrapper">

                                <div className="title-block"></div>

                                <header>
                                    <div className="left">
                                        <div className="top">
                                            <div className="resizeme" style={{position: "static", "fontSize": "23px", opacity: 1}}>
                                                BUY TICKETS BEFORE                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="resizeme" style={{position: "static", "fontSize": "52px", opacity: 1}}>
                                                22.12.2018                            </div>
                                        </div>
                                    </div>
                                    <div className="right">
                                        <div className="top">
                                            <div className="resizeme" style={{position: "static", "fontSize": "32px", opacity: 1}}>
                                                In prizes                        </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="resizeme" style={{position: "static", "fontSize": "24px", opacity: 1}}>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="jackpot">
                                        <div className="resizeme" style={{"position": "static", "fontSize": "74px", opacity: 1}}>
                                            €2.3 BILLION
                                        </div>
                                    </div>
                                </header>


                                <div className="gameplay">
                                    <form action="/christmas/order" method="post" id="christmasForm">
                                        <table className="tickets--table">
                                            <tbody>
                                            {this.createTable()}
                                            </tbody>
                                        </table>

                                        <div className="box-bottom under-table-row">
                                            <div className="left">
                                                BUY YOUR CHRISTMAS LOTTERY TICKETS                            </div>
                                            <div className="right">
                                <span className="total-price-description">

                                </span>
                                                <span className="description-before-price">
                                    <span id="showTotalTickets">0</span>
                                </span>

                                                <a href="javascript:void(0);" id="nextButton" className="btn add-cart ui-link">
                                <span className="value">
                                    <span className="resizeme" style={{"position": "static", "fontSize": "20px", "opacity": "1"}}>€ <span id="totalPriceValue">{this.calcule()}</span></span>
                                </span>

                                                    <span className="next-btn"><span className="resizeme" style={{"position": "static", "fontSize": "20px", "opacity": "1"}}>Next</span></span>
                                                </a>
                                            </div>

                                            <input type="hidden" id="totalTickets" value="0"/>
                                            <input type="hidden" id="singleBetPrice" value="30.00"/>
                                        </div>


                                        <div className="box-bottom">

                                            <h1 className="christmas--h1">
                                                PLAY THE SPANISH CHRISTMAS LOTTERY                                                            </h1>


                                            <p align="justify">
                                            </p><h2 className="description-lotery">El Gordo Christmas Lottery 2018: the world's biggest lottery</h2>
                                            <br />
                                                El Gordo De Navidad is a Spanish Christmas lottery that is drawn every December 22nd in Madrid and is considered the most generous lottery in the world for the biggest prize amount. The estimated prize pool for this year’s draw is a massive €2.3 BILLION. Now on EuroMillions.com you can easily play and win the El Gordo Christmas lottery for only €25 per ticket.<br />
                                                <br />
                                                    <h3 className="description-lotery2">How to play the Christmas Lottery</h3>
                                                    <br />
                                                        The system under which the tickets of El Gordo Christmas lottery are sold is different from the one you are used to on EuroMillions, but it's really easy:
                                                        <ol className="description-lotery-ol"><li>Choose you favourite 5-digit number from 00000 to 99999, from the tickets available.</li>
                                                            <li>Choose how many tickets you want to play.</li>
                                                            <li>Once you have selected your tickets click on Next to pay them.</li></ol><br />
                                                        <br />
                                                            <h3 className="description-lotery2"> What is the prize structure for the Christmas Lottery</h3>
                                                            <br />
                                                                <ul style={{"marginLeft": "30px"}}>
                                                                    <li> 1st prize - 1 prize of €400,000 for each ticket</li>
                                                                    <li> 2nd prize - 1 prize of €125,000 for each ticket</li>
                                                                    <li> 3rd prize - 1 prize of €50,000 for each ticket</li>
                                                                    <li> 4th prize - 2 prizes of €20,000 for each ticket</li>
                                                                    <li> 5th prize - 8 prizes of €6,000 for each ticket</li>
                                                                    <li> 1.794 series of 5 correct numbers each win €1,000</li>
                                                                    <li> 9.999 matches of the last El Gordo digit each win €200 for the serie                            </li></ul>
                                                                <br />
                                                                    <h3 className="description-lotery2">How many tickets there are on sale</h3>
                                                                    <br />
                                                                        The Christmas Lottery has a particular play mechanic that guarantees much more prizes for everyone. You can buy the same tickets 2 times. See how many numbers are available:<br />
                                                                        - Numbers available go from 00000 to 99999<br />
                                                                        - For each number there are 170 available series (groups)<br />
                                                                        - Each series is composed by 10 tickets (This is what you buy)<br />
                                                                        So, in summary, for each different number there are 1,700 tickets to be sold. That means that up to 1,700 people would win the first prize!<br />Have you bought your tickets? Then check the <a href="/christmas-lottery/results" className="ui-link">Christmas lottery latest edition's results and winning series</a>!                            
                                                                        <p></p>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>

                    </main>

                </div>

                <Footer></Footer>

            </div>
        );
    }
}

export default ChristmasLotery;
