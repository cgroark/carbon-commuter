'use strict';
var bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  var users = sequelize.define('users', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      allowNull: false,       
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: {
          msg: "Invalid email; what are you trying to pull?"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6, 32],
          msg: "Password must be between 6 and 32 characters"
        }
      }
    }
  }, 
  {
   hooks: {
      beforeCreate: function(pendingUser, options){
        if(pendingUser && pendingUser.password){
          var hash = bcrypt.hashSync(pendingUser.password, 10);
          pendingUser.password = hash; 
        }
      }
    }
  });

  users.prototype.isValidPassword = function(passwordTyped){
    return bcrypt.compareSync(passwordTyped, this.password);
  }
  users.prototype.toJSON = function (){
    var user = this.get();
    delete user.password;
      return user;
  }
  users.associate = function(models) {
        models.users.hasMany(models.modes);
        // associations can be defined here
  };

  return users;
};