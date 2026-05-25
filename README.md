# AI Chatbot Practice
 
使用 OpenAI GPT 實作兩個 AI 應用，練習 Tool Call 與對話記憶的核心概念。
 
---
 
## 專案列表
 
### [weather-tool-call](./weather-tool-call)
結合 OpenWeatherMap API，讓 AI 自動判斷是否需要查詢天氣並回覆。
使用者用自然語言提問，AI 透過 Tool Call 機制自動打外部 API 取得即時資料，再組成自然語言回覆。
 
### [cat-chatbot](./cat-chatbot)
具有角色設定與對話記憶的終端機 AI 聊天機器人。
AI 扮演「貓笑話大師」，對話紀錄永久儲存為 JSON，重新啟動後仍記得之前的對話內容。
 
---
 
## 使用技術
 
| 技術 | 說明 |
|------|------|
| [OpenAI API](https://platform.openai.com) | GPT 對話與 Tool Call 功能 |
| [OpenWeatherMap API](https://openweathermap.org/api) | 取得全球即時天氣資料 |
| [openai](https://www.npmjs.com/package/openai) | OpenAI 官方 Node.js SDK |
| [lowdb](https://github.com/typicode/lowdb) | 輕量 JSON 資料庫，儲存對話紀錄 |
| [dotenv](https://www.npmjs.com/package/dotenv) | 管理環境變數，保護 API Key |
| [@inquirer/prompts](https://www.npmjs.com/package/@inquirer/prompts) | 終端機互動式輸入介面 |
 
---
 
## 環境變數
 
在根目錄建立 `.env` 檔案：
 
```
OPENAI_API_KEY=你的 OpenAI API Key
OPENWEATHER_API_KEY=你的 OpenWeatherMap API Key
```
 