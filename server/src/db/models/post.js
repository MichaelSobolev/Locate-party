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
      Post.hasMany(models.Player, { foreignKey: "post_id" });

    }
  }
  Post.init(
    {
      master_id: DataTypes.INTEGER,
      system_id: DataTypes.TEXT,
      title: DataTypes.TEXT,
      platform: DataTypes.TEXT,
      schedule: DataTypes.TEXT,
      requirements: DataTypes.TEXT,
      max_players: DataTypes.INTEGER,
      location: DataTypes.TEXT,
      image: DataTypes.TEXT,
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
