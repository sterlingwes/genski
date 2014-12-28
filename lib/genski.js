var events = require('events')
  , connect = require('connect')
  , http = require('http')
;

function Genski() {
  events.EventEmitter.call(this);
  this.app = connect();
  
  this.listen = function(port) {
    http.createServer(this.app).listen(port);
  }.bind(this);
}

Genski.prototype = Object.create(events.EventEmitter.prototype);

module.exports = Genski;