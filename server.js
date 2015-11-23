var express = require('express')
var app = express()
var Peer = require('peer');
// … Configure Express, and register necessary route handlers
app.use(express.static('clients'));
srv = app.listen(process.env.PORT || 8909)
app.use('/peerjs', require('peer').ExpressPeerServer(srv, {
	debug: true
}));