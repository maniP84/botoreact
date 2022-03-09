import React, {useRef} from 'react';

//style
import styles from "./Articles.module.css"


const Articles = () => {
    const background = useRef()
    const react = useRef()    
    const background2 = useRef()
    const react2 = useRef()
    const background3 = useRef()
    const react3 = useRef()

    const mouseOver = () => {
        background.current.style.backgroundColor = "#644fef7a"
        react.current.style.transform = "translateY(-0.5rem)"
    }
    const mouseLeave = () => {
        background.current.style.backgroundColor = "rgba(0,0,0,0.4)"
        react.current.style.transform = "translateY(0rem)"
    }
    const mouseOver2 = () => {
        background2.current.style.backgroundColor = "#644fef7a"
        react2.current.style.transform = "translateY(-0.5rem)"
    }
    const mouseLeave2 = () => {
        background2.current.style.backgroundColor = "rgba(0,0,0,0.4)"
        react2.current.style.transform = "translateY(0rem)"
    }
    const mouseOver3 = () => {
        background3.current.style.backgroundColor = "#644fef7a"
        react3.current.style.transform = "translateY(-0.5rem)"
    }
    const mouseLeave3 = () => {
        background3.current.style.backgroundColor = "rgba(0,0,0,0.4)"
        react3.current.style.transform = "translateY(0rem)"
    }


    return (
        <div className={styles.container}>
            {/* <div className={styles.Articles}> */}
                <h4 className={styles.Articles}>مقالات برنامه نویسی</h4>
            {/* </div> */}
            <div className={styles.articlesContainer}>
                <div>
                    <div onMouseOver={mouseOver} onMouseLeave={mouseLeave} className={styles.reactArticles}>
                            <div ref={background} className={styles.background}></div>
                        <div ref={react} className={styles.bestLibraries}>
                                <h3>ریکت</h3>
                            <h5>بهترین libraries برای react در سال 2021</h5>
                        </div>
                    </div>
                    <div onMouseOver={mouseOver2} onMouseLeave={mouseLeave2} className={styles.reactArticles}>
                        <div ref={background2} className={styles.background}></div>
                            <div ref={react2} className={styles.bestLibraries}>
                                <h3>ریکت</h3>
                                <h5>آموزش کامپوننت ها در react و بررسی آن</h5>
                            </div>
                    </div>
                </div>
                <div onMouseOver={mouseOver3} onMouseLeave={mouseLeave3} className={`${styles.reactArticles} ${styles.nodeContainer}`}>
                    <div ref={background3} className={styles.background}></div>
                    <div ref={react3} className={styles.nodeArticle}>
                        <li>مقالات</li>
                        <h5>چند دلیل مهم که باید Node.js رو یاد بگیری</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Articles;