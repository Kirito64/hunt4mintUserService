
const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const talentData = sequelize.define("talentdata", {
	id:{
		type: DataTypes.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	userId:{
		type:DataTypes.INTEGER,
	},
	profileImage: {
		type: DataTypes.STRING,
	},
	coverImage: {
		type: DataTypes.STRING,
	},
	fullName: {
		type: DataTypes.STRING,
	},
	age: {
		type: DataTypes.INTEGER,
	},
	gender: {
		type: DataTypes.STRING,
	},
	lookingFor:{
		type: DataTypes.STRING,
	},
	location: {
		type: DataTypes.STRING,
	},
	summary: {
		type: DataTypes.STRING,
	},
	industry:{
		type: DataTypes.ARRAY(DataTypes.STRING),
	},
	status: {
		type: DataTypes.STRING,
	}
})

module.exports = talentData;