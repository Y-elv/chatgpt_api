import { config } from "dotenv";
config()
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-tPcxy1DQsUfrSdkcq8H9CIo8",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
console.log(process.env.OPENAI_API_KEY)
const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: "write an email for eddy which ask permission to skip class today "}],
  });
  console.log(completion.data.choices[0].message);