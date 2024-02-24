const { Router } = require("express");

const contactRouter = require("./ContactRoutes.js");


const router = Router();


router.use("/submit", contactRouter);


module.exports = router;
