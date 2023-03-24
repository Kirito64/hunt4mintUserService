const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");


const talentSchool = sequelize.define("talentschool", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey : true,
		autoIncrement: true,
	},
	userId: {
		type: DataTypes.INTEGER,
	},
	schoolName: {
		type: DataTypes.STRING,
	},
	yearOfPassing: {
		type: DataTypes.INTEGER,
	}
})

module.exports = talentSchool