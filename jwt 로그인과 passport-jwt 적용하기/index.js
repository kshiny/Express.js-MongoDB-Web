//index.js

const passport = require('passport');

const local = require('./strategies/local');

const jwt = require('./strategies/jwt');

module.exports = () => {
  passport.use(local);
  // jwt strategy 사용
  passport.use(jwt);


  
  // 세션 비활성화
//   passport.serializeUser((user, callback) => {
//     callback(null, user);
//   });

//   passport.deserializeUser((obj, callback) => {
//     callback(null, obj);
//   });
};