
const axios = require('axios');

async function getMovieDetailsService(movieId) {
    const apiKey = '441f0cb21879ca8c8ced1c6172b7d3f4';
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NDFmMGNiMjE4NzljYThjOGNlZDFjNjE3MmI3ZDNmNCIsInN1YiI6IjY1ZmM2MTBlMzUyMGU4MDE2NWQ0YWJjZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U7RPcUr1nzUr4sdWEs47OXOyGq1bnMiZUQn8iAeSDX4';
    const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
        return null;
    }
}

module.exports = getMovieDetailsService;

/*
Se chequea la solicitud de detalles en Postman con 
GET https://api.themoviedb.org/3/movie/597?api_key=441f0cb21879ca8c8ced1c6172b7d3f4
*/