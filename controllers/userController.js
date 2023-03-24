const db = require('../config/db')

const addUserData = async (userData)=>{
	try{
		const newData = await db.userData.create(userData);
		return newData;
	}
	catch(err){
		throw(err);
	}
}


const updateUserData = async (userData)=>{
	try{
		const updatedData = await db.userData.update(user, {where: {id: userData.id}});
	}
	catch(err){
		throw err;
	}
}

const addUserSkills = async (userId, skill) => {
	try{
		let data = {};
		data.userId = userId;
		data.skill = skill;
		const newSkill = await db.userSkills.create(data);
		return newSkill;
	}
	catch(err){
		throw err;
	}
}

const deleteUserSkill = async (skillId)=>{
	try{
		const deletedSkill = await db.userSkills.destroy({where: {id: skillId}});
		return deletedSkill;
	}
	catch(err){
		throw err;
	}
}

const updateUserSkill = async (skillId)=>{
	try{
		const updatedSkill = await db.userSkills.update({where: {id : skillId}});
		return updatedSkill;
	}
	catch(err){
		throw err;
	}
}

const addUserProject = async (projectData, userId)=>{
	try{
		let data = {};
		data.userId = userId;
		data.projectName = projectData.projectName;
		data.projectLink = projectData.projectLink;
		const newSkill = await db.userProjects.create(data);
		return newSkill;
	}
	catch(err){
		throw err;
	}
}

const updateUserProject = async(projectId, projectData)=>{
	try {
		const updatedProjectData = await db.userProjects.update(projectData, {where: {id: projectId}})
		return updatedProjectData;
	} catch (error) {
		throw error;
	}
}
const deleteUserProject = async(projectId)=>{
	try{
		const deletedProjectData = await db.userProjects.destroy({where: {id: projectId}})
		return deletedProjectData;
	}
	catch(err){
		throw err;
	}
}

const getUserData = async (userId)=>{
	try{
		const user = await db.users.findOne({where: {id: userId},
			include: [
				{model: db.userData},
				{model: db.listings}
			],
		})
		// console.log(user)
		let userdata = JSON.parse(JSON.stringify(user))
		delete userdata.password
		return userdata;
	}
	catch(err){
		throw err;
	}
}

const getUserDataTalent = async (userId)=>{
	try{
		const user = await db.users.findOne({where: {id: userId,  userType: "talent"},
			include: [
				{model: db.talentData},
				{model: db.talentSchool},
				{model: db.talentAwards}
			],
		})
		// console.log(user)
		let userdata = JSON.parse(JSON.stringify(user))
		delete userdata.password
		return userdata;
	}
	catch(err){
		throw err;
	}
}


const getUserProjects = async (userId)=>{
	try{
		const userProjects = await db.userProjects.findAll({where: {userId: userId}})
		return userProjects

	}
	catch(err){
		throw err;
	}
}

const getUserSkills = async (userId)=>{
	try {
		const userSkills = await db.userSkills.findAll({where: {userId: userId}});
		return userSkills;
	} catch (err) {
		throw err;
	}	
}

const addTalentData = async (data, userId)=>{
	data.userId = userId;
	try{
		const newData = await db.talentData.create(data);
		return newData
	} catch (err) {
		throw err;
	}
}

const addTalentSchool = async (data, userId)=>{
	data.userId = userId;
	try{
		const newSchool = await db.talentSchool.create(data);
		return newSchool
	}
	catch(err){
		throw err;
	}
}

const addTalentAwards = async (data, userId)=>{
	data.userId = userId;
	try{
		const newAwards = await db.talentAwards.create(data)
		return newAwards
	} catch(err){
		throw err;
	}
}

module.exports = {
	addUserData,
	addUserSkills,
	updateUserData,
	deleteUserProject,
	updateUserProject,
	addUserProject,
	deleteUserSkill,
	updateUserSkill,
	getUserData,
	getUserProjects,
	getUserSkills,
	getUserDataTalent,
	addTalentData,
	addTalentSchool,
	addTalentAwards
}