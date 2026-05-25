import { OPENAI_API_KEY } from "../config.js"
import { input } from "@inquirer/prompts"
import { OpenAI } from "openai"
import { initMessage, addMessage, getMessages } from "./db/messages.js"

const client = new OpenAI({ apiKey: OPENAI_API_KEY })

initMessage("你是一位專門講貓笑話的大師，回應一律使用繁體中文")

try {
  while (true) {
    let userQuestion = await input({ message: "請輸入問題：" })

    if (userQuestion.trim() == "") continue
    if (userQuestion.trim().toLowerCase() == "exit") break

    addMessage(userQuestion)

    const response = await client.chat.completions.create({
      model: "gpt-5-mini",
      messages: getMessages(),
    })

    const aiResponse = response.choices[0].message.content

    addMessage(aiResponse, "assistant")

    console.log(aiResponse)
  }
} catch (err) {
  if (err.name == "ExitPromptError") {
    console.log("Bye!")
  } else {
    console.log(err)
  }
}
