import express from 'express'
import {deleteFeedback} from '../controllers/delete.controller.js'
import {createStudentFeedback} from '../controllers/studentfeedback.controller.js'
import { showFeedbacks } from '../controllers/showfeedbacks.controller.js'
const router = express.Router()

// Create a new feedback
router.route("/").post(createStudentFeedback)
router.route("/").get(showFeedbacks)
router.delete('/:id', deleteFeedback);

export default router;