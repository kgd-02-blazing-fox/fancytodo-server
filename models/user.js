'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasMany(models.Todo,{
        sourceKey:"id",
        foreignKey:"userId"
      })
    }
  };
  User.init({
    firstname: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:"First name cannot be empty"
        }
      }
      },
    lastname: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: {
      type:DataTypes.STRING,
      validate:{
        isEmail:{
          args:true,
          msg:"Please enter the right email format"
        },
        notEmpty:{
          args:true,
          msg:"Email cannot be empty"
        }
      }
    },
    password: {
      type:DataTypes.STRING,
      validate:{
        notEmpty:{
          args:true,
          msg:"Password cannot be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((instance,option) => {
    instance.lastname === "" ? instance.fullname = instance.firstname : instance.fullname = `${instance.firstname} ${instance.lastname}` 
  })
  return User;
};