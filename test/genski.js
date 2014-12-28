var Genski = require('../lib/genski')
  , assert = require('assert')

describe('Genski', function() {
  
  var gk
  
  beforeEach(function() {
    gk = new Genski()
  });
  
  it('should instantiate with a connect app instance var', function() {
    assert.equal(typeof gk.app.use, 'function')
  })
  
  it('should provide an interface to have the server listen()', function() {
    assert.equal(typeof gk.listen, 'function')
  })
  
  it('should be an EventEmitter', function(done) {
    gk.on('test_event', function(arg) {
      assert.equal(arg, 'hello')
      done()
    })
    gk.emit('test_event', 'hello');
  })
  
})