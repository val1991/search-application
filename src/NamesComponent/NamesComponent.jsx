import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from "react-redux";

import ListGroup from 'react-bootstrap/lib/ListGroup';
import ListGroupItem from 'react-bootstrap/lib/ListGroupItem';

import './NamesComponent.css';

import { getProducts } from '../actions/actions';
import { productsCategoty } from '../reducers';



class NamesComponent extends React.Component {

	componentDidMount() {
        this.props.onGetProd();
  	}

	render() {
		let categories = this.props.category;
        let filterCategory = categories.filter(function(item, pos){
            return categories.indexOf(item) === pos;
        });
        return (
         
    <ListGroup className="navList">

	        <ListGroupItem><Link to='/'>All List</Link></ListGroupItem>

	        {filterCategory.map(function(category) {
	        	var c = category.split(" ");
	        	return	<ListGroupItem key={c[0].toLowerCase()}>
							<Link to={"/" + c[0].toLowerCase()}>{category}</Link>
						</ListGroupItem>
			    }
        	)}
			 </ListGroup>
        );
    }
}

export default connect(
    state => ({
        category: productsCategoty(state)
    }),
    dispatch => ({
        onGetProd: () => {
            dispatch(getProducts());
        }
    }))(NamesComponent);


