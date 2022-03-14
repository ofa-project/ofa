import { ApplyOptions } from '@sapphire/decorators';
import { Command } from '@sapphire/framework';
import { editLocalized, sendLocalized } from '@sapphire/plugin-i18next';
import { minute } from '#utils/time';
import type { CommandOptions } from '@sapphire/framework';
import type { Message } from 'discord.js';

@ApplyOptions<CommandOptions>({
	cooldownDelay: minute(5)
})
export default class extends Command {
	public async messageRun(message: Message) {
		const msg = await sendLocalized(message, 'commands/system:ping.pong');

		const clientPing = (msg.editedTimestamp || msg.createdTimestamp) - (message.editedTimestamp || message.createdTimestamp);
		const discordPing = Math.round(this.container.client.ws.ping);

		const clientPingPellet = this.getPingStatPellet(clientPing);
		const discordPingPellet = this.getPingStatPellet(discordPing);

		await editLocalized(msg, {
			keys: 'commands/system:ping.message',
			formatOptions: {
				clientPing: clientPing,
				clientPingPellet: clientPingPellet,
				discordPing: discordPing,
				discordPingPellet: discordPingPellet
			}
		});
	}

	public getPingStatPellet(ping: number): string | undefined {
		if (ping < 400) {
			return '🟢';
		} else if (ping < 750) {
			return '🟡';
		} else if (ping < 1000) {
			return '🟠';
		} else if (ping > 1000) {
			return '🔴';
		}
	}
}
