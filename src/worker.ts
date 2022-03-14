import '#lib/setup';

import { cyan, red } from 'colorette';
import { OFAClient } from '#lib/client';

const client = new OFAClient();
const logger = client.logger;

(async () => {
	client
		.login()
		.then(() => logger.info(`${cyan(`CLUSTER ${red(client.cluster.id)}`)} - Websocket connection was established to the Discord gateway`));
})();
