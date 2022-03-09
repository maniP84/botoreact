import React from 'react';
import { Link } from "react-router-dom"
//styles
import styles from "./ImgHeader.module.css"

const ImgHeader = () => {
    return (
        <div className={styles.imgContainer}>
            <div className={styles.imgDiv}>
                <div>
                <h5>آموزش پروژه محور برنامه نویسی</h5>
                <h4>پشتیبانی قدم به قدم | وبینار های رایگان</h4>
                <Link to="/courses"><button>همین الان شروع کن</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ImgHeader;