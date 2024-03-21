const {Schema, model} = require('mongoose')


const MovieSchema = Schema({
    name: {
        type: String,
        require: true,
    },

    genre: {
        type: String,
        enum: [
            "Action",
            "Adventure",
            "Comedy",
            "Drama",
            "Fantasy",
            "Horror",
            "Mystery",
            "Romance",
            "Science fiction",
            "Thriller",
        ],
            default: "Other"
    },

    year: {
        type: Number,
        require: true,
    },

    director: {
        type: String,
        require: true,
    }
})


const MovieModel = model('Movie', MovieSchema);

module.exports = MovieModel;