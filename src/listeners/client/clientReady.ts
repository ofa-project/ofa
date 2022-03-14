import { ApplyOptions } from '@sapphire/decorators';
import { container, Events, Listener } from '@sapphire/framework';
import { cyan, red } from 'colorette';
import { getCurrentNumberOfGuilds } from '#utils/guilds';
import type { ListenerOptions } from '@sapphire/framework';

const client = container.client;
const logger = client.logger;

@ApplyOptions<ListenerOptions>({
	event: Events.ClientReady,
	once: true
})
export default class extends Listener {
	public async run() {
		const totalGuilds = getCurrentNumberOfGuilds(client);

		logger.info(`${cyan(`CLUSTER ${red(client.cluster.id)}`)} - I'm ready with ${totalGuilds} guild${totalGuilds > 1 ? 's' : ''}! 🚀`);
		if (client.cluster.id + 1 === client.cluster.count) logger.info('All clusters was ready');
	}
}
