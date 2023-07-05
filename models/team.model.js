const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}).then(()=>{ 
}).catch((err)=>console.log(err));;;


const TeamSchema = mongoose.Schema({
    team_name : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("Teams",TeamSchema)