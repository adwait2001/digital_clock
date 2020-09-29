const express=require('express')
const dotenv=require('dotenv')
const mongoose=require('mongoose')
const app=express();
const bodyParser=require('body-parser') //used to handle POST REQUESTS
const timeRoutes=require('./routers/timeRoutes')


dotenv.config();

mongodbURL="mongodb://localhost:27017/clock"

//setting our database using mongoose
mongoose.connect(mongodbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('database server is running')).catch(error=>console.log(error.reason))

const port=process.env.PORT || 5000

app.use(bodyParser.json())
app.use('/api/time',timeRoutes)//api route to handle time toutes

app.listen(port, () => {
    console.log('server at port')
})