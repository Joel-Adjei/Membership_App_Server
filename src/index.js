import express from 'express';
import "dotenv/config";
import cookieParser from 'cookie-parser';
import router from './routes/router.js';
import { connectDB } from './db/db.js';
// import { createAdminModel } from './db/models.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

connectDB().catch((error) => {
    console.error("Database connection failed:", error);
    process.exit(1);
});

// createAdminModel();

app.use("/api", router);

app.get('/', (req, res) => {
    res.send('Welcome to the Membership Server!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});