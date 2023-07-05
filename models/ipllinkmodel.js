var mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true}).then(()=>{ 
}).catch((err)=>console.log(err));;;

 
// create an schema
var IPLLinkSchema = new mongoose.Schema({            
            Team1:{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Teams'
            },
            Team2:{
                type : mongoose.Schema.Types.ObjectId,
                ref : 'Teams'
            },
            Year:Number,
            Link:String,
            Extra:String,
            Venue:String
        });
 
 
module.exports = mongoose.model("IPLLinks", IPLLinkSchema);