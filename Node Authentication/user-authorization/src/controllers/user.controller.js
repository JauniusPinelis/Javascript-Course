
const allAccess = (req,res) => {
    res.status(200).send('Public Content.');
}

const userAccess = (req,res) => {
    // This content will only be accessible with role User
    res.status(200).send('User Content.');
}

const adminAccess = (req,res) => {
    // This content will only be accessible with role Admin
    res.status(200).send('Admin Content.');
}

const moderatorAccess = (req,res) => {
    // This content will only be accessible with role Moderator
    res.status(200).send('Moderator Content.');
}

module.exports = {
    allAccess,
    adminAccess,
    moderatorAccess,
    userAccess
}