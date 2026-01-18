import express from 'express';
import "dotenv/config";
import cookieParser from 'cookie-parser';
import router from './routes/router.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

app.use("/api", router);

app.get('/', (req, res) => {
    res.send('Welcome to the Membership Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});