
const express=require('express');
const candidateRoutes=require('./routes/candidate.routes');
const {startWorker}=require('./events/worker');
const cors=require('cors');
const dotenv=require('dotenv');
dotenv.config();

const app=express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ['POST'],
}));
app.use(express.json());
app.use('/api/v1',candidateRoutes);

app.use(express.urlencoded({ extended: true }));


startWorker();
module.exports=app;