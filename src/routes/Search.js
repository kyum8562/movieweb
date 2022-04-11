import React, {useState} from "react";
import axios from 'axios';
import SearchMovie from './SearchMovie';
const Search = () => {
    const [movies, setMovies] = useState([]);
    const [value, setValue] = useState("");

    const getSearchMovie = async () => {
        const ID_KEY = 'Jo0aQ7QEwDEtrBWQJyBm';
        const SECRET_KEY = 'ja0UyjnITc';
        const search = value;
        try{
            if(search ===''){
                setMovies([]);
            }
            else{
                const {data: {items}}
                 = await axios.get('/v1/search/movie.json',{
                    params:{
                        query : search,
                        display : 20
                    },
                    headers: {
                        'X-Naver-Client-Id': ID_KEY, 
                        'X-Naver-Client-Secret': SECRET_KEY
                    },
                });

                setMovies(items);
                console.log(`items : ${items}`);
            }
        }
        catch(err){
            console.log(err);
        }
    };


    // const componentDidMount = () => {
    //     getSearchMovie();
    // };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        getSearchMovie();
    };

    return (
    <section className = "container">
        <form onSubmit={handleSubmit}>
            <div>
                <div className="input_div">
                    <h3>영화 검색 : </h3>
                    <input className="input_search" type="text" value={value} 
                    onChange={handleChange} placeholder="영화제목을 검색해주세요"/>
                </div>
                <div className="moives">
                    {movies.map(movie => (
                        <SearchMovie 
                            key={movie.link} 
                            id={movie.link}
                            year={movie.pubDate} 
                            title={movie.title}
                            poster={movie.image} 
                            rating={movie.userRating} 
                            director={movie.director} 
                            actor={movie.actor}
                        />))
                    }
                </div>
            </div>
        </form>
    </section>
    );
}



export default Search;