import React, { useState, useEffect } from 'react'

import instance from './axios'
import './Row.css'

const baseURL = 'https://image.tmdb.org/t/p/original'

function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([])

    // fetching a list of movies
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchURL)
            setMovies(request.data.results)
        }
        fetchData()
    }, [fetchURL])

    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className='row_posters'>
                {movies.map((movie) => {
                    return (
                        <img
                            className={`row_poster ${
                                isLargeRow && 'row_poster_large'
                            }`}
                            key={movie.id}
                            src={`${baseURL}${
                                isLargeRow
                                    ? movie.poster_path
                                    : movie.backdrop_path
                            }`}
                            alt={movie.name}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Row
