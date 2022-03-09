import React from 'react';

//style
import styles from "./AboutUs.module.css"

const AboutUs = () => {
    return (
        <div className={styles.container}>
            <div className={styles.centerDiv}>
                <div className={styles.textContainer}>
                    <h3>پلی میان آموزش و بازار کار</h3>
                    <p>امروزه بسیاری از خدمات به صورت آنلاین ارائه داده میشوند و میبینیم که اینترنت روز به روز در زندگی ما بیشتر جای خود را باز میکند، از تاکسی های آنلاین بگیرید تا سفارش غذا. این نشان دهنده یک صنعت بسیار بزرگ و در حال پیشرفت و توسعه است، صنعتی که بدون شک بازار کار و درآمد بسیار خوبی برای کارمندان خود به همراه خواهد داشت.
                        <br/>
                    به جرات میتوان گفت که برنامه نویسی در تمام صنایع کاربرد دارد، چیزی که به صورت مشهود میتوان دید و غیرقابل انکار است. حوزه ای بسیار گسترده که روز به روز موقعیت های شغلیش بیشتر میشود.
                    ما با هدف تربیت برنامه نویسان حرفه ای سایت بوتواستارت را بنا نهادیم تا بتوانیم نیاز روزافزون بازار برای برنامه نویسان حرفه ای را پاسخ بدهیم. تیم ما متشکل از برنامه نویس هایی با سابقه کار در حوزه های وب و موبایل است و تمام تلاشمان را خواهیم کرد که با آموزش های مناسب و کاردبردی درست ترین مسیر را برای رسیدن به هدف به دانشجوهایمان نشان دهیم و با پشتیبانی کامل تا پایان راه همراه آن ها باشیم.
                    </p>
                </div>
            </div>
            <div className={styles.iconContainer}>
                <a href='https://www.instagram.com/javascript.front/?igshid=h6kp8rww59gl' target="_blank"><i className="fab fa-instagram"></i></a>
                <a href='https://t.me/javascript_front' target="_blank"><i className="fab fa-telegram"></i></a>
            </div>
        </div>
    );
};

export default AboutUs;