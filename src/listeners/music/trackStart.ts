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

import { Listener, ListenerOptions, container } from '@sapphire/framework';
import type { Queue, Track } from 'discord-player';

import { ApplyOptions } from '@sapphire/decorators';
import type { Message } from 'discord.js';
import { send } from '@sapphire/plugin-editable-commands';

@ApplyOptions<ListenerOptions>({
	emitter: container.client.player,
	event: 'trackStart'
})
export class UserListener extends Listener {
	public async run(queue: Queue<Message>, track: Track) {
		let message = queue.metadata;

		if (message) await send(message, `En ce moment: **${track.title}**`);
	}
}
