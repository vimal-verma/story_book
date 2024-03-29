const GoogelStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const User = require('../model/user')

module.exports = (passport) =>{
    passport.use(
        new GoogelStrategy ({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/auth/google/callback'
        },
        async(accesToken, refreshToken, profile, done) =>{
            const newUser ={
                googleId : profile.id,
                email: profile.emails[0].value,
                displayName: profile.displayName,
                firstname: profile.name.givenName,
                lastname: profile.name.familyName,
                imgurl: profile.photos[0].value
            }
            try {
                let user = await User.findOne({ googleId : profile.id})

                if(user){
                    done(null, user)
                }else{
                    user = await User.create(newUser)
                    done(null, user)
                }
            } catch (err) {
                console.log(err)
            }
        })
    )
    passport.serializeUser((user, done)=> {
        done(null, user.id);
      });
      
      passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(err, user));
      });
      
}