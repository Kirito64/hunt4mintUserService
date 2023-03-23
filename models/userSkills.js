const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const userSkills = sequelize.define("userskill", {
	id:{
		type: DataTypes.INTEGER,
		primaryKey : true,
		autoIncrement : true,
	},
	userId: {
		type: DataTypes.INTEGER,
		required: true,
	},

	skill : {
		type: DataTypes.STRING,
		required: true,
	}
})

module.exports = userSkills