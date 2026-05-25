import { client, DEFAULT_MODEL } from "../lib/openai.js"
import { getWeatherTool, getWeather } from "./tools/weather.js"

const tools = [getWeatherTool]
const AVAILABLE_TOOLS = { getWeather }

const messages = [
  {
    role: "developer",
    content: "你是一位客服人員，回答一律使用繁體中文",
  },
  {
    role: "user",
    content: "高雄與台北的天氣如何？",
  },
]

let response = await client.chat.completions.create({
  model: DEFAULT_MODEL,
  messages: messages,
  tools: tools,
  tool_choice: "auto",
})

const message = response.choices[0].message
messages.push(message)

if (!message.tool_calls || message.tool_calls.length == 0) {
  // 沒有 tool call
  console.log(message.content)
} else {
  for (const tc of message.tool_calls) {
    const fn = tc.function.name
    const args = JSON.parse(tc.function.arguments)
    const result = await AVAILABLE_TOOLS[fn](args)

    messages.push({
      role: "tool",
      tool_call_id: tc.id,
      content: JSON.stringify(result),
    })
  }

  // 第二段：把 tool 結果塞回去，請 LLM 組織人話
  response = await client.chat.completions.create({
    model: DEFAULT_MODEL,
    messages,
  })
  console.log(response.choices[0].message.content)
}



