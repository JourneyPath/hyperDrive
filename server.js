import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const API_Key = process.env.VITE_API_KEY


const PORT = 5000;
const app = express();

app.use(express.json());
app.use(cors());


app.post('/completions', async (req, res) => {

    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${API_Key}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{ role:"user", content: req.body.message}],
            temperature: 0.2,
            // max_tokens: 00,
        })
    }
    
    try {
        const response = await fetch ("https://api.openai.com/v1/chat/completions", options)
        const data = await response.json()
        console.log("this is the response back", data)
        res.send(data)
    } catch (error) {
        console.error(error);
    }
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});



