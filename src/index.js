import express from "express";
import "dotenv/config";
import cookieParser from "cookie-parser";
import router from "./routes/router.js";
import { connectDB } from "./db/db.js";
import session from "express-session";
import passport from "passport";
import "./stratiges/localStrategy.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  }),
);
app.use(passport.initialize());
app.use(passport.session());

connectDB().catch((error) => {
  console.error("Database connection failed:", error);
  process.exit(1);
});

app.use("/api", router);

app.get("/", (req, res) => {
  res.send("Welcome to the Membership Server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
