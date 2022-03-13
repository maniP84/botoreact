import React from 'react';

//style
import styles from "./Post.module.css"

const Post = (props) => {
    // console.log(`../InstagramImages/${props.cover}.jpg`)
    return (
        <div className={styles.container}>
            <a href='https://www.instagram.com/javascript.front/' target="_blank"><img draggable="false" src={`../InstagramImages/${props.cover}.jpg`} alt="post"/></a>
        </div>
    );
};

export default Post;


