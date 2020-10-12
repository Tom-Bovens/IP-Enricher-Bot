# Chipchat IP Enricher / Location Visualizer (W.I.P)

This bot will help agents by putting an embedded map of the contact location in the back channel.

## Development

To run this bot as a Chatshipper developer, follow this guide.

1. Log in on development.chatshipper.com

2. Make a bot and write down / copy the bot token for later.

3. Go to the project folder and export your bot token with export TOKEN=[Your bot token here]. Be sure to run echo $TOKEN to validate. You can also use a .env file.

4. Start an Ngrok server in a different terminal window directed to your localhost and copy the https address it gives. (Port 3000 is default)

5. Paste you Ngrok address in your Webhook URL on development.chatshipper.com

6. After following the above steps, run 'npm run dev' in the project directory where you exported the token and turn on your webhook. You should see a GET request coming in on Ngrok and being passed to your application.

7. You can now talk to your bot on development.chatshipper.com by starting a new conversation with your bot.

