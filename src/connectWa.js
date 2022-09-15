const qrcode = require('qrcode-terminal');
const { Client } = require('whatsapp-web.js');
const client = new Client();
const fns = require('./fns');
const globals = require('./puglins/globals');

module.exports = {
	startedConnect: async function(){

        client.on('qr', (qr) => {
            qrcode.generate(qr, {small: true}, function (qrcode) {
                console.log(qrcode)
            });
        });

        client.on('message', msg => {
            log.info("Message From: " + msg.id.remote)
            log.info("Message received: " + msg.body)
            log.info("Device Type: " + msg.deviceType)
            fns.modeInit(msg);
        });

        client.on('ready', () => {
            log.success('Successful connection with Whatsapp');
        });

        client.initialize();
    },
}