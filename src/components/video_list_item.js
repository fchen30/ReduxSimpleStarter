import React from 'react';


/* const VideoListItem = ({video, onVideoSelect}) works fine too  */
const VideoListItem = (props) => {
    const video = props.video;
    const onVideoSelect = props.onVideoSelect;
    const imageUrl = video.snippet.thumbnails.default.url;
    return (
        // when clicked, this instance's video become the selected video, onVideoSelect() is defined inside index.js
    <li  onClick={() =>onVideoSelect(video)} className= "list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img className="media-object" src = {imageUrl}/>
            </div>
            <div className="media-body">
                <div className="media-heading">
                    {video.snippet.title}
                </div>
            </div>
        </div>
    </li>
);
};
/* same as const VideoListItem = ({video}) => {
return (<list></list>)
};
 */
export  default  VideoListItem