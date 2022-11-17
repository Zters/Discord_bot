import dotenv from "dotenv";

dotenv.config();
import {readdirSync, unlink} from "fs"
import { Client, Collection, GatewayIntentBits } from "discord.js"
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
readdirSync("../events").forEach(async file => {
    const event = await import(`../events/${file}`).then(m => m.default)
    event(client) 
})
client.commands = new Collection()
readdirSync("commands").forEach(category =>{
	readdirSync(`commands/${category}`).forEach( file =>{

		console.log(file)
	})
})
client.login(TOKEN)
