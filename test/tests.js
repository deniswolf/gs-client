var search = require('../index').search;
var expect = require('chai').expect;

// fixtures

var user1 = {
  id: '123',
  name: 'First User',
  role: 'admin',
  created_at: '2015/03/24'
};

describe('User Search', function() {

  describe('By ID', function() {
    it('can find a user', function(done) {
      var path = 'search/user.json';
      var params = {
        id: user1.id
      };

      search(path, params)
        .then(function(result) {
          expect(result).to.deepEqual(user1);
          done();
        })
        .reject(done);
    });
  });

});
