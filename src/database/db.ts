const Sequelize = require ('sequelize');

const DB_NAME = 'db_tulio';

const DB_USER = 'tcuadrado';

const DB_PASS = 'Marisela12345.';

export const database = new Sequelize (
    DB_NAME,
    DB_USER,
    DB_PASS,


    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);


database.sync ({ force: true})
.then(function (){
    console.log('Base De Datos Creada ok ;)')
    
})