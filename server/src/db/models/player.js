'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Player.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user_to_player",
        onDelete: "CASCADE",
      });
      Player.belongsTo(models.Post, {
        foreignKey: "post_id",
        as: "post_to_player",
        onDelete: "CASCADE",
      });
    }
  }
  Player.init({
    user_id: DataTypes.INTEGER,
    post_id: DataTypes.INTEGER,
    isPending: DataTypes.BOOLEAN,

  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};
