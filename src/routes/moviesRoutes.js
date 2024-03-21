const express = require('express');
const {getAllMoviesController, postMovieController, deleteMovieController, updateMovieController, getMovieDetailsController} = require('../controller/movies/moviesController');
const validationMiddleware = require('../utils/validator');
const checkYearIsNumberMiddleware = require('../utils/validator')
const {body }= require('express-validator');
const moviesRouter = express.Router();


moviesRouter.get ('/', getAllMoviesController)

moviesRouter.post  ('/', 
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('genre').notEmpty().withMessage('El género es requerido'),
    body('year').isNumeric().withMessage('El año debe ser un número'),
    body('director').notEmpty().withMessage('El director es requerido').isString().withMessage('El director debe tener nombre y apellido'),
    validationMiddleware, 
    checkYearIsNumberMiddleware 
    ,postMovieController)
    
moviesRouter.delete ('/:id' , deleteMovieController)

moviesRouter.put ('/:id' , 
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('genre').notEmpty().withMessage('El género es requerido'),
    body('year').isNumeric().withMessage('El año debe ser un número'),
    body('director').notEmpty().withMessage('El director es requerido').isString().withMessage('El director debe tener nombre y apellido'),
    validationMiddleware,
    checkYearIsNumberMiddleware
    ,updateMovieController)



moviesRouter.get('/:id', getMovieDetailsController)

    

module.exports = moviesRouter;