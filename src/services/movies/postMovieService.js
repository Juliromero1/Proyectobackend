const MovieModel = require('../../models/movie.model');

const postMovieService = async (req, res) => {
    const movie = req.body;

    try {
        const newMovie = new MovieModel(movie);
        await newMovie.save();
        return {message: "Película agregada"}
    } catch (err) {
        return {message: "Error al agregar la película"}
        
    }

}

module.exports = postMovieService;