import { clusterManagerConfig, ofaClientConfig } from '#lib/configs';
import { mergeObjects } from '@sapphire/utilities';
import { Manager as ClusterManager } from 'discord-hybrid-sharding';

export class OFAClusterManager extends ClusterManager {
	/**
	 * @param {string} file
	 */
	public constructor(file: string) {
		// @ts-ignore
		super(file, mergeObjects(clusterManagerConfig, { token: ofaClientConfig.token }));
	}
}

declare module 'discord-hybrid-sharding' {
	export interface ClusterManagerOptions {
		execArgv?: string[];
		mode?: ClusterManagerMode;
		shardArgs?: string[];
		shardList?: number[] | 'auto';
		shardsPerClusters?: number;
		respawn?: boolean;
		keepAlive?: keepAliveOptions;
		token?: string;
		totalClusters?: number | 'auto';
		totalShards?: number | 'auto';
	}
}
