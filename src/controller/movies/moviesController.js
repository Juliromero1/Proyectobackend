const getAllMoviesService = require("../../services/movies/getAllMoviesService");
const postMovieService = require("../../services/movies/postMovieService");
const deleteMovieService = require("../../services/movies/deleteMovieService");
const updateMovieService = require("../../services/movies/updateMovieService");
const getMovieDetailsService = require("../../services/movies/getMovieDetailsService");


const getAllMoviesController = async (req, res) =>{
    const movies = await getAllMoviesService();
    res.json(movies);
}

const postMovieController = async (req, res) =>{
    const movie = await postMovieService(req);
    res.status(201).json(movie);
}

const deleteMovieController = async (req, res) => {
    const deletedMovie = await deleteMovieService(req);
    res.json(deletedMovie);
    
}
const updateMovieController = async (req, res) => {
    const updatedMovie = await updateMovieService(req);
    res.json(updatedMovie);
    
}


const getMovieDetailsController = async (req, res) => {
    const movieId = req.params.id;
    try {
        const movieDetails = await getMovieDetailsService(movieId);
        if (!movieDetails) {
            return res.status(404).json({ message: 'Película no encontrada' });
        }
        return res.status(200).json(movieDetails);
    } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
        return res.status(500).json({ message: 'Error al obtener detalles de la película' });
    }
};


module.exports = { getAllMoviesController, postMovieController, deleteMovieController, updateMovieController, getMovieDetailsController};
