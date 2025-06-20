import {studentFeedback} from '../models/student_fedebacks.models.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const createStudentFeedback = asyncHandler(async (req,res)=>{
    const {name, category, message} = req.body
    try{
        if(!category || !message){
            return res.status(400).json({error: 'Category and message are required'});
        }
        const feedback = await studentFeedback.create({
            name: name || 'Anonymous',
            category,
            message
        });
        return res.status(201).json({message: 'Feedback submitted successfully', feedback});
    }catch(error){
        return res.status(500).json({error:'something is wrong'})
    }
})
export {createStudentFeedback}