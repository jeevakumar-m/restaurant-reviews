import app from "./server.js"
import mongodb from "mongodb"
import dotenv from "dotenv"

dotenv.config()

const MongodbClient=mongodb.MongoClient

const port=process.env.PORT||8000

MongodbClient.connect(
        process.env.RESTAURANT_REVIEWS_DB_URI,
        {
            maxPoolSize: 50,
            wtimeoutMS: 2500,
        }
).catch(err=>{
    console.error(err.stack)
    process.exit(1)
})
.then(async client=>{
    app.listen(port,()=>{
        console.log(`server listening on port ${port}`)
    })
})