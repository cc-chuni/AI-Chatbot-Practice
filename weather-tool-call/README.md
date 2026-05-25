# Weather Tool Call
 
結合 OpenAI GPT 與 OpenWeatherMap API，讓 AI 自動判斷是否需要查詢天氣並回覆。
 
---
 
## 功能
 
- 使用者用自然語言提問（如「台北跟高雄今天天氣如何？」）
- AI 自動判斷需要查詢天氣，呼叫 OpenWeatherMap API
- 同時查詢多個城市，組成自然語言一次回覆
---
 
## Tool Call 流程
 
```
使用者提問
    ↓
第一次呼叫 OpenAI → LLM 判斷需要查天氣，回傳 tool_calls
    ↓
程式執行工具 → 打 OpenWeatherMap API 取得即時天氣
    ↓
第二次呼叫 OpenAI → 把天氣資料傳回去，LLM 組成人話回覆
    ↓
印出結果
```
 
---
 
## 執行
 
```bash
node tool_call.js
```
 
---
 
## 檔案說明
 
```
weather-tool-call/
├── tools/
│   └── weather.js   # 工具定義（說明書）+ 實際打 API 的函式
└── tool_call.js     # 主程式，處理 Tool Call 流程
```
 