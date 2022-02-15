/**
 * Copyright (C) 2022 OFA Project
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

require('./setup');

const { Intents } = require('discord.js');
const { container, SapphireClient, LogLevel } = require('@sapphire/framework');

const colorette = require('colorette');

const config = require('./config.json');

const client = new SapphireClient({
	defaultPrefix: config.prefix,

	presence: {
		activities: [
			{
				name: "comment s'améliorer",
				type: 'WATCHING'
			}
		]
	},

	logger: {
		// TODO: Si dev mode LogLevel.Debug
		level: LogLevel.Info
	},

	intents: new Intents([Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES])
});

// Processus principal
(async () => {
	try {
		// Connecte le client à la passerelle de Discord
		await client.login().then((token) => container.logger.info(`${colorette.yellow(client.user.username)} connecté !`));
	} catch (error) {
		container.logger.error(error);
		client.destroy();
		process.exit(1);
	}
})();
