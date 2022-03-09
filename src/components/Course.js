import React from 'react';
import { Link, useParams } from 'react-router-dom';
//img
import stars from "../assets/Images/534-5342507_google-5-stars-png-logo-vector-amazon-five.png"
//styles
import styles from "./Course.module.css"
const Course = (props) => {
    const params = useParams()
    const nameCourse = params.name
    return (
        <div className={styles.main}><Link to={`/courses/${props.url}`}><div className={styles.container}>
            <div className={styles.imgContainer}>
                <img className={styles.courseIMG} src={props.image} alt="courseIMG" />
                <div className={styles.addIt}>
                    <i className="fal fa-user-plus"></i>
                </div>
            </div>
            <div className={styles.titleContainer}>
                <div className={styles.courseName}>
                    <h3>{props.name}</h3>
                    <div className={styles.courseTeacher}>
                        <div>
                            <h4>میلاد عظمی</h4> 
                            <i className="fal fa-chalkboard-teacher"></i>
                        </div>
                            <img className={styles.stars} src={stars} alt="stars"/>
                    </div>
                </div>
                <div className={styles.students}>
                    <div>
                        <p>{props.students.toLocaleString()}</p>
                        <i className="fal fa-users"></i>
                    </div>
                        <h3>{props.price}</h3>
                </div>
            </div>
        </div>
            </Link>
        </div>
    );
};

export default Course;