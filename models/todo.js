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
      Todo.belongsTo(models.User,{
        foreignKey:'userId',
        targetKey:'id'
      })
    }
  };
  Todo.init({
    title: {type:DataTypes.STRING,
    validate:{
      notEmpty:{
        args:true,
        msg:"Title cannot be empty"
      }
    }
    },
    description: {type:DataTypes.STRING,
    validate:{
      notEmpty:{
        args:true,
        msg:"Description cannot be empty"
      }
    }
    },
    status: {type:DataTypes.BOOLEAN,
    },
    due_date: {type:DataTypes.DATE,
      validate:{
        outDated(value) {
          if (value<Date.now()) {
            throw new Error("Please enter the date after today")
          }
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
    }
  }, {
    sequelize,
    modelName: 'Todo',
  });
  Todo.beforeCreate((instance,option)=>{
    instance.status = false
  })
  return Todo;
};