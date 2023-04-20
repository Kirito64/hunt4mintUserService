const swaggerAutogen = require("swagger-autogen")()
const outputFile = "./swagger.json"
const endpointsFiles = ["./routes/userRoutes.js"]

swaggerAutogen(outputFile, endpointsFiles)