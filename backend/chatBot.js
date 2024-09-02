const OpenAI = require('openai');
require('dotenv').config({ path: '../.env' });
const openai = new OpenAI({ apiKey: process.env.API_KEY });
const prompt = async () => {
    try{
        const response = await fetch(process.env.API_URL, {
            method:"POST",
            headers : {
                "content-type":"application/json",
                Authorization: `Bearer ${process.env.API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{
                    role: "user",
                    content: "What is the capital of new york"
                }]
            })
        })
        const data = await response.json()
        console.log(data['choices'][0].message.content)
    }
    catch(error){
        console.log(error)
    }
}

prompt()
