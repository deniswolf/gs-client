var request = require('request-promise');
module.exports.search = function(url, params) {
	return request({
		uri: url,
		method: 'GET',
		json: true,
		qs: params
	});
};
