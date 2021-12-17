"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsToMany(models.User, {
        through: models.Player,
        foreignKey: "post_id",
      });
      Post.belongsTo(models.User, {
        foreignKey: "master_id",
        as: "author",
        onDelete: "CASCADE",
      });
      Post.belongsTo(models.System, {
        foreignKey: "system_id",
        onDelete: "CASCADE",
      });
    }
  }
  Post.init(
    {
      master_id: DataTypes.INTEGER,
      system_id: DataTypes.INTEGER,
      title: DataTypes.TEXT,
      platform: DataTypes.TEXT,
      //
      schedule: DataTypes.TEXT,
      requirements: DataTypes.TEXT,
      max_players: DataTypes.INTEGER,
      isPaid: DataTypes.BOOLEAN,
      pricing: DataTypes.INTEGER,
      adress: DataTypes.TEXT,
      gameDates: DataTypes.DATE,
      image: DataTypes.TEXT,
      // 
      description: DataTypes.TEXT,
      isActive: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: "Post",
    }
  );
  return Post;
};
