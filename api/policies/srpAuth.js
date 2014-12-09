/**
 * SRP
 *
 * @module      :: Policy
 * @description :: Simple policy implementing the SRP protocol through the jsrp librairy
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function srpAuth(req, res, next) {
    console.log('<Policy>');

  // User is allowed, proceed to the next policy,
  // or if this is the last policy, the controller
/*  if (req.session.authenticated) {
    return next();
  }
*/
  if (req.isSocket) {
    var session = req.socket.socketSession;
    console.log('this is a socket');
    console.log(session);
    if (session.auth == undefined)
      session.auth = {};
    if (req.param('auth')) {
//      sails.socket.emit(sails.socket.id(req.socket), );
//      session.auth = 1;
      return next();
    }
    if (req.param('email'))
      session.auth.email = req.param('email');
    if (req.param('A'))
      session.auth.A = req.param('A');
    if (req.param('M1'))
      session.auth.M1 = req.param('M1');
    console.log(req.socket.socketSession);
  } else {
    console.log('this is not a socket');
  }
  console.log('</Policy>');
  return next();
  // User is not allowed
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  return res.forbidden('You are not permitted to perform this action.');
};
