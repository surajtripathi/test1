var peer = new Peer("helloworld",{
	host: location.hostname,
	port: location.port || (location.protocol === 'https:' ? 443 : 80),
	path: '/peerjs'
});
var conn = peer.connect("helloworld");
conn.send("hello");
