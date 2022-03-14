import './styles.css';
import MovieScore from 'components/MovieScore';
import { Link } from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
    movie: Movie;
}


function MovieCard( { movie } : Props) {

    return (
        <div>
            <img className="movieapp-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="movieapp-card-bottom-container">
                <h3>{movie.title}</h3>
                <MovieScore score={movie.score} count={movie.count} />
                <Link to={`/form/${movie.id}`}>
                    <div className="btn btn-primary movieapp-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    )

}
export default MovieCard;
