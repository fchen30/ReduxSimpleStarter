import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from "./components/video_detail";
// Create a new component. This component should produce some HTML


//const youtubeAPI = fetch("file:///Users/chenfa/ReduxSimpleStarter/src/key.txt").then(response => response.text()).then(text => console.log(text));

const youtubeAPI = '';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('surfboards');
    }

 /* a method take a single search term and assign it to YTSearch method. Store an array of result using
    setState to videos array. selected Video is the first elements of the array*/
    videoSearch(term){
        YTSearch({key: youtubeAPI, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo : videos[0]
            }); // in the case of only videos: videos, this.setState({videos}); works too

        });
    }


// The SearchBar has a property  which calls function that takes a search term  that is passed from search-bar.js and and pass it to the videoSearch()
    render() {
        return (
            <div>

                <SearchBar onSearchTermChange = {term => this.videoSearch(term)}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    // you can also do { selectedVideo => this.setState()
                    onVideoSelect = {(selectedVideo) => this.setState({selectedVideo})}
                    videos = {this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the Page (in the DOM)

ReactDOM.render(<App/>, document.querySelector('.container'));
