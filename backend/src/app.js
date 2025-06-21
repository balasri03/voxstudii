import express from 'express'
import cors from 'cors'
import feedbackRoutes from './routes/studentfeedback.router.js'
import adminloginRouter from './routes/admin_login.router.js'


app.use(cors({
  origin: "https://voxstudii-n2tf.vercel.app/feedback", // your Vercel frontend URL
  credentials: true,
}));
const app = express()
app.use(cors())
app.use(express.json())

app.use('/api/feedback', feedbackRoutes)
app.use('/api',adminloginRouter)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

export { app }