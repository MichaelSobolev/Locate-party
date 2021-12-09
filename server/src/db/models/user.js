"use strict";
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
      User.belongsToMany(models.Post, {
        through: models.Player,
        foreignKey: "user_id",
      });
      User.belongsToMany(models.Post, {
        through: models.PendingPlayer,
        foreignKey: "user_id",
      });
    }
  }
  User.init(
    {
      name: DataTypes.TEXT,
      password: DataTypes.TEXT,
      email: DataTypes.TEXT,
      image: DataTypes.TEXT,
      isAdmin: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
