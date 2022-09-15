const axios = require('axios').default;
const { MessageMedia } = require('whatsapp-web.js');


globals = module.exports = {
    waifu: async function(){
        return new Promise((resolve, reject) => {
            axios.get('https://api.waifu.im/random/?selected_tags=oppai')
            .then(async function (response) {
                const media = await MessageMedia.fromUrl(response.data.images[0].url);
                resolve(media);
            })
            .catch(function (error) {
                resolve(false);
            })
        });
    },
}