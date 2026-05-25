import "dotenv/config.js"; //把env文件里的内容加載到環境變量裡

const OPENAI_API_KEY = process.env.OPEN_API_KEY; //從環境變量取出OPEN_API_KEY的值

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY; //从環境變量裡取出OPENWEATHER_API_KEY的值

export { OPENAI_API_KEY , OPENWEATHER_API_KEY}
