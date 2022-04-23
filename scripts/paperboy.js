import dotenv from "dotenv";
dotenv.config({path: "../.env"})
import fetch from "node-fetch";
import * as fs from "fs";
import matter from "gray-matter";
// var matter = import("gray-matter");

const post_path = process.env.INPUT_POST_PATH;

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

var file = fs.readFileSync(`../content/posts/${post_path}/index.md`, 'utf8');

file = matter(file)

const title = file["data"]["title"]
const description = file["data"]["description"]
const url = `https://untilitsnotfun.com/posts/${post_path}`

const issueCount = fs.readdirSync("../content/posts").length - 1;

const endpoint = `channels/${process.env.CHANNEL_ID}/messages`;

DiscordRequest(endpoint, {
    method: "POST",
    body: {
        content: `Issue ${issueCount} of Until It's Not Fun is out now! Read it at ${url}.\n**${title}**: ${description}`
    }
})