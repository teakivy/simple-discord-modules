# Simple Discord Modules

> A lightweight Node.js package to make creating discord.js components easier.

## Installation

```
npm install simple-discord-modules --save
```

## Usage

There are several functions made to make creating discord bots/components easier.

### embedMaker

embedMaker takes in properties, and results in a discord embed object.

```js
const SimpleDiscord = require('simple-discord-modules');

SimpleDiscord.embedMaker({ options });
```

`options` is a passable Object to embedMaker, you do not have to pass any option, when one is not present, it is left blank/default.

#### Options:

| Option      | Type    | Example                                  | Requires             |
| ----------- | ------- | ---------------------------------------- | -------------------- |
| title       | String  | "Embed Title"                            | -                    |
| description | String  | "Embed Description"                      | -                    |
| author      | String  | "Embed Author"                           | -                    |
| authorImage | String  | "Author Image URL"                       | author               |
| authorLink  | String  | "Author Link URL"                        | author & authorImage |
| footer      | String  | "Embed Footer                            | -                    |
| footerImage | String  | "Footer Image URL"                       | footer               |
| color       | String  | "#ffffff"                                | -                    |
| thumbnail   | String  | "Embed Thumbnail Image URL"              | -                    |
| image       | String  | "Embed Image URL"                        | -                    |
| link        | String  | "Embed Link URL"                         | -                    |
| timestamp   | Boolean | true                                     | -                    |
| fields      | Array   | [ { field_Options }, { field_Options } ] | -                    |

<br>

#### Field Options:

| Option | Type    | Example       | Required |
| ------ | ------- | ------------- | -------- |
| name   | String  | "Field Name"  | Yes      |
| value  | String  | "Field Value" | Yes      |
| inline | Boolean | true          | No       |

<br>

If you dont know what these values mean, I would reccomend reading up on embeds [Here](https://discordjs.guide/popular-topics/embeds.html/)

## Examples

### embedMaker

```js
message.channel.send(
	SimpleDiscord.embedMaker({
		title: 'Embed Title',
		description: 'Embed Description!',
		color: '#26d1e0',
		fields: [
			{ name: 'Field 1', value: 'Value 1', inline: true },
			{ name: 'Field 2', value: 'Value 2', inline: true },
			{ name: 'Field 3', value: 'Value 3' },
		],
	})
);
```
