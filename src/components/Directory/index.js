import React from 'react';
import shopMen from '../../assets/shopMens.jpg';
import shopWomen from '../../assets/shopWomens.jpg';
import './styles.scss';

const Directory=props=>{
    return(
        <div className="directory">
        <div className="wrap">
<div className="item" style={{backgroundImage:`url(${shopWomen})`}}>
<a>Shop Womens</a>
</div>
<div className="item" style={{backgroundImage:`url(${shopMen})`}}>
<a>Shop Mens</a>
</div>
        </div>
        </div>
    );
};

export default Directory;