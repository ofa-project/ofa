import { join } from 'node:path';
import { redBright } from 'colorette';
import { Logger } from '@sapphire/plugin-logger';
import { OFAClusterManager } from '#lib/cluster-manager';
import { rootFolderPath } from '#utils/constants';
import type { Cluster } from 'discord-hybrid-sharding';

const logger = new Logger();
const manager = new OFAClusterManager(join(rootFolderPath, 'worker.js'));

(async () => {
	manager.on('clusterCreate', (cluster: Cluster) => {
		logger.info(`Cluster ${redBright(cluster.id)} was created`);
	});

	manager.spawn();
})();
