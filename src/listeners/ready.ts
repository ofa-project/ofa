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

import { Events, Listener, ListenerOptions } from '@sapphire/framework';

import { ApplyOptions } from '@sapphire/decorators';

@ApplyOptions<ListenerOptions>({
	event: Events.ClientReady,
	once: true
})
export class UserListener extends Listener {
	public async run() {
		const { client, logger } = this.container;
		const stores = [...client.stores.values()];

		for (const store of stores) logger.info(`Chargé: ${store.size.toString().padEnd(3, '')} ${store.name}`);
	}
}
