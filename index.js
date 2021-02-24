const Discord = require('discord.js');

// Embed Maker Function
// embedMaker({ title: String, description: String, author: String, authorImage: String, authorLink: String, footer: String, footerImage: String, color: String, thumbnail: String, link: String, image: String, timestamp: Boolean, type: String <'w', 'x', 's'>, fields: Array: { name: String, value: String, inline: Boolean } })
function embedMaker(options) {
	//
	// Set Embed Color
	let embedColor;
	if (options.type) {
		if (
			options.type.toLowerCase() === 'error' ||
			options.type.toLowerCase() === 'err' ||
			options.type.toLowerCase() === 'e' ||
			options.type.toLowerCase() === 'x'
		) {
			embedColor = '#ff6358';
		} else if (
			options.type.toLowerCase() === 'success' ||
			options.type.toLowerCase() === 'pass' ||
			options.type.toLowerCase() === 's'
		) {
			embedColor = '#3ad282';
		} else if (
			options.type.toLowerCase() === 'warning' ||
			options.type.toLowerCase() === 'warn' ||
			options.type.toLowerCase() === 'w'
		) {
			embedColor = '#e0a24a';
		} else {
			embedColor = options.color;
		}
	}

	// Create Embed
	const embed = new Discord.MessageEmbed();

	// Manipulate Embed
	if (embedColor) embed.setColor(embedColor);
	if (options.color) embed.setColor(options.color);
	if (options.title) embed.setTitle(options.title);
	if (options.description) embed.setDescription(options.description);
	if (options.link) embed.setURL(options.link);
	if (options.thumbnail) embed.setThumbnail(options.thumbnail);
	if (options.image) embed.setImage(options.image);

	// Timestamp
	if (options.timestamp === true) embed.setTimestamp();

	// Author
	if (options.authorImage && options.author && options.authorLink) {
		embed.setAuthor(options.author, options.authorImage, options.authorLink);
	} else if (options.authorImage && options.author) {
		embed.setAuthor(options.author, options.authorImage);
	} else if (options.author) {
		embed.setAuthor(options.author);
	}

	// Footer
	if (options.footerImage && options.footer) {
		embed.setFooter(options.footer, options.footerImage);
	} else if (options.footer) {
		embed.setFooter(options.footer);
	}

	// Fields
	options.fields.forEach((field) => {
		embed.addField(field.name, field.value, field.inline);
	});

	// Return Embed
	return embed;
}

//
// reactionConfirm()

module.exports.embedMaker = embedMaker;
