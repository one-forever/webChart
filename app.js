/**
 * Created by zxy on 2017/8/10.
 */
let app = require('http').createServer(hander).listen(3001);
let io = require('socket.io').listen(app);
let fs = require('fs');
let path = require('path');

function hander (req, res) {
    fs.readFile(path.join(__dirname, '/views', '/index.html'));
}