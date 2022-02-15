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

const { Client, Intents } = require('discord.js');

const client = new Client({
	intents: new Intents([Intents.FLAGS.GUILDS])
});

// Processus principal
(async () => {
	try {
		// Connecte le client à la passerelle de Discord
		await client.login().then((token) => console.info(`${client.user.username} connecté !`));
	} catch (error) {
		console.error(error);
		client.destroy();
		process.exit(1);
	}
})();
