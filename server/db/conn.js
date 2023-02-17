const mongoose = require("mongoose");
const DB = "mongodb+srv://irvin:1234@cluster0.47xi8nh.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("La conexciado el servidor")).catch((error)=> console.log(error.message));