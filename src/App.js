import './App.css'

import requests from './requests'
import Hero from './Hero'
import Row from './Row'

function App() {
    return (
        <div className='app'>
            <Hero />
            <Row
                title='NETFLIX ORIGINALS'
                fetchURL={requests.fetchNetflixOriginals}
                isLargeRow
            ></Row>
            <Row title='Trending Now' fetchURL={requests.fetchTrending}></Row>
            <Row title='Top Rated' fetchURL={requests.fetchTopRated}></Row>
            <Row
                title='Action Movies'
                fetchURL={requests.fetchActionMovies}
            ></Row>
            <Row
                title='Comedy Movies'
                fetchURL={requests.fetchComedyMovies}
            ></Row>
            <Row
                title='Horror Movies'
                fetchURL={requests.fetchNetflixOriginals}
            ></Row>
            <Row
                title='Romance Movies'
                fetchURL={requests.fetchRomanceMovies}
            ></Row>
        </div>
    )
}

export default App
