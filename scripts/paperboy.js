import "dotenv/config";
import fetch from "node-fetch";

// from Discord example repo
async function DiscordRequest(endpoint, options) {
    // append endpoint to root API URL
    const url = 'https://discord.com/api/v9/' + endpoint;
    // Stringify payloads
    if (options.body) options.body = JSON.stringify(options.body);
    // Use node-fetch to make requests
    const res = await fetch(url, {
      headers: {
        Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
        'Content-Type': 'application/json; charset=UTF-8',
      },
      ...options
    });
    // throw API errors
    if (!res.ok) {
      const data = await res.json();
      console.log(res.status);
      throw new Error(JSON.stringify(data));
    }
    // return original response
    return res;
};

const endpoint = `channels/${process.env.CHANNEL_ID}/messages`;

console.log(endpoint);

DiscordRequest(endpoint, {
    method: "POST",
    body: {
        content: "Hello world"
    }
})