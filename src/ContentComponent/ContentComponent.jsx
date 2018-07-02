import React from 'react';
import {connect} from "react-redux";

import Col from 'react-bootstrap/lib/Col';
import Image from 'react-bootstrap/lib/Image';
import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import { getProducts } from '../actions/actions';
import { allProducts } from '../reducers';


class ContentHome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        }
    }

        componentDidMount() {
            this.props.onGetProd();
        }

	  componentWillReceiveProps(nextProps) {
          const { products } = this.props;
          let qwerty = products.filter(function(el) {
              const searchQuery = nextProps.match.params.id;

              const searchValue = el.bsr_category.toLowerCase();

              return searchValue.indexOf(searchQuery) !== -1;
          });
          this.setState({ products: qwerty })
          }




	render() {
		const { products } = this.state;
        return (
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
        		);
    		}
}

export default connect(
    state => ({
        products: allProducts(state)
    }),
    dispatch => ({
        onGetProd: () => {
            dispatch(getProducts());
        }
    }))(ContentHome);



