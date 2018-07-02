import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';



import NamesComponent from './NamesComponent/NamesComponent.jsx';
import ContentComponent from './ContentComponent/ContentComponent.jsx';
import ListComponent from './ListComponent/ListComponent.jsx';



import './App.css';


class App extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            products : []
        }

    }

    render() {
        return (
            <Router>
                <Grid>
                    <Row className="show-grid">
                        <Col xs={3} md={3}>
                            <NamesComponent />
                        </Col>
                        <Col xs={9} md={9}>
                            <Switch>
                                <Route path="/:id" component={ContentComponent} />
                                <Route path="/" component={ListComponent} />
                            </Switch>
                        </Col>
                    </Row>
                </Grid>
            </Router>
        );
    }
}



export default App;


