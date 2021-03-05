module.exports = {
    ensureAuth : (req, res, next)=>{
        if (req.isAuthenticated()) {
            return next()
        } else {
            res.redirect('/auth')
        }
    },
    ensureGuest : (req, res, next)=>{
        if (req.isAuthenticated()) {
            res.redirect('/home')
        } else {
            return next()
        }
    }
}