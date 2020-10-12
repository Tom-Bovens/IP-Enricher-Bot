// To-do
// Replace https with Got

const path = require('path');

const envfile = `${process.cwd()}${path.sep}.env`;
require('dotenv').config({
    path: envfile
});
const ChipChat = require('chipchat');
const log = require('debug')('tourguide');

const got = require('got');

log(process.env.HOST, process.env.TOKEN);

const errorCatch = (error, line) => {
    log("A promise has errored. You can find it's location in the index.js file with the given trace.");
    log(line);
    log(error);
};

// Create a new bot instance
const bot = new ChipChat({
    host: process.env.HOST,
    token: process.env.TOKEN
});

const apiGet = (apiKey, conversation) => {
    (async () => {
        try {
            const response = await got(apiKey);
            log(response);
            bot.send(conversation.id, [
                {
                    text: `https://www.google.com/maps/embed/v1/place?key=AIzaSyDkxVkFHP1AZO7_trIGmUB19pafdI9M5KY&q=${response.data.geo.latitude},${response.data.geo.longitude}`,
                    contentType: 'text/url',
                    role: 'bot',
                    isBackchannel: true
                }
            ]).catch((err) => { errorCatch(err, console.trace()); });
        } catch (err) {
            errorCatch(err, console.trace());
        }
    })();
};

// Crashes the code if no token is found
if (!process.env.TOKEN) {
    throw new Error('No token found, please define a token with export TOKEN=(Webhook token), or use an .env file.');
}

// Logs any error produced to the console
bot.on('error', log);

bot.on('message.create.contact.field', async (message, conversation) => {
    const ipAddress = '77.249.240.233';
    apiGet(`https://tools.keycdn.com/geo.json?host=${ipAddress}`, conversation);
});

// Start Express.js webhook server to start listening
bot.start();
