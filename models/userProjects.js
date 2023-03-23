const {DataTypes} = require("sequelize");
const sequelize = require("../config/sequelize");

const userProjects = sequelize.define("userproject", {
	id:{
		type: DataTypes.INTEGER,
		primaryKey : true,
		autoIncrement : true,
	},
	userId: {
		type: DataTypes.INTEGER,
		required: true,
	},

	projectName : {
		type: DataTypes.STRING,
		required: true,
	},
	projectLink :{
		type: DataTypes.STRING,	
	}
})

module.exports = userProjects;