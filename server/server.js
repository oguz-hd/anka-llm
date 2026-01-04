const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = 8020;

app.use(cors());
app.use(bodyParser.json());

// Google Gemini API Anahtarı
const apiKey = process.env.GEMINI_API_KEY;

app.post('/chat', async (req, res) => {
    if (!req.body.prompt) return res.status(400).json({ error: 'Prompt eksik.' });

    try {
        // Doğrudan HTTP isteği ile Gemini API çağrısı
        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ contents: [{ parts: [{ text: req.body.prompt }] }] })
            }
        );

        const data = await response.json();
        if (!response.ok) throw new Error(data.error?.message || 'API Hatası');

        res.json({ reply: data.candidates[0].content.parts[0].text });
    } catch (error) {
        console.error("Hata:", error.message);
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => console.log(`Sunucu ${port} portunda aktif.`));
