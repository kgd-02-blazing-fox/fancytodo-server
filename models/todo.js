'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      // allowNull: false
      // validate: {allowNull: false}
    },

    description: DataTypes.STRING,

    status: {
      type: DataTypes.STRING,
      // validate: {allowNull: false}
    },

    Due_date: {
      type: DataTypes.DATE,
      validate: {
        // allowNull: false,
        isAfter: "2020-08-03"
      }
    },

    userId:{
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};