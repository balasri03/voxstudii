import mongoose,{Schema} from 'mongoose'

const studentFeedbackShema = new mongoose.Schema({
    name:{type : String},
    category: {
        type: String,
        enum: ['Food', 'Academics', 'Hostel', 'Others'],
        default: 'Food'
    },
    message: { type: String, required: true },

},{ collection: 'student_feedback' });



export const studentFeedback = mongoose.model("student_feedback", studentFeedbackShema)