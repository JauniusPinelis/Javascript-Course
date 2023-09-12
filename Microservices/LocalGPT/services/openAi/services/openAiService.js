const OpenAI = require ("openai");

async function complete(input){
    
    const openai = new OpenAI({
        apiKey: process.env.OPENAI_API_KEY,
    });

    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: input }],
        model: "gpt-3.5-turbo",
    });

    return {response: chatCompletion.choices[0].message.content}
}

module.exports = {
    complete
}