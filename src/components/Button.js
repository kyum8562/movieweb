import React, { useEffect } from 'react';
import PropTypes from "prop-types";
import styles from './Button.module.css';


function Button ({text}){
    const destroyFn = () => console.log("삭제 했습니다 :(");
    // const createFn = () => console.log("생성 했습니다 :)") return destroyFn;
    function createFn(){
        if(text === "Create Button"){
        console.log("생성 했습니다 :)")

        //clean up
        return destroyFn;
        }
    }
    // useEffect는 dependency가 변화할 때 호출
    useEffect(createFn, [text]);

    return <button className = {styles.btn} 
            >{text}</button>;
}

// Button.propTypes = {
//     text : PropTypes.string.isRequired,
// };

export default Button;