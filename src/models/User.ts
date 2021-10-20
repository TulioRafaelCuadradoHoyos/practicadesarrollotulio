import { Model, DataTypes}  from 'sequelize';

import {database} from "../database/db"


export class User extends Model {

    public nombre!: string;
    // aca se pueden poner mas atributos
}

export interface UserI {
    nombre:string
}

User.init (

    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        tableName: "users",
        sequelize: database,
        timestamps: true
    }
);


