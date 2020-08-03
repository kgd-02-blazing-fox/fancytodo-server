'use strict';
const {
  Model
} = require('sequelize');

const { hashPassword } = require('../helper/hashPasword.js')

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    name: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
      validate:{
        // notNull: true,
        isEmail: {
          args: true,
          msg: 'Email format only'
        },
        // unique: true
      }
    },
    password: DataTypes.STRING
  },
    {
      hooks: {
        beforeCreate(user) {
          user.password = hashPassword(user.password)
        }
      },
      sequelize,
      modelName: 'User',
    });
  return User;
};