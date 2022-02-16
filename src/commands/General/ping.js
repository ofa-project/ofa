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

const { Command } = require('@sapphire/framework');
const { send } = require('@sapphire/plugin-editable-commands');

class UserCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
			description: 'ping pong'
		});
	}

	async messageRun(message) {
		const { client } = this.container;

		const msg = await send(message, 'Ping ?');

		const content = String.raw`
Pong 🏓
Latence: ${Math.round(client.ws.ping)}ms
Latence de l'API: ${msg.createdTimestamp - message.createdTimestamp}ms
        `;

		return await send(message, content);
	}
}

exports.UserCommand = UserCommand;
