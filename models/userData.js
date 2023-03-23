const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const userData = sequelize.define("userdata", {
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
	location: {
		type: DataTypes.STRING,
	},
	summary: {
		type: DataTypes.STRING,
	},
	websiteURL: {
		type: DataTypes.STRING,
	},
	industry:{
		type: DataTypes.STRING,
	}
})

module.exports = userData;