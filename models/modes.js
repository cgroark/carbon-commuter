'use strict';
module.exports = (sequelize, DataTypes) => {
  var modes = sequelize.define('modes', {
    mode: DataTypes.STRING,
    distance: DataTypes.STRING,
    carbon: DataTypes.STRING,
    userId: DataTypes.INTEGER
  });
  modes.associate = function(models){
        models.modes.belongsTo(models.users);// associations can be defined here
      };
  return modes;
};