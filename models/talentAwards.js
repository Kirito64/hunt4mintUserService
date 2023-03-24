const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");


const talentaward = sequelize.define("talentaward", {
	id: {
		type: DataTypes.INTEGER,
		primaryKey : true,
		autoIncrement: true,
	},
	userId: {
		type: DataTypes.INTEGER,
	},
	awardName: {
		type: DataTypes.STRING,
	},
	yearOfRecieving: {
		type: DataTypes.INTEGER,
	}
})

module.exports = talentaward