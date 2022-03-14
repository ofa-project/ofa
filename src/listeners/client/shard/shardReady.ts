import { ApplyOptions } from '@sapphire/decorators';
import { container, Events, Listener } from '@sapphire/framework';
import { magentaBright } from 'colorette';
import type { ListenerOptions } from '@sapphire/framework';

const client = container.client;
const logger = client.logger;

@ApplyOptions<ListenerOptions>({
	event: Events.ShardReady,
	once: true
})
export default class extends Listener {
	public async run(shardID: number) {
		logger.info(`Shard ${magentaBright(shardID)} was ready`);
	}
}
