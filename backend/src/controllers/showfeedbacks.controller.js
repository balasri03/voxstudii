import {studentFeedback} from '../models/student_fedebacks.models.js'
import {asyncHandler} from '../utils/asyncHandler.js'

const showFeedbacks = asyncHandler(async (req, res) => {
    try {
        // Try to get belongsto from user or query param
        const belongsto = req.user?.belongsto || req.query.belongsto;
        const filter = belongsto ? { category: belongsto } : {};
        const feedbacks = await studentFeedback.find(filter);
        res.status(200).json(feedbacks);
    } catch (error) {
        console.error('Error fetching feedbacks:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

export { showFeedbacks };