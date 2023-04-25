const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
    },
    name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    vida:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    ataque:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    defensa:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    velocidad:{
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    altura:{
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
    peso:{
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
    },
  },
  { timestamps:false }
  );
};