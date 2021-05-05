import React from "react";
import Moment from "moment";
import "./styles.css";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";
export default class App extends React.Component {
  state = {
    confirmedCases: 0,
    newConfirmedCases: 0,
    activeCases: 0,
    recoveredcase: 0,
    newActiveCases: 0,
    deaths: 0,
    newDeaths: 0,
    lastupdate: ""
  };
  componentDidMount() {
    this.covidapicall();
  }

  covidapicall = () => {
    const COVID_19_API = "https://covid-api.com/api/reports?region_name=India";
    fetch(COVID_19_API)
      .then((response) => response.json())
      .then((data) => {
        const Statedata = data.data[12];
        console.log("Data", data);
        // console.log('Goa',Statedata);
        // const lastUpdated = translateDate(Statedata.date);
        const confirmedCases = Statedata.confirmed;
        const newConfirmedCases = Statedata.confirmed_diff;
        const activeCases = Statedata.active;
        const newActiveCases = Statedata.active_diff;
        const recoveredcase = Statedata.recovered;
        const deaths = Statedata.deaths;
        const newDeaths = Statedata.deaths_diff;
        const lastupdate = Statedata.last_update;
        this.setState({
          confirmedCases,
          newConfirmedCases,
          activeCases,
          recoveredcase,
          newActiveCases,
          deaths,
          newDeaths,
          lastupdate
        });
      });
  };

  render() {
    const {
      confirmedCases,
      newConfirmedCases,
      activeCases,
      recoveredcase,
      newActiveCases,
      deaths,
      newDeaths,
      lastupdate
    } = this.state;
    return (
      <div className="App">
        <Container className="back">
          <Row className="head1">Covid Tracker</Row>
          <Row className="h11">
            <Col className="c11">Jammu and Kashmir Covid Situation</Col>
          </Row>
          <Row className="xs1">
            <Col className="xs">
              LATEST UPDATED : <b>{lastupdate}</b>
            </Col>
          </Row>
          <Row className="y">
            <Col xl={4} lg={4} md={4} xs={12}>
              <Card className="x">
                <CardImg
                  top
                  style={{ height: "150px", width: "150px" }}
                  src="https://www.flaticon.com/premium-icon/icons/svg/3214/3214022.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="title" tag="h5">
                    {confirmedCases}
                  </CardTitle>
                  <CardSubtitle tag="h6">Confirmed Case</CardSubtitle>
                  <hr />
                  <CardText className="num">
                    New Confirmed Cases : <b>{newConfirmedCases}</b>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} lg={4} md={4} xs={12}>
              <Card className="x">
                <CardImg
                  top
                  style={{ height: "150px", width: "150px" }}
                  src="https://www.flaticon.com/premium-icon/icons/svg/3214/3214022.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="title" tag="h5">
                    {deaths}
                  </CardTitle>
                  <CardSubtitle tag="h6">Deaths</CardSubtitle>
                  <hr />
                  <CardText className="num">
                    New Deaths : <b> {newDeaths}</b>{" "}
                  </CardText>
                </CardBody>
              </Card>
            </Col>
            <Col xl={4} lg={4} md={4} xs={12}>
              <Card className="x">
                <CardImg
                  top
                  style={{ height: "150px", width: "150px" }}
                  src="https://www.flaticon.com/premium-icon/icons/svg/3214/3214022.svg"
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle className="title" tag="h5">
                    {activeCases}
                  </CardTitle>
                  <CardSubtitle tag="h6">Active Cases</CardSubtitle>
                  <hr />
                  <CardText className="num">
                    New active cases : <b>{newActiveCases}</b>
                  </CardText>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row className="center1">
            Coronavirus COVID-19 (2019-nCoV) data provided by Johns Hopkins CSSE
          </Row>
          <hr />
          <Row className="center">
            Made by &copy; Copyright &nbsp;<b> Anmol Reshi </b>&nbsp; 2021.
          </Row>
        </Container>
      </div>
    );
  }
}
