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
      // 1 todo dimiliki 1 user
      Todo.belongsTo(models.User, { foreignKey: 'UserId' })

    }
  };
  Todo.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field title can\'t be empty!'
        },
        notNull: {
          msg: 'Required todo title.'
        }
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field description can\'t be empty'
        },
        notNull: {
          msg: 'Required todo description.'
        }
      }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: {
          args: [['none', 'done', 'expire']],
          msg: 'Must be in none, done, & expire'
        },
        notEmpty: {
          args: true,
          msg: 'Field status can\'t be empty'
        },
        notNull: {
          msg: 'Required todo status.'
        }
      }
    },
    due_date: {
      type: DataTypes.DATE,
      allowNull: false,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field due date can\'t be empty'
        },
        notNull: {
          msg: 'Required todo due date.'
        },
        isDate: {
          args: true,
          msg: 'Field due date invalid format'
        }
      }
    },
    UserId: DataTypes.INTEGER
  }, {
    hooks: {
      beforeCreate: (todo) => {
        todo.status = 'none'
      }
    },
    sequelize,
    modelName: 'Todo',
  });
  return Todo;
};