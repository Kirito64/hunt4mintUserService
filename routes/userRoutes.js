const router = require('express').Router();
const { getUserData, updateUserData, addUserData, addUserSkill, addUserProject } = require('../controllers/userController');
const {isAuthenticated} = require("../middleware/auth")

router.get("/getUserData/:id", isAuthenticated, async (req,res)=>{
	try{
		const userData = await getUserData(req.params.id);
		res.status(200).send(userData);
	}
	catch(err){
		res.status(500).send({message: "Internal Server Error"})
	}
})

router.put("/updateUserData/:id", isAuthenticated, async (req,res)=>{
	try{
		const updateUserData = await updateUserData(req.body);
		res.status(204).send({message: "Updated Sucessfully", data: updateUserData});
	}
	catch(err){
		res.status(500).send({message: "internal Server Error"});
	}
})

router.post("/addUserData/:id", isAuthenticated,async  (req,res)=>{
	let data = req.body;
	data.userId = req.params.id; 
	try{
		const newUserData = await addUserData(data);
		res.status(200).send({message: "user data added successfully", data : newUserData});
	}
	catch(err){
		console.log(err)
		res.status(500).send({message: "internal server error"})
	}
})

router.post("/addUserSkills", isAuthenticated, async(req, res)=>{
	const skills = req.body.skills; 
	const userId = req.user.id; 
	try{
		skills.forEach(async (skill) =>{
			await addUserSkill(userId, skill)
		})

		res.status(200).send({message: "Skills added successfully"})

	}
	catch(err){
		res.status(500).send({message: "internal server error"})
	}

})

router.post("/addUserSkill", isAuthenticated, async(req, res)=>{
	const skill = req.body.skill;
	const userId = req.user.id;
	try{
		const newSkill = await addUserSkill(userId, skill)
		res.status(200).send({message: "Skill added successfully"})
	}
	catch(err){
		res.status(500).status({message: "internal server error"})
	}
}) 

router.post("/addUserProjects", isAuthenticated, async(req, res)=>{
	const userId = req.user.id;
	const projects = req.body.projects; 
	try{
		projects.forEach(async (project)=>{
			await addUserProject(project, userId);
		})
		res.status(200).status({message: "projects added successfully"})
	}
	catch(err){
		res.status(500).status({message: "internal server error"})
	}

})

router.post("/addUserProject", isAuthenticated, async(req, res)=>{
	const userId = req.user.id;
	const project = req.body.project; 

	try{
		const newProject = await addUserProject(project, userId);
		res.status(200).status({message: "project added successfully", data: newProject})
	}
	catch(err){
		res.status(500).status({message: "internal server error"});
	}

})

router.get("/getUser", isAuthenticated, async(req, res)=>{
	if(req.user){
		const userData = await getUserData(req.user.id);
		res.status(200).send(userData)
	}
	else{
		res.status(401).send({message: "user not found"})
	}
});

router.put("/updateUserProject/:id", isAuthenticated, async(req, res)=>{

})

router.delete("/deleteUserProject/:id", isAuthenticated, async(req, res)=>{

})

router.delete("/deleteUserSkill/:id", isAuthenticated, async(req, res)=>{

})



module.exports = router;