import React, {Component} from 'react';

class SearchBar extends Component  {
    constructor(props) {
        super(props);
        this.state = {term: ''};
    }


    // whenever the input changes, it calls onInputChange() and pass the value
    render() {
      return(
          <div className = "search-bar">
          <input
              value = {this.state.term}
              onChange = {(event) =>this.onInputChange(event.target.value)} />
          </div>
      );
    }

    /* onChange = {(event) =>this.setState({term: event.target.value})}

    same as
    onInputChange(event) {
        console.log(event.target.value);

    }*/

// passing search term to callback function and set props.onSearchTermChange property and it calls the videoSearch function in index.js and pass the term to the function
    onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
    }
}

export default SearchBar;