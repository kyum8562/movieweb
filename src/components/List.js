import React, { useEffect } from 'react';
// import PropTypes from "prop-types";
import styles from './Button.module.css';


function List ({data}){

    return <div>
                <ul className = {styles.btn} 
                >{data}</ul>;
            </div>
    }
    
    // List.propTypes = {
    //     data : PropTypes.string.isRequired,
    // };

export default List;