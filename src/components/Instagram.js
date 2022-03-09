import React, {useRef} from 'react';

import Post from './Post';
//style
import styles from "./Instagram.module.css"

const Instagram = () => {
    const icon = useRef()
    const background = useRef()

    const mouseOver = () => {
        icon.current.style.opacity = "1"
        background.current.style.opacity = "1"
    }
    const mouseLeave = () => {
        icon.current.style.opacity = "0"
        background.current.style.opacity = "0"
    }
    var postNumber = [];

    for(var i = 1; i <= 20; i++){
        postNumber.push(i);
    }
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>پیج ما در اینستاگرام</h3>
            <div className={styles.myPage}>
                <div className={styles.instagramContainer}>
                    <a href='https://www.instagram.com/javascript.front/'target="_blank"><div onMouseOver={mouseOver} onMouseLeave={mouseLeave} className={styles.page}>
                    <div className={styles.logoContainer}>
                        <i ref={icon} className="fab fa-instagram"></i>
                        <div ref={background} className={styles.backgroundColor}></div>
                    </div>
                    <p>javascript.front</p>
                    </div></a>
                    <div className={styles.postContainer}>
                        {postNumber.map(posts => <Post key={posts} cover={posts}/>)}
                    </div>
                    <div className={styles.followContainer}>
                        <a href='https://www.instagram.com/javascript.front/' target="_blank"><button className={styles.follow}>Follow on Instagram<i className="fab fa-instagram"></i></button></a>
                        <a href='https://www.instagram.com/javascript.front/' target="_blank"><button className={styles.loadMore}>Load More...</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Instagram;