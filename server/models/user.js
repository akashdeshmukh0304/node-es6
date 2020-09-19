'use strict';
import { Model } from "sequelize";

export default (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      User.hasMany(models.Book, {
        foreignKey: "userId"
      })
    }
  };

  User.init({
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter your name"
      }
    },
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter your username"
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter your email address"
      },
      unique: {
        args: true,
        msg: "Email already exists"
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Please enter a valid email address"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "Please enter a password",
      },
      validate: {
        idNotShort: value => {
          if (value.length < 8) {
            throw new Error("Password should be atleast 8 characters.")
          }
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};