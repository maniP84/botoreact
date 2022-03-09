import React from 'react';

//style
import styles from "./Post.module.css"

const Post = (props) => {
    // console.log(`../InstagramImages/${props.cover}.jpg`)
    return (
        <div className={styles.container}>
            <a href='https://www.instagram.com/javascript.front/' target="_blank"><img draggable="false" src={`../InstagramImages/${props.cover}.jpg`} alt="post"/></a>
            {/* <svg aria-label="Carousel" class="_8-yf5 " color="#ffffff" fill="red" height="22" role="img" viewBox="0 0 48 48" width="22"><path d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path></svg> */}
            {/* <div className={styles.myDiv} ></div> */}
        </div>
    );
};

export default Post;


