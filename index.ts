import 'dotenv/config'
import express from 'express'
import { router } from './router/router'
import cors from 'cors'
const PORT = process.env.PORT || 5000
const start = () => {
    try {
        const app = express()
        app.use(express.json())
        app.use(cors())
        app.use('/', router)
        app.listen(PORT, () => console.log('run with: ', PORT))
    } catch (e) {
        console.log(e.message)
    }
}

start()