import React,{useState} from 'react';

//style
import styles from "./ContactUs.module.css"

const ContactUs = () => {

    const [nameInput, setNameIput] = useState("")
    const [emailInput, setEmailInput] = useState("")
    const [textInput, setTextInput] = useState("")

    const nameHandler = (event) => {
        setNameIput(event.target.value)
    }

    const emailHandler = (event) => {
        setEmailInput(event.target.value)
    }

    const textHandler = (event) => {
        setTextInput(event.target.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.centerDiv}>
                <div className={styles.sendEmail}>
                    <h3>تماس با ما</h3>
                    <p>فیلد ستاره دار را پر کنید</p>
                    <div>
                        <label>نام<span>*</span></label>
                        <input type="text" value={nameInput} onChange={nameHandler}/>
                        <label>ایمیل<span>*</span></label>
                        <input type="email" value={emailInput} onChange={emailHandler}/>
                        <label>متن خود را بنویسید <span>*</span></label>
                        <textarea type="time" value={textInput} onChange={textHandler}/> 
                    </div>
                    <button>فرستادن</button>
                </div>
                <div className={styles.addressContainer}>
                    <div className={styles.addressIconContainer}>
                        <h4>راه های ارتباطی</h4>
                        <p><i className="fas fa-map-marker-alt"></i>آدرس: سنندج، شهرک سعدی، جنب دانشگاه آزاد</p>
                        <p><i className="fal fa-envelope"></i>آدرس ایمیل : info@botostart.ir</p>
                    </div>
                    <div className={styles.iconContainer}>
                        <a href='https://www.instagram.com/javascript.front/?igshid=h6kp8rww59gl' target="_blank"><i class="fab fa-instagram"></i></a>
                        <a href='https://t.me/javascript_front' target="_blank"><i class="fab fa-telegram"></i></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;