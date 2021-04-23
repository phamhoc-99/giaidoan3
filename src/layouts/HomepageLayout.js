import React from 'react';
import Header from '../components/Header/index'
import Footer from '../components/Footer/index';

const HomepageLayout=props=>{
return(
    <div className="fullHeight">
        <Header {...props} />
        {props.children}   {/*component nho long trong component lon*/}
        <Footer/>
    </div>
);
};

export default HomepageLayout; 