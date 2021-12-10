const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require('passport')

const GOOGLE_CLIENT_ID =
  "868288857072-ro2adtjpacvi86jhpn4g5mmd4amni8mk.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

passport.use(new GoogleStrategy({
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
},
function(accessToken, refreshToken, profile, done) {
 done(null,profile)
}
));

passport.serializeUser((user,done)=> {
  done(null,user)
})

passport.deserializeUser((user,done)=> {
  done(null,user)
})

