import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import getDataList from './controller/getDataList'
const port = Number(process.env.PORT || 3000)
const app = express()
dotenv.config
app.use(cors())
export interface CommomResponse {
    data?: any
}
app.get('/api/dataCountries', getDataList)
app.listen(port, () => console.log('App listening on http://localhost:3000/'))



