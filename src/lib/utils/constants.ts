import { join } from 'node:path';

// Folders
export const rootFolderPath: string = join(__dirname, '..', '..');
export const configsFolderPath: string = join(rootFolderPath, '..', 'configs');

// Files
export const clusterManagerConfigFilePath: string = join(configsFolderPath, 'cluster-manager.yaml');
export const ofaClientConfigFilePath: string = join(configsFolderPath, 'ofa-client.yaml');
