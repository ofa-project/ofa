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

import { Command, CommandOptions } from '@sapphire/framework';
import { reply, send } from '@sapphire/plugin-editable-commands';

import { ApplyOptions } from '@sapphire/decorators';
import type { Args } from '@sapphire/framework';
import type { Message } from 'discord.js';
import { UserMustBeInVoiceChannel } from '../../lib/utils/decorators';

@ApplyOptions<CommandOptions>({
	description: 'Joue une musique'
})
export class UserCommand extends Command {
	@UserMustBeInVoiceChannel()
	public async messageRun(message: Message, args: Args) {
		let {
			client: { player }
		} = this.container;

		let queue = player.createQueue(message.guild, {
			metadata: {
				channel: message.channel
			}
		});

		try {
			if (!queue.connection) await queue.connect(message.member.voice.channel);
		} catch {
			queue.destroy();
			return await reply(message, 'Impossible de rejoindre votre canal vocal');
		}

		let tracks = await player.search(args.rest('string'), {
			requestedBy: message.author
		});

		let track = tracks.tracks[0];

		if (!track) return await reply(message, `La track **${args.rest('string')}** n'a pas été trouvée`);

		queue.play(track);

		return await send(message, `Chargement de la track ${track.title}...`);
	}
}
