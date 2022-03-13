import './styles.css';
import {ReactComponent as Arrow} from 'assets/img/arrow.svg'

function Pagination() {

    return (
        <div className="movieapp-pagination-container">
            <div className="movieapp-pagination-box">
                <button className="movieapp-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="movieapp-pagination-button" disabled={false} >
                    <Arrow className="movieapp-flip-horizontal" />
                </button>
            </div>
        </div>
    )

}
export default Pagination;
