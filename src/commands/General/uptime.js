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

const ms = require('ms');

class UserCommand extends Command {
	constructor(context, options) {
		super(context, {
			...options,
			description: 'combien de temps je suis lancé'
		});
	}

	async messageRun(message) {
		const { client } = this.container;

		return await send(message, `Je suis en vie depuis \`${ms(client.uptime, { long: true })}\``);
	}
}

exports.UserCommand = UserCommand;
