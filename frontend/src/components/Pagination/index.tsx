import './styles.css';
import {ReactComponent as Arrow} from 'assets/img/arrow.svg'
import { MoviePage } from 'types/movie';

type Props = {
    page: MoviePage;
    onChange: Function;
}

function Pagination( { page, onChange } : Props) {

    return (
        <div className="movieapp-pagination-container">
            <div className="movieapp-pagination-box">
                <button className="movieapp-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)} >
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="movieapp-pagination-button" disabled={page.last}  onClick={() => onChange(page.number + 1)} >
                    <Arrow className="movieapp-flip-horizontal" />
                </button>
            </div>
        </div>
    )

}
export default Pagination;
