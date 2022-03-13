import MovieStars from 'components/MovieStars';
import './styles.css';


function MovieScore() {

    const score = 3.5;
    const count = 2;

    return (
        <div className="movieapp-score-container">
            <p className="movieapp-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <MovieStars />
            <p className="movieapp-score-count">{count} avaliações</p>
        </div>
    )

}
export default MovieScore;
