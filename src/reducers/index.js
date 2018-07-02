import { combineReducers } from 'redux';
import { products, filterTracks } from './products';

const reducer = combineReducers({
    products,
    filterTracks
});

export const inputValue = (state) => state.filterTracks;

export const productsCategoty = (state) => state.products.map(el => el.bsr_category);

export const allProducts = (state) => state.products;

export const filterAllProducts = (state, input) => state.products.filter(function(el) {
                  var searchValue = el.name.toLowerCase();
                  return searchValue.indexOf(input) !== -1;
              });

export default reducer;