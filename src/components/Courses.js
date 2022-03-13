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
                {products.map(product => <Course key={product.name} image={product.image} name={product.name} url={product.url} students={product.students} price={product.price}/>)}
            </div>
        </div>
    );
};

export default Courses;