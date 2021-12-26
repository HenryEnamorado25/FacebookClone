import React from 'react'
import "./Feed.css";
import MessageSender from './MessageSender';
import Post from './Post';
import StoryReel from './StoryReel';

function Feed() {
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>
            <Post
            // key={id}
            profilePic="https://avatars.githubusercontent.com/u/73149761?v=4"
            message="WOW this really works"
            timestamp="This is just a timestamp"
            username="Henry Enamorado"
            image="https://cdn.educba.com/academy/wp-content/uploads/2019/12/React-JS-component-1.png"
            />
            <Post
            // key={id}
            profilePic="https://avatars.githubusercontent.com/u/73149761?v=4"
            message="Hello World!! I am coding in React!"
            timestamp="This is just a timestamp"
            username="Henry Enamorado"
            />
            <Post/>
            <Post/>
            <Post/>
        </div>
    )
}

export default Feed
