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

import { Events, Listener, ListenerOptions, UnknownCommandPayload } from '@sapphire/framework';

import { ApplyOptions } from '@sapphire/decorators';
import fl from 'fastest-levenshtein';
import { send } from '@sapphire/plugin-editable-commands';

@ApplyOptions<ListenerOptions>({
	event: Events.UnknownCommand,
	once: true
})
class UserEvent extends Listener {
	public async run({ message, commandName }: UnknownCommandPayload) {
		const { client } = this.container;

		const commandList = [...client.stores.get('commands').values()].map((command) => command.name);
		const closestCommand = fl.closest(commandName, commandList);

		return await send(message, `La commande \`${commandName}\` est inconnue. Peut être vouliez vous dire \`${closestCommand}\` ?`);
	}
}

exports.UserEvent = UserEvent;
