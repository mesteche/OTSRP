/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */
var jsrp = require('jsrp');

module.exports = {
  publicKey: function (req, res) {
    server = jsrp.server();
//    console.log(req.socket);
    /*server.init(req.socket.data, function(){

      return res.view('signup');
    })*/
  },
  signin: function (req, res) {
    console.log('<Controller>');
    if (req.isSocket) {
      console.log('this is a socket');
      console.log(req.session.passe);
    } else {
      console.log('this is not a socket');
    }
    console.log('</Controller>');
    return res.view('signup');
  },
  signup: function (req, res) {
/*    console.log('<Controller>');
    if (req.isSocket) {
      console.log('this is a socket');
      console.log(req.session.passe);
    } else {
      console.log('this is not a socket');
    }
    console.log('</Controller>');*/
    return res.send(req.socket.socketSession);
  }
};

