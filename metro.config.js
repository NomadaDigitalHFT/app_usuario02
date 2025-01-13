const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
    const defaultConfig = await getDefaultConfig();
    defaultConfig.resolver.assetExts.push('css');
    return defaultConfig;
})();
