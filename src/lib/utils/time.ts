/**
 * Seconds to milliseconds.
 * @param {number} seconds
 * @returns {number}
 */
export function second(seconds: number): number {
	return seconds * 1000;
}

/**
 * Minutes to milliseconds.
 * @param {number} minutes
 * @returns {number}
 */
export function minute(minutes: number): number {
	return minutes * second(60);
}
