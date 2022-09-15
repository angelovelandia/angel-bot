const db = require('./msg');
const globals = require('./puglins/globals');

fns = module.exports = {
	modeInit: async function(data){

        log.ok("Enter modeInit")

        /* Creando data */
        var msg = data.body;

        if(msg.indexOf("/") === -1){
            log.ok("No command msgInit")
            data.reply(db.msgIni);
        }

        if(msg.indexOf("/") !== -1){
            log.ok("Enter command")
            var command = msg.split("/")[1];
            if(command == 'menu'){
                data.reply(db.msgMenu);
            } else if(command == 'waifu'){
                let resp = await globals.waifu();
                data.reply(resp);
            }
        }

    },
}