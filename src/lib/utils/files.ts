import { normalize } from 'node:path';
import { parse } from 'yaml';
import { readFileSync } from 'node:fs';

/**
 * Parse a YAML file to a JSON object.
 * @param {string} path Path to a `.yaml` file.
 * @returns {Object} Parsed JSON.
 */
 export function parseYamlFile(path: string): Object {
	return parse(readFileSync(normalize(path), { encoding: 'utf-8' }));
}
