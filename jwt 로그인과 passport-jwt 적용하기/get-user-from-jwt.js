// get-user-from-jwt.js

const passport = require('passport');

module.exports = (req, res, next) => {
  if (!req.cookies.token) {
    next();
    return;
  }

  return passport.authenticate('jwt', { session: false })(req, res, next);
}