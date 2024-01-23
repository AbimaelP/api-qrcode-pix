import express from "express";
import makeQrCode from "./api/qrcode_gen.js";

const PORT = 3000
const app = express()
app.use(express.json())


app.get('/qrcode-gen', async (req, res)=>{
    const base64 =  await makeQrCode(req.body)

    const matches = base64.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const buffer = Buffer.from(matches[2], 'base64');

    res.writeHead(200, {
        'Content-Type': 'image/png',
        'Content-Length': buffer.length
    });

    res.end(buffer);
})

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})