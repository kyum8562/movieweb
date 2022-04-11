import React from 'react'; 
import { useParams } from 'react-router-dom';

const Product = (props) => { 
    const {productId} = useParams(); // const 변수명 = useParams().파라미터명;
    return (
         <> 
            <h3>{productId}번 상품 페이지입니다.</h3> 
         </> 
         
    ); 
} 
export default Product;
