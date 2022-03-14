import { Client as ClusterClient, data as clusterData } from 'discord-hybrid-sharding';
import { LogLevel, SapphireClient } from '@sapphire/framework';
import { mergeObjects } from '@sapphire/utilities';
import { ofaClientConfig } from '#lib/configs';
import { Player as PlayerClient } from 'discord-player';
import type { PlayerOptions as PlayerClientOptions } from 'discord-player';

export class OFAClient extends SapphireClient {
	public cluster: ClusterClient;
	public player: PlayerClient;

	public constructor() {
		super(
			// @ts-ignore
			mergeObjects(ofaClientConfig, {
				logger: {
					level: LogLevel.Info
				},

				shardCount: clusterData.TOTAL_SHARDS,
				shards: clusterData.SHARD_LIST
			})
		);

		// Set the Discord bot token in the env.
		process.env.DISCORD_TOKEN = this.options.token;

		this.cluster = new ClusterClient(this);
		this.player = new PlayerClient(this, this.options.player);
	}
}

declare module 'discord.js' {
	export interface ClientOptions {
		player?: PlayerClientOptions;
		token: string;
	}
}

declare module '@sapphire/framework' {
	export interface SapphireClient {
		cluster: ClusterClient;
		player: PlayerClient;
	}
}
