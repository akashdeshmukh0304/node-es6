'use strict';
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {

  class Book extends Model {
    
    static associate(models) {
      Book.belongsTo(models.User, {
        foreignKey: "userId",
        onDelete: "CASCADE"
      })
    }
  };

  Book.init({
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter title of your book"
      }
    },
    author: {
      type: DataTypes.STRING,
      allowNull: {
        args: null,
        msg: "Please enter author"
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: 'Pease input a description'
      }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: null,
        msg: "Please input a quantity."
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
        as: "userId"
      }
    }
  }, {
    sequelize,
    modelName: 'Book',
  });
  
  return Book;
};