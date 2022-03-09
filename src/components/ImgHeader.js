import React from 'react';
// import img from "../Images/Sample-10-3.png"
//styles
import styles from "./ImgHeader.module.css"

const ImgHeader = () => {
    return (
        <div className={styles.imgContainer}>
            <div className={styles.imgDiv}>
                <div>
                <h5>آموزش پروژه محور برنامه نویسی</h5>
                <h4>پشتیبانی قدم به قدم | وبینار های رایگان</h4>
                <button>همین الان شروع کن</button>
                </div>
            </div>
        </div>
    );
};

export default ImgHeader;