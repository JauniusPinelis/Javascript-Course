const openAiService = require('../services/openAiService');

async function complete(req,res){
    const response = await openAiService.complete(req.body.input);
    res.json(response).end();
}

module.exports = {
    complete
}