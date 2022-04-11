import { getMouseEventOptions } from "@testing-library/user-event/dist/utils";
import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import {Link} from 'react-router-dom';


function Detail(){
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const {id} = useParams()
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
            )
        ).json();
        console.log(json);
        setMovies(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie();
    }, []);

    // console.log(movies);

    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <div className="searching">
                        <Link to = "/search/">검색하기</Link>
                    </div>
                    <img src={movies.medium_cover_image} />
                    <h2>
                        {movies.title}
                    </h2>
                    <p>{movies.description_full}</p>
                    <ul>
                        {movies.genres.map((g) => (
                        <li key = {g}>{g}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>     
    );
}
export default Detail; 