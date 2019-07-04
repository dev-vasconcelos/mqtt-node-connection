var mqtt = require('mqtt')
var client = mqtt.connect('http://192.168.43.10')

client.on('connect', function () {
	client.subscribe('/app', function(err) {
		if(!err) {
			client.publish('/app','Conectado!')
		}
	}
}
