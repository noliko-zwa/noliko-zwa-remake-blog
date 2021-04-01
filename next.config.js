/* eslint-env node */
/* eslint-disable @typescript-eslint/no-var-requires */

module.exports = {
	webpack: (config, { isServer }) => {
		if (!isServer) {
			config.node = { fs: 'empty' };
		}
		return config;
	},
};
