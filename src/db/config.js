const mongoose = require('mongoose');
require('dotenv').config();

const DATA_BASE = process.env.DATA_BASE || "";

(
    async () => {
        try {
            await mongoose.connect(DATA_BASE);
            console.log('Conexion a la base de datos exitosa');
        } catch (err) {
            console.log(err);
        }   
    }

)();