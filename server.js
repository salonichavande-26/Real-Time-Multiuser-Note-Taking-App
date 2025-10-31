const mangoose = require("mangoose");
const bcrypt = require("bcryptjs");

const userSchema = new mangoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},

});

userSchema.pre("save",async function(next){
 if(!this.isModified("password")) return next();
 const salt = await
})