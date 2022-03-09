import React,{useContext} from 'react';

//styles
import styles from "./Courses.module.css"

import Course from './Course';
// import Course from './Course';
// import sass from "../Images/SASS-500x286.png"
// import react from "../Images/Component-47-3-1-1-1-500x286.png"
// import git from "../Images/Component-49-1-1-1-500x286.png"
// import javaScript from "../Images/javascript-500x286.png"
// import html from "../Images/Html_Css-500x286.png"
// import mobile from "../Images/mobilefirst-500x286.png"
//context
import { ProductsContext } from '../context/ProductContextProvider';

const Courses = () => {
    
    const products = useContext(ProductsContext)

    return (
        <div className={styles.container}>
            <div className={styles.courses}>
                <h3> دوره ها</h3>
            </div>
            <div className={styles.courseContainer}>
                {/* <Course image={sass} name="آموزش SASS" students="3,933" price="149000– رایگان!"/>
                <Course image={react} name="دوره جامع متخصص ریکت و ریداکس" students="831" price="2,289,000"/>
                <Course image={git} name="دوره آموزش گیت، گیت‌هاب و گیت‌لب" students="3,933" price="219,000"/>
                <Course image={javaScript} name="آموزش mobile first design" students="402" price="رایگان!"/>
                <Course image={html} name="دوره جامع html و css" students="1,023" price="349,000 "/>
                <Course image={mobile} name="دوره مقدماتی تا پیشرفته جاوااسکریپت" students="1,111" price="1,329,000"/> */}
                {products.map(product => <Course key={product.name} image={product.image} name={product.name} url={product.url} students={product.students} price={product.price}/>)}
            </div>
        </div>
    );
};

export default Courses;