import mongoose from 'mongoose';

const Connection = async (username, password)=>{
    const URL=`mongodb+srv://${username}:${password}@cluster0.qmcyhqw.mongodb.net/?retryWrites=true&w=majority`;
    try{
      await mongoose.connect(URL,{useNewUrlParser:true});
      console.log("database Connected");
    }catch(error){

    }
}

export default Connection;