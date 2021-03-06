'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Article.belongsTo(models.User, {
        foreignKey: "author_id",
        as: "creator",
        onDelete: "CASCADE",
      });
    }
  }
  Article.init({
    author_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    body: DataTypes.STRING,
    article_image: DataTypes.TEXT,
    data_store: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};
