import {authenticateAdminLogin} from '../controllers/adminLogin.controller.js';
import {createStudentFeedback} from '../controllers/studentfeedback.controller.js';
import express from 'express';
const router=express.Router();

//authenticate admin login

 router.route("/admin").post(
    authenticateAdminLogin
     )

 
export default router