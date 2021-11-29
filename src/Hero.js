import { useState, useEffect } from 'react'

import instance from './axios'
import requests from './requests'
import './Hero.css'

function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + '...' : str
}

function Hero() {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length - 1)
                ]
            )
        }
        fetchData()
    }, [])

    // https://image.tmdb.org/t/p/original
    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition: 'center center',
            }}
        >
            <div className='hero_contents'>
                <h1 className='banner_title'>
                    {movie?.title || movie?.name || movie?.original_name}
                </h1>
                <div>
                    <button className='banner_button'>Play</button>
                    <button className='banner_button'>My List </button>
                </div>
                <h1 className='hero_description'>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
            <div className='banner-fadeBottom'></div>
        </header>
    )
}

export default Hero
