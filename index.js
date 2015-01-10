var AnsiToHTML = require('ansi-to-html'),
  express = require('express');

var app = express(),
  log = '',
  ansiToHTML = new AnsiToHTML();

app.use(express.static(__dirname + '/public'));

app.get('/log', function(req, res) {
  res.send(log);
});

process.stdin.on('readable', function() {
  var chunk = process.stdin.read();
  if (chunk) {
    log += ansiToHTML.toHtml(chunk.toString());
  }
});

app.listen(8888);
