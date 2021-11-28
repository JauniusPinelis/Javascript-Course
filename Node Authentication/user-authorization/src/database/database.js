const mongoose = require('mongoose');
const Role = require('../models/role.model');

async function seedData() {
    var roles = await Role.find();
    if (roles.length === 0) {
        await Role.create({ name: 'Admin' });
        await Role.create({ name: 'Moderator'});
        await Role.create({ name: 'User' });
    }
}

mongoose.connect(process.env.MONGODB_URI, async () => {
    console.log('Connected to MongoDB');
    await seedData();
});

const db = {};
db.mongoose = mongoose;
db.user = require('../models/user.model');
db.role = require('../models/role.model');

db.roles = ["User", "Admin", "Moderator"];

module.exports = db;