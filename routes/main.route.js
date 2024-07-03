const { addStudents, getList } = require("../controller/main.controller");

let routes = require("express").Router();

routes.post("/add", addStudents);
routes.get("/list", getList);


module.exports = routes;
