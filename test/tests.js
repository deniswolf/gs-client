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

var user2 = {
	id: '321',
	name: 'Second User',
	role: 'user',
	created_at: '2015/04/01'
};

var user3 = {
	id: '555',
	name: 'Third User',
	role: 'user',
	created_at: '2015/04/01'
};

describe('User Search', function() {

	describe('Error cases', function() {
		it('should get 404 in case of improper resource request', function(done) {
			var wrong_path = 'wrong_path';
			search(wrong_path, {
					id: 0
				})
				.then(function(result) {
					done('had to emit 404');
				})
				.catch(function(err) {
					expect(err.statusCode).to.equal(404);
					done();
				});
		});
		it('should get 400 in case of improper params requested', function(done) {
			search(path, {})
				.then(function(result) {
					done('had to emit 400');
				})
				.catch(function(err) {
					expect(err.statusCode).to.equal(400);
					done();
				});
		});

	});

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

		it('can find multiple users', function(done) {
			var params = {
				role: user2.role
			};
			var users = [user2].concat(user3);

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
		it('can find multiple users', function(done) {
			var params = {
				created_at: user2.created_at
			};
			var users = [user2].concat(user3);

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
