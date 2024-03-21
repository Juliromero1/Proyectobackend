const MovieModel = require('../../models/movie.model');

const updateMovieService = async (req) => {
    try {
        const {id} = req.params;
        const updateMovie = req.body;
        const movieDatabase = await MovieModel.findById(id);
        if(!movieDatabase) {
            return {statusCode: 404, message: "No encontrada"}
        }
        movieDatabase.name = updateMovie.name;
        movieDatabase.genre = updateMovie.genre;
        movieDatabase.year = updateMovie.year;
        movieDatabase.director = updateMovie.director;
        
        await movieDatabase.save();
        return {message: "Pelicula actualizada correctamente", statusCode: 200};

    } catch (error) {
        
    }
}

module.exports = updateMovieService;