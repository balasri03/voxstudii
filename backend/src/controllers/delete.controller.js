import {studentFeedback} from '../models/student_fedebacks.models.js'
 import {asyncHandler} from '../utils/asyncHandler.js'
 import mongoose from 'mongoose'
const deleteFeedback=asyncHandler(async (req,res)=>{
    const {id} = req.params
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(400).json({error:'invalid id'})
    }
    const result= await studentFeedback.deleteOne({_id:id})
    if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Feedback not found' });
        }
        res.status(200).json({ message: 'Feedback deleted successfully' });

})

export {deleteFeedback}