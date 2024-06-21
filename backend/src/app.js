
const express=require('express');
const candidateRoutes=require('./routes/candidate.routes');
const {startWorker}=require('./events/worker');

const app=express();

app.use(express.json());
app.use('/api/v1',candidateRoutes);

app.use(express.urlencoded({ extended: true }));


startWorker();
module.exports=app;