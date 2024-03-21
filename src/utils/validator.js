const { validationResult } = require('express-validator')

const validationMiddleware = async (req, res, next) => {
    const errors = await validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
}

const checkYearIsNumberMiddleware = (req, res, next) => {
    const year = req.params.id;
  
    if (isNaN(year)) {
      return res.status(400).json({ error: 'El año debe ser un número' });
    }
  
    next();

}

module.exports = validationMiddleware, checkYearIsNumberMiddleware