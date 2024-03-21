const MovieModel = require('../../models/movie.model');

const deleteMovieService = async (req, res) => {

    try {
    const {id} = req.params;
    const deleteMovie = await MovieModel.deleteOne({_id: id})
    if (deleteMovie.deletedCount === 0){
        return {statusCode: 404, message: "Pelicula no encontrada"}
    }
    return deleteMovie;
  }
  catch(error){
    return {message: "Error", statusCode:400}
  }
}

module.exports = deleteMovieService;

