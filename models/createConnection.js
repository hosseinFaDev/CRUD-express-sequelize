const { Sequelize ,DataTypes } = require('sequelize');
const configs = require('../config/config.json');

const sequelize = new Sequelize(configs.development.database
    , configs.development.username
    , configs.development.password,
    {host: "localhost",
    dialect: "mysql"
    })

    module.exports= sequelize;