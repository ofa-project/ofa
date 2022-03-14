import '#lib/setup';

import { cyan, red } from 'colorette';
import { OFAClient } from '#lib/client';

const client = new OFAClient();
const logger = client.logger;

// For dev
import { container } from '@sapphire/framework';
container.i18n.fetchLanguage = () => 'fr-FR';

(async () => {
	client
		.login()
		.then(() => logger.info(`${cyan(`CLUSTER ${red(client.cluster.id)}`)} - Websocket connection was established to the Discord gateway`));
})();
