const User = (mongoose) => {
    const userSchema = mongoose.Schema({
        userName: String,
        fullName: String,
        active: Boolean,
    });

    userSchema.method("toJSON", function(){
        const {__v, _id, ...object} = this.toObject();
        
        object.id = _id;

        return object;
    })

    return mongoose.model("user", userSchema);
}

module.exports = User;