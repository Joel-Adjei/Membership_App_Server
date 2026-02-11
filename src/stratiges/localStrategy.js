import LocalStrategy from "passport-local";
import passport from "passport";
import { adminModel } from "../db/models.js";
import bcrypt from "bcryptjs";

passport.serializeUser((admin, done) => {
  done(null, admin._id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const admin = await adminModel.findById(id);
    console.log("Deserialized admin:", admin);
    done(null, admin);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new LocalStrategy(
    { usernameField: "user_id" },
    async (username, password, done) => {
      try {
        const admin = await adminModel.findOne({ user_id: username });
        console.log("Found admin:", admin);
        if (!admin) {
          throw new Error("Admin not found");
        }
        const isValidPassword = await bcrypt.compare(password, admin.password);
        if (!isValidPassword) {
          throw new Error("Invalid credentials");
        }
        console.log("Authentication successful for user:", admin);
        return done(null, admin);
      } catch (error) {
        return done(error, null);
      }
    },
  ),
);
