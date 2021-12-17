"use strict";
const { TEXT } = require("sequelize");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasOne(models.InfoUser, { foreignKey: "user_id" });
      User.hasMany(models.Post, { foreignKey: "master_id", });
      // User.hasMany(models.Post, { foreignKey: "user_id" });
      User.hasMany(models.Article, { foreignKey: "author_id" });
      User.belongsToMany(models.Post, {
        through: models.Player,
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      email: DataTypes.TEXT,
      password: DataTypes.TEXT,
      googleId: DataTypes.TEXT,
      image: DataTypes.TEXT,
      age: DataTypes.TEXT,
      gender: DataTypes.TEXT,
      experience: DataTypes.TEXT,
      timezone: DataTypes.TEXT,
      prefered_schedule: DataTypes.TEXT,
      textarea: DataTypes.TEXT,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
