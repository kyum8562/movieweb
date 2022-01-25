import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import styles from './Button.module.css';


function Button ({text}){
    useEffect(() => {
        console.log('컴포넌트:Button의 useEffect 불러오기 성공! (한 번만 호출)');
    }, []);
    return <button className = {styles.btn} 
            >{text}</button>;
}

// Button.propTypes = {
//     text : PropTypes.string.isRequired,
// };

export default Button;