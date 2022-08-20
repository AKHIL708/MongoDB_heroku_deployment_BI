const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/BIHerokuDeployment",({useNewUrlParser : true , useUnifiedTopology : true}))
.then(()=> console.log("db connection in successfull"))
.catch((err)=> console.log(err))