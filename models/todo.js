'use strict';
const {
  Model
} = require('sequelize');

const axios = require('axios');

module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {

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

    userId: {
      type: DataTypes.INTEGER
    },

    advice: DataTypes.STRING,
  }, {
    hooks: {
      beforeCreate(todo) {
        return axios({
          method: 'GET',
          url: 'https://api.adviceslip.com/advice'
        })
          .then(({ data }) => {
            // console.log(data.slip.advice);
            todo.advice = data.slip.advice
          })
          .catch(err => {
            throw err
          })
      }
    },
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};