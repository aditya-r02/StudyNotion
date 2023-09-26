const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config();

const PORT = process.env.PORT || 4000;

const connect = require('./config/database');
connect();
const connectToCloudinary = require('./config/cloudinary');
connectToCloudinary();

app.use(express.json());
const cookieParser = require('cookie-parser');
app.use(cookieParser());
app.use(cors());

const fileupload = require('express-fileupload');
app.use(fileupload({
    useTempFiles : true,
    tempFileDir : '/tmp/'
})); 

//----------------Routes--------------------------------------------

// Authorization paths
const authPath = require('./routes/auth');
app.use("/api/v1", authPath); 

//Profile paths
const profilePath = require('./routes/profile');
app.use("/api/v1", profilePath);

// Course Paths
// const coursePath = require('./routes/course'); 
// app.use("/api/v1", coursePath);



//-----------------------------------------------------------------

app.listen(PORT, ()=>{
    console.log(`Server started at port ${PORT}`);
})
