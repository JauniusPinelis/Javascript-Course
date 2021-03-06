const db = require("../database/database");
const User = db.user;
const Role = db.role;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
    const {username, email, password, roles} = req.body;

    if (!username || !email || !password) {
        return res.status(400).send({
            message: "Username, email and password are required"
        });
    }

    const user = await User.findOne({username});
    if (user) {
        return res.status(409).send("User already exists")
    };

    // We will check the roles before saving the user
    const rolesExist = await Role.find({name: {$in: roles}});

    roleIds = [];

    if (rolesExist.length == 0) {
        var role = await Role.findOne({name: "User"});
        roleIds.push(role._id);
    }
    else {
        roleIds = rolesExist.map(role => role._id);
    }

  

    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        //Find the role of 'user'
        //Get the id of the role
        //create an array of the id and assign it to the user

       
        const user = new User({
            username,
            email,
            password: hashedPassword,
            roles: roleIds
        });

        await User.create(user)

        res.status(201).send({user});
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
   
}

const signin = async (req, res) => {
    const {username, password} = req.body;

    if (!username || !password) {
        return res.status(400).send({
            message: "Username and password are required"
        });
    }

    var user = await User.findOne({username});
    if (!user && await bcrypt.compare(password, user.password)) {
        return res.status(400).send({
            message: "Username or password is incorrect"
        });
    };

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    user.token = token;

    const userDto = {
        username: user.username,
        email: user.email,
        token: user.token,
    }

    return res.send(userDto);
}

exports.signup = signup;
exports.signin = signin;