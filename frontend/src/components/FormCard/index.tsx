import './styles.css';
import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "utils/requrests";
import { Link, useNavigate } from "react-router-dom";
import { Movie } from "types/movie";
import React, { useState } from 'react';
import { useEffect } from "react";
import { validateEmail } from 'types/validate';


type Props = {
    movieId: string;
}

function FormCard({ movieId }: Props) {

    const navigate = useNavigate();
    const [movie, setMovie] = useState<Movie>();

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${movieId}`)
            .then(response => {
                const data = response.data as Movie;
                setMovie(data);
            });
    }, [movieId])


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                movieId: movieId,
                score: score
            }
        }

        axios(config).then(
            response => {
                navigate("/");
            }
        )
    }


    return (
        <div className="movieapp-form-container">
            <img className="movieapp-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="movieapp-card-bottom-container">
                <h3>{movie?.title}</h3>
                <form className="movieapp-form" onSubmit={handleSubmit}>
                    <div className="form-group movieapp-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group movieapp-form-group">
                        <label htmlFor="score">Informe sua avalia????o</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="movieapp-form-btn-container">
                        <button type="submit" className="btn btn-primary movieapp-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary movieapp-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    )
}

export default FormCard;