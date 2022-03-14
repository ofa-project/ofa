import coffeefuck from 'coffeefuck';
import { ApplyOptions } from '@sapphire/decorators';
import { SubCommandPluginCommand } from '@sapphire/plugin-subcommands';
import { sendLocalized } from '@sapphire/plugin-i18next';
import { second } from '#utils/time';
import { Message, MessageEmbed } from 'discord.js';
import type { SubCommandPluginCommandOptions } from '@sapphire/plugin-subcommands';
import { Args } from '@sapphire/framework';

@ApplyOptions<SubCommandPluginCommandOptions>({
	aliases: ['bf'],
	cooldownDelay: second(5),
	subCommands: ['exec']
})
export default class extends SubCommandPluginCommand {
	public async exec(message: Message, args: Args) {
		const instructions = await args.rest('string');
		// @ts-ignore
		const result = await coffeefuck(instructions, { size: instructions.length, async: true });

		let parsedResult = '';
		result.output.forEach((asciiCode: Number) => {
			//@ts-ignore
			parsedResult += String.fromCharCode(asciiCode);
		});

		const embed = new MessageEmbed()
        .setColor('#000000')
        .addField('Output', parsedResult.slice(0, -1))
        .setFooter('Powered by coffeefuck - https://www.npmjs.com/package/coffeefuck');

		message.reply({ embeds: [embed] });
	}
}
