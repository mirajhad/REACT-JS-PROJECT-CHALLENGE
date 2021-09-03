const mongoose= require('mongoose');

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
    //useWriteConcern:false
    // connectTimeoutMS: 10000,
    // poolSize: 10,
    // j: true
}).then(()=>{
    console.log(`connection success`);
}).catch((err) => console.log('no connection'));
