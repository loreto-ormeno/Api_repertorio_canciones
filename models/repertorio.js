'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class repertorio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  repertorio.init({
    cancion: DataTypes.STRING,
    artista: DataTypes.STRING,
    tono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'repertorio',
    timestamps: false
  });
  return repertorio
};
