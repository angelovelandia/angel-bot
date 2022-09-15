const cfonts = require('cfonts');

module.exports = {
	startedConsole: async function(){
        cfonts.say('ANGEL|BOT!', {
                font: 'block',
                align: 'center',
                letterSpacing: 1,
                lineHeight: 1,
                space: true,
                env: 'node'
        });
        cfonts.say('By @angelovelandia!', {
            font: 'tiny',
            align: 'center',
            size: 'medium',
            letterSpacing: 1,
            lineHeight: 1,
            space: true,
            env: 'node'
        });
    },
}