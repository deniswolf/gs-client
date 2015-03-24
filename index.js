var request = require('request-promise');
var URI = process.env.ENDPOINT;

module.exports.search = function(path, params) {
	return request({
		uri: URI + path,
		method: 'GET',
		json: true,
		qs: params
	});
};
