require('dotenv').config();

const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function getOpenAIAnswer(prompt) {
  const gptResponse = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    max_tokens: 1500,
    temperature: 0.85,
    top_p: 0.3,
    presence_penalty: 0,
    frequency_penalty: 0.5,
  });
  return gptResponse.data.choices[0].text.substring(0);
}

module.exports = { getOpenAIAnswer };
