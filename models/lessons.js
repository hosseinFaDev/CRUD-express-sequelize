const { Sequelize ,DataTypes } = require('sequelize');
const sequelize = require('./createConnection');

//Initate Model
const lesson = sequelize.define('lesson', {
    // attributes
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    lessonName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  module.exports = lesson;