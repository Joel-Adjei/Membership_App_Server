import LocalStrategy from 'passport-local';
import passport from 'passport';
import { adminModel } from '../db/models.js';
import bcrypt from 'bcryptjs';

passport.serializeUser((admin, done) => {
    done(null, admin._id);
});

passport.deserializeUser(async (id, done) => {
    try {
        const admin = await adminModel.findByPk(id);
        console.log("Deserialized admin:", admin);
        done(null, admin);
    } catch (error) {
        done(error, null);
    }
});

export default passport.use(new LocalStrategy({ usernameField : "user_id"},
    async (username, password, done) => {
        try {
            const admin = await adminModel.findOne({ where: { user_id: username } });
            if (!admin) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            const isValidPassword = await bcrypt.compare(password, admin.password);
            if (!isValidPassword) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            console.log("Authentication successful for user:", admin);
            return done(null, admin);
        } catch (error) {
            return done(error, null);
        }
    }
));
