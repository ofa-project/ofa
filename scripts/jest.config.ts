import type { Config } from '@jest/types';

export default (): Config.InitialOptions => ({
	displayName: 'unit test',
	preset: 'ts-jest',

	testEnvironment: 'node',
	testRunner: 'jest-circus/runner',
	testMatch: ['<rootDir>/../tests/**/*.test.ts'],

	globals: {
		'ts-jest': {
			tsconfig: '<rootDir>/../tests/tsconfig.json'
		}
	}
});
