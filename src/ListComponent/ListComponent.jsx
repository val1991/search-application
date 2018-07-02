import React from 'react';
import { connect } from 'react-redux';

import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';
import Image from 'react-bootstrap/lib/Image';
import Col from 'react-bootstrap/lib/Col';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import { getProducts } from '../actions/actions';
import { filterAllProducts, inputValue } from '../reducers';

import './ListComponent.css';

class ListComponent extends React.Component {
	 constructor(props) {
        super(props);
         this.state = {
            input: ""
         }

        this.handleSearch = this.handleSearch.bind(this);
    }

    componentDidMount() {
        this.props.onGetProd();
    }

     handleSearch(event) {
        var searchQuery = event.target.value.toLowerCase();
        this.props.onFindTrack(searchQuery);
         this.props.history.push({
             search: searchQuery
         })
         this.setState({ input: searchQuery })
    }

	render() {
    const { products } = this.props;
        return (
           <Col className="contentContainer">
              <ControlLabel>Search by name</ControlLabel>
                <FormControl
                  type="text"
                  value={this.props.location.search.slice(1)}
                  placeholder="Enter name"
                  onChange={this.handleSearch}
                />
              <Col className="listContainer">
                    {products.map(products =>
                          <ListGroup key={products.asin} className="listItems">
                            <Image src={products.img} rounded />
                            <ListGroupItem header="Product name">
                              {products.name}
                            </ListGroupItem>
                            <ListGroupItem header="Price">
                              {products.price}
                            </ListGroupItem>
                            <ListGroupItem header="Category" >
                              {products.bsr_category}
                            </ListGroupItem>
                            <ListGroupItem href={products.link}>Link to</ListGroupItem>
                            <ListGroupItem header="Article" >
                              {products.asin}
                            </ListGroupItem>
                          </ListGroup>
                    )}
               </Col>
          </Col>
        );
    }
}



export default connect(
    state => ({
        inputValue: inputValue(state),
        products: filterAllProducts(state, inputValue(state))
    }),
    dispatch => ({
        onFindTrack: (value) => {
            dispatch({ type: 'INPUT_VALUE', inputValue: value});
        },
        onGetProd: () => {
            dispatch(getProducts());
        }
    }))(ListComponent);



