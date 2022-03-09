import React, { useContext } from 'react';
//context
import { CartContext } from "../../context/CartContextProvider"
// import ReactDOM from 'react-dom'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used
// // import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'
//svg
import svg from "../../assets/Images/1024px-Red_X.svg.svg"


//styles
import styles from "./CoursesInCart.module.css"

const CoursesInCart = (props) => {    
    const {state, dispatch} = useContext(CartContext)
    return (
        <>
            <div className={styles.contianer}>
                <svg onClick={() => dispatch({type:"REMOVE_ITEM", payload:props.course})} xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid et"><g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="red" stroke="none"> <path d="M655 9580 l-650 -650 1908 -1908 c1049 -1049 1907 -1911 1907 -1916 0 -5 -856 -863 -1902 -1906 l-1903 -1897 639 -646 639 -646 1056 1049 c581 577 1438 1432 1906 1899 467 468 854 851 860 851 5 0 866 -856 1912 -1902 l1903 -1903 652 653 653 652 -1905 1906 -1905 1906 1908 1902 c1049 1047 1907 1906 1907 1910 0 12 -1261 1286 -1272 1286 -5 0 -870 -857 -1921 -1905 l-1912 -1905 -1910 1910 c-1051 1050 -1912 1910 -1915 1910 -3 0 -298 -293 -655 -650z"/> </g>
                </svg>
                <img src={props.img} alt="inCartImatge"/>
                <p>{props.title}</p>
                <p className={styles.price}>{props.price.toLocaleString()} تومان</p>
            </div>
            <div className={styles.Mcontainer}>
                <div className={styles.svg}>
                    <svg onClick={() => dispatch({type:"REMOVE_ITEM", payload:props.course})} xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 1024.000000 1024.000000" preserveAspectRatio="xMidYMid et"><g transform="translate(0.000000,1024.000000) scale(0.100000,-0.100000)" fill="red" stroke="none"> <path d="M655 9580 l-650 -650 1908 -1908 c1049 -1049 1907 -1911 1907 -1916 0 -5 -856 -863 -1902 -1906 l-1903 -1897 639 -646 639 -646 1056 1049 c581 577 1438 1432 1906 1899 467 468 854 851 860 851 5 0 866 -856 1912 -1902 l1903 -1903 652 653 653 652 -1905 1906 -1905 1906 1908 1902 c1049 1047 1907 1906 1907 1910 0 12 -1261 1286 -1272 1286 -5 0 -870 -857 -1921 -1905 l-1912 -1905 -1910 1910 c-1051 1050 -1912 1910 -1915 1910 -3 0 -298 -293 -655 -650z"/> </g>
                    </svg>
                </div>
                <div>
                    <p className={styles.title}>محصول:</p>
                    <p>{props.title}</p>
                </div>
                <div>
                    <p className={styles.title}>قیمت:</p>
                    <p className={styles.price}>{props.price.toLocaleString()} تومان</p>
                </div>
            </div>
        </>
    );
};

export default CoursesInCart;