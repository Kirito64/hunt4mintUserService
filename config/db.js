const sequelize = require('sequelize');
const Sequelize = require('./sequelize')


const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//models

db.users = require("../models/user")
db.userData = require("../models/userData")
db.userProjects = require("../models/userProjects")
db.userSkills = require("../models/userSkills")
db.listings = require("../models/listing")

//relations
db.users.hasMany(db.userProjects, {
	foreignKey: 'userId',
	// targetKey: "id"
})
db.users.hasMany(db.userSkills,{
	foreignKey: 'userId',
	// targetKey: "id"
})
db.users.hasOne(db.userData,{
	foreignKey: 'userId',
	// targetKey: "id"
})
db.userProjects.belongsTo(db.users, {
	foreignKey: 'userId',
	// sourceKey: "id"
})
db.userSkills.belongsTo(db.users, {
	foreignKey: 'userId',
	// sourceKey: "id"
})
db.userData.belongsTo(db.users, {
	foreignKey: 'userId',
	// sourceKey: "id"
})
db.users.hasMany(db.listings, {
	foreignKey: 'createdBy',
	// targetKey: "id"
})
db.listings.belongsTo(db.users, {
	foreignKey: 'createdBy',
	// sourceKey: "id"
})

module.exports = db;