const MovieModel = require('../../models/movie.model');

const getAllMoviesService = async (req, res) => {
    return await MovieModel.find();
}

module.exports = getAllMoviesService;