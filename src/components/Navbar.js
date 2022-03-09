import React, {useContext, useRef, useEffect} from 'react';
import { Link } from 'react-router-dom';
//Styles
import styles from "./Navbar.module.css"
import { CartContext } from '../context/CartContextProvider';
const Navbar = () => {
    const cart = useContext(CartContext)
    const blur = useRef()
    const ul = useRef()
    const Mnavbar = useRef()
    const liClickHandler = (event) => {
        const li =  [...ul.current.children]
        blur.current.style.transform="translateX(-100%)"
        blur.current.style.pointerEvents= "none"
        Mnavbar.current.style.transform="translateX(23.5rem)"
        Mnavbar.current.style.pointerEvents= "none"

        console.log(event)
        if(event.target.parentElement.getAttribute("href") ) {
            li.forEach((item) => {
                item.style.borderBottom = "0px solid #654fef"
            })
            event.target.parentElement.style.borderBottom= "4px solid #654fef"
        }
        
    }
    
    useEffect(() => {
        const href =  [...ul.current.children]
        href.forEach((item) => {
            if (item.getAttribute("href") === window.location.pathname) {
                item.style.borderBottom= "4px solid #655fef"
            }
        })

    })
    const navbarHandler = () => {
        blur.current.style.transform="translateX(0)"
        blur.current.style.pointerEvents= "all"
        Mnavbar.current.style.transform="translateX(0rem)"
        Mnavbar.current.style.pointerEvents= "all"
    }
    const disappear = () => {
        blur.current.style.transform="translateX(-100%)"
        blur.current.style.pointerEvents= "none"
        Mnavbar.current.style.transform="translateX(24.5rem)"
        Mnavbar.current.style.pointerEvents= "none"
        
    }
    

    return (
        <div className={styles.header}>
            <div className={styles.login}>
                <div className={styles.desktop}>
                    <ul className={styles.loginUl}>
                        <li><button className={styles.button}>ورود و ثبت نام    <i className={`${styles.userLock} fal fa-user-lock`}></i></button></li>
                        <Link to="/cart"><li className={styles.counterContainer}><i className={`${styles.shopIcon} fal fa-shopping-bag`}></i><div className={styles.counter}><span>{cart.state.selectedItem.length}</span></div></li></Link>
                    </ul>
                    <div className={styles.rightSide}>
                        <ul className={styles.products} ref={ul}>
                            <Link onClick={liClickHandler} to="/cart"><li className={styles.productsLi}>سبد خرید</li></Link>
                            <Link onClick={liClickHandler} to="/aboutus"><li className={styles.productsLi}>درباره ما</li></Link>
                            <Link onClick={liClickHandler} to="/contact"><li className={styles.productsLi}>تماس با ما</li></Link>
                            <Link onClick={liClickHandler} to="/courses"><li className={styles.productsLi}>دوره ها</li></Link>
                            <Link onClick={liClickHandler} to="/"><li className={styles.productsLi}>صفحه نخست</li></Link>
                        </ul> 
                        <div className={styles.imgContainer}>
                            <img src='https://www.botostart.ir/wp-content/uploads/2021/03/Component-93.svg' alt='botostartLogo'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.mobile}>
                <div className={styles.login}>
                    <div className={styles.imgContainer}>
                        <img src='https://www.botostart.ir/wp-content/uploads/2021/03/Component-93.svg' alt='botostartLogo'/>
                    </div>
                    <div className={styles.icons}>
                        <Link to="/cart"><div className={styles.counterContainer}><i className={`${styles.shopIcon} fal fa-shopping-bag`}></i><div className={styles.counter}><span>{cart.state.selectedItem.length}</span></div></div></Link>
                        <i className={`fal fa-user-lock ${styles.shopIcon}`}></i>
                        <i onClick={navbarHandler} className={`fal fa-bars ${styles.bars}`}></i>
                    </div>
                </div>
                <div className={styles.navbarContainer}  >
                    <div className={styles.navbar} ref={Mnavbar}>
                            <ul>
                                <Link to="/"><li onClick={liClickHandler} className={styles.productsLi}>صفحه نخست</li></Link>
                                <Link to="/courses"><li onClick={liClickHandler} className={styles.productsLi}>دوره ها</li></Link>
                                <Link to="/contact"><li onClick={liClickHandler} className={styles.productsLi}>تماس با ما</li></Link>
                                <Link to="/aboutus"><li onClick={liClickHandler} className={styles.productsLi}>درباره ما</li></Link>
                                <Link to="/cart"><li onClick={liClickHandler} className={styles.productsLi}>سبد خرید</li></Link>
                            </ul>
                            <div className={styles.iconContainer}>
                                <a href='https://www.instagram.com/javascript.front/?igshid=h6kp8rww59gl' target="_blank"><i className="fab fa-instagram"></i></a>
                                <a href='https://t.me/javascript_front' target="_blank"><i className="fab fa-telegram"></i></a>
                            </div>
                    </div>
                    <div className={styles.dark} onClick={disappear} ref={blur}></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;