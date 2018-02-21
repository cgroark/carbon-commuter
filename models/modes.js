'use strict';
module.exports = (sequelize, DataTypes) => {
  var modes = sequelize.define('modes', {
    mode: DataTypes.STRING,
    distance: DataTypes.STRING,
    carbon: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    date: DataTypes.STRING
  });
  modes.associate = function(models){
        models.modes.belongsTo(models.users);// associations can be defined here
      };
  return modes;
};