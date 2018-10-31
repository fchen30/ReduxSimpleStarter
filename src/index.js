import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
// Create a new component. This component should produce some HTML
const youtubeAPI = 'AIzaSyCUCMPVYpQgj9rvHxQdU_iErQWmom1Hh3g';

const  App = () => {
    return (
        <div>
            <SearchBar/>
        </div>);

    };

// Take this component's generated HTML and put it on the Page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));