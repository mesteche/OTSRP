io.socket.get('/signup', { email: 'mail@gmail.com' },
              function(resData){ console.log(resData); });
io.socket.get('/signup',
              { A: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) },
              function(resData){ console.log(resData); });
io.socket.get('/signup',
              { M1: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5) },
              function(resData){ console.log(resData); });
io.socket.get('/signup', { auth: true },
              function(resData){ console.log(resData); });
//io.socket.on('id', function(msg){console.log(msg)});
$('#content').click(function(){
  io.socket.get('/signup', { auth: true },
                function(resData){ console.log(resData); });
});
