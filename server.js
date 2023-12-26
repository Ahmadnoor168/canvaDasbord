const express = require('express')
const app = express()
const dotenv = require('dotenv')
const cors = require('cors')
const { mongoose } = require('mongoose')
const path = require("path")



dotenv.config()

if (process.env.NODE_ENV === 'local') {
    app.use(cors({
        origen: "http://localhost:300",
        credentials: true
    }))
} else {
    app.use(cors({
        credentials: true
    }))
}

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "./canva/dist")))

}




const dbConnect = async() => {
    try {
        if (process.env.NODE_ENV === 'local') {
            await mongoose.connect(process.env.LOCAL_DB_URI)
            console.log("Local Data is connected")
        } else {
            await mongoose.connect(process.env.LOCAL_DB_URI)
            console.log("Production Data is connected")
        }
    } catch (e) {
        console.log("database isnot connected")
    }

}

dbConnect()

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})