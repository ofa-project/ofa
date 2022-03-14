import { clusterManagerConfigFilePath, ofaClientConfigFilePath } from '#utils/constants';
import { parseYamlFile } from '#utils/files';
import type { SapphireClientOptions as OFAClientOptions } from '@sapphire/framework';
import type { ClusterManagerOptions } from 'discord-hybrid-sharding';

/**
 * The config for the cluster manager.
 */
export const clusterManagerConfig: ClusterManagerOptions = parseYamlFile(clusterManagerConfigFilePath);

/**
 * The config for the OFA client.
 */
export const ofaClientConfig: OFAClientOptions = parseYamlFile(ofaClientConfigFilePath);
