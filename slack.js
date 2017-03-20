// slack webhook

const request = require('request');

function slack(payload) {
	let body = {
		'username': 'gdax_bot',
		'user_id': '',					// fill in
		'icon_emoji': ':robot_face:',
		'response_type': 'in_channel',
		'channel_name': '',			// fill in
		'text': payload
	}

	const options = {
		method: 'POST',
		url: 'https://hooks.slack.com/services/xxxx/xxxx/xxxx',			// fill in
		headers: {
			'content-type': 'application/json'
		},
		body,
		json: true
	}
	request(options, (error, response, body) => {
		if (error) {
			console.log(error);
		} else {
			console.log('Payload delivered');
			console.log(body);
		}
	});
};

module.exports = slack;

