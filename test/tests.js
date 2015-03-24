var search = require('../index').search;
var expect = require('chai').expect;
var path = 'users.json';

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
			var params = {
				id: user1.id
			};
			var users = [user1];

			search(path, params)
				.then(function(result) {
					var json = JSON.parse(result);
					expect(json).to.deep.equal(users);
					done();
				})
				.catch(done);
		});
	});

	describe('By Name', function() {
		it('can find a user', function(done) {
			var params = {
				name: user1.name
			};
			var users = [user1];

			search(path, params)
				.then(function(result) {
					var json = JSON.parse(result);
					expect(json).to.deep.equal(users);
					done();
				})
				.catch(done);
		});
	});

	describe('By Role', function() {
		it('can find a user', function(done) {
			var params = {
				role: user1.role
			};
			var users = [user1];

			search(path, params)
				.then(function(result) {
					var json = JSON.parse(result);
					expect(json).to.deep.equal(users);
					done();
				})
				.catch(done);
		});
	});

	describe('By Creation Date', function() {
		it('can find a user', function(done) {
			var params = {
				created_at: user1.created_at
			};
			var users = [user1];

			search(path, params)
				.then(function(result) {
					var json = JSON.parse(result);
					expect(json).to.deep.equal(users);
					done();
				})
				.catch(done);
		});
	});

});
