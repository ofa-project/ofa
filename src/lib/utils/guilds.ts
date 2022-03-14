import type { Client } from 'discord.js';

/**
 * Retrieves the current guild number.
 * @param {Client} client A Discord client.
 * @returns {number} Number of guilds.
 */
export function getCurrentNumberOfGuilds(client: Client) {
	return [...client.guilds.cache.values()].length;
}
