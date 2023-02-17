const mongoose = require("mongoose");
const DB = "mongodb+srv://irvin:1234@cluster0.47xi8nh.mongodb.net/mernstack?retryWrites=true&w=majority"

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=> console.log("Se ha establecido la conexión con el servidor")).catch((error)=> console.log(error.message));