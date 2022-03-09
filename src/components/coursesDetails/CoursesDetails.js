import React, {useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from "react-router-dom"

import { ProductsContext } from '../../context/ProductContextProvider';
import stars from "../../assets/Images/534-5342507_google-5-stars-png-logo-vector-amazon-five.png"
//style
import styles from "./CoursesDetails.module.css"
//context
import { CartContext } from "../../context/CartContextProvider"
//helpers
import { isInCart } from '../../helper/functions';

const CoursesDetails = () => {
    window.scroll(0, 0)
    const {state, dispatch} = useContext(CartContext)
    const [success, setSuccess] = useState("n") 
    const params = useParams()
    const data = useContext(ProductsContext)
    const product = data.find(item => item.url === params.name)

    const buy = () => {
        setSuccess("s")
        dispatch({type:"ADD_ITEM", payload: product})
        console.log("fdtger")
    }
    
    return (
        <div className={styles.container}>
            <div className={styles.successfulyContainer}>
                {success === "s" ? 
                          <div className={styles.successfuly}>
                          <Link to="/cart"><h3>مشاهده سبد خرید</h3></Link>
                          <div>
                              <p>به سبد خرید شما افزوده شد."{product.name}"</p>
                              <i className="fa-solid fa-circle-check"></i>
                          </div>
                      </div> : ""}
                  {success === "f" ? <div className={styles.failed}>
                          <Link to="/cart"><button>مشاهده سبد خرید</button></Link>
                              <p>دیگری به سبدخرید خود اضافه نمایید"{product.name}"شما نمی توانید</p>
                      </div> : ""}    
            </div>
            <div className={styles.flexContainer}>
            <div>
            <div className={styles.leftContainer}>
                <div className={styles.priceContainer}>
                    <div className={styles.price}>
                        {product.value > 2 ? <p>تومان</p> : ""}     
                        <p className={styles.value}>{product.price}</p>
                        <div>
                            <p className={styles.priceP}>:قیمت</p>
                        </div>
                    </div>
                    <div className={styles.buy} onClick={isInCart(state, product.url) ? () => setSuccess("f") : buy}>
                        <p>ثبت نام در دوره</p>
                        <i className="fa fa-credit-card"></i>
                    </div>
                    <div className={styles.score}>
                        <div>
                            <img className={styles.stars} src={stars} alt="star"/>
                        </div>
                            <p>امتیاز 0 از 0 رأی</p>
                    </div>
                </div>
                <div className={styles.studentsContainer}>
                    <div className={styles.students}>
                        <p>تعداد دانشجو :<span>{product.students}</span></p>
                        <i className="fal fa-user-graduate"></i>
                    </div>
                    {product.details.map(item => <div key={item.details} className={styles.details}><p>{item.title}</p> <i key={item.icon} className={`${item.icon}`}></i></div>)}
                </div>
                <div className={styles.teacher}>
                    <h2>میلاد عظمی</h2>
                    <p>Senior Front-end Developer</p>
                </div>
            </div>
            </div>
                    <button className={styles.buyFix} onClick={isInCart(state, product.url) ? () => setSuccess("f") : buy}>ثبت نام در دوره</button>
            <div className={styles.rightContainer}>
                {product.about.video ? <video className={styles.video} controls><source src={product.about.video}/></video> : <img className={styles.img} src={product.about.img} alt="product img"/>}
                <div className={styles.priceContainer}>
                    <div className={styles.price}>
                        {product.value > 2 ? <p>تومان</p> : ""}     
                        <p className={styles.value}>{product.price}</p>
                        <div>
                            <p className={styles.priceP}>:قیمت</p>
                        </div>
                    </div>
                    <div className={styles.buy} onClick={isInCart(state, product.url) ? () => setSuccess("f") : buy}>
                        <p>ثبت نام در دوره</p>
                        <i className="fa fa-credit-card"></i>
                    </div>
                    <div className={styles.score}>
                        <div>
                            <img className={styles.stars} src={stars} alt="star"/>
                        </div>
                            <p>امتیاز 0 از 0 رأی</p>
                    </div>
                </div>
                <div className={styles.aboutEpisodes}>
                    {product.about.details.map(item => <div key={item.title} className={styles.detailsContainer}>
                        <h2>{item.title}</h2>
                        <p>{item.text}</p>
                    </div>)}
                    {product.chapters.map(items => <div key={items.title} className={styles.chaptersContainer}>
                        <div className={styles.title}>
                            <h4>{items[0].title}</h4>
                            <h5>{items[0].subtitle}</h5>
                        </div>
                            {items.map(item => !item.title ? <div key={item.name} className={styles.episode}>
                        <div>
                        <div className={styles.episodeContainer}>
                            {item.free ? <p>رایگان</p> : ""}
                            <h3>{item.episode}</h3>
                        </div>
                            <p className={styles.name}>{item.name}</p>
                            </div>
                            {item.free  ? "" : <div className={styles.lock}><p>خصوصی</p><i className="fa fa-lock"></i></div>}
                        </div> : "")}
                    </div>)}
                </div>
            </div>
            </div>
        </div>
    );
};

export default CoursesDetails;