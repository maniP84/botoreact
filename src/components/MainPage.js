import React from 'react';

//components
import ImgHeader from './ImgHeader';
import Courses from './Courses';
import Articles from './Articles';
import Instagram from './Instagram';

const MainPge = () => {
    return (
        <>
            <ImgHeader/>
            <Courses/>
            <Articles/>
            <Instagram/>
        </>
    );
};

export default MainPge;