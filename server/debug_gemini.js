const { GoogleGenerativeAI } = require('@google/generative-ai');
require('dotenv').config();

// API anahtarını ortam değişkeninden al
const apiKey = process.env.GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

async function test() {
    console.log("--- TEST BAŞLIYOR ---");
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Merhaba, nasılsın?");
        const response = await result.response;
        console.log("BAŞARILI! Cevap:", response.text());
    } catch (error) {
        console.log("--- HATA OLUŞTU ---");
        // Hatanın tüm detaylarını yazdır
        console.log("Error Name:", error.name);
        console.log("Error Message:", error.message);
        if (error.response) {
            console.log("Error Response:", JSON.stringify(error.response, null, 2));
        }
    }
}

test();
