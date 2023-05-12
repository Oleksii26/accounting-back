import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { getAll } from './controllers/getAll.js'
import { create } from './controllers/create.js'
import { remove } from './controllers/remove.js'
import { v2 as cloudinary } from 'cloudinary'
import fileUpload from 'express-fileupload'
import { v4 as uuidv4 } from 'uuid'

const PORT = 3002

mongoose.connect(`mongodb+srv://Oleksii:VO4IvtGDpYVpBd6C@cluster0.fa8qg7i.mongodb.net/docs`).
    then(() => console.log('Connection to DB')).catch(e => console.log('DB error', e))

const app = express()
app.use(express.json())
app.use(cors())
app.use(fileUpload({
    useTempFiles: true,
    limits: { fileSize: 50 * 150 * 120 }
}))

cloudinary.config({
    cloud_name: "dtcpohmvh",
    api_key: "416256211882687",
    api_secret: "FMJlCXclATSnH1Anzi82ByFIRSg"
});

app.get('/docs', getAll)
app.post('/create', create)
app.delete('/doc/:id', remove)
app.post('/upload', async (req, res) => {
    try {
        const file = req.files.undefined
        const result = await cloudinary.uploader.upload(file.tempFilePath, {
            public_id: `${new Date()}`,
            resource_type: 'auto',
            folder: 'documents'
        })
        res.json({ result })
    } catch (e) {
        console.log(e, 'suka');
    }
})

app.listen(PORT, () => {
    console.log('Server is running');
})