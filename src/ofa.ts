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

import './setup';

import { LogLevel, container } from '@sapphire/framework';

import { Intents } from 'discord.js';
import { OFAClient } from './lib/OFAClient';
import { Player } from 'discord-player';
import config from '../config.json';
import { yellow } from 'colorette';

// Client Discord
const client = new OFAClient({
	defaultPrefix: config.prefix,

	presence: {
		// TODO: Si dev mode 'dnd'
		status: 'online',
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

	intents: new Intents([Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES])
});

// Client musique
const player = new Player(client);
client.player = player;

// Processus principal
(async () => {
	try {
		// Connecte le client à la passerelle de Discord
		await client.login().then(() => container.logger.info(`${yellow(client.user?.username ?? '')} connecté !`));
	} catch (error) {
		container.logger.error(error);
		client.destroy();
		process.exit(1);
	}
})();
