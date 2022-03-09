import React from 'react';

//style
import styles from "./Footer.module.css"
//img 
import zarin from "../assets/Images/نماد-اطمینان-1.png"
const Footer = () => {
    return (
        <div className={styles.container}>
            <div className={styles.mainContainer}>
                <div className={styles.footer}>
                    <div className={styles.about}>
                        <h3>درباره بوتواستارت</h3>
                        <p>ما در بوتواستارت در تلاشیم بستری فراهم کنیم که علاقه مندان به برنامه نویسی بتوانند مطالب به روز حوزه برنامه نویسی را یاد بگیرند.</p>
                    </div>
                    <div className={styles.pages}>
                            <h3>فهرست سفارشی</h3>
                        <div>
                            <p>صفحه نخست</p>
                            <p>تماس با ما</p>
                            <p>سبد خرید</p>
                            <p>دوره ها</p>
                            <p>درباره ما</p>
                        </div>
                    </div>
                    <div className={styles.pay}>
                        <h3>پرداخت آسان</h3>
                        <img src={zarin}  alt="دروازه پرداخت معتبر"/>
                    </div>
                </div>
                <div className={styles.copyrightContainer}>
                    <div className={styles.copyright}>
                        <div className={styles.socialMedia}>
                            <a href='https://t.me/javascript_front' target="_blank"><i className="fab fa-telegram"></i></a>
                            <a href='https://www.instagram.com/javascript.front/?igshid=h6kp8rww59gl' target="_blank"><i className="fab fa-instagram"></i></a>
                        </div>
                        <p>تمامی حقوق برای سایت بوتواستارت محفوظ می باشد.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;