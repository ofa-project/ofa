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

import '@sapphire/plugin-logger/register';
import '@sapphire/plugin-editable-commands/register';

import { container } from '@sapphire/framework';
import { createColors } from 'colorette';
import http from 'http';

// Active Colorette
createColors({ useColor: true });

// Créer un server HTTP, sinon l'app Heroku crash
const port = process.env.PORT || 3000;

http.createServer().listen(port, () => container.logger.info(`Serveur HTTP ouvert sur le port ${port}`));
