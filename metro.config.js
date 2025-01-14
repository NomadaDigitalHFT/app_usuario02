const { getDefaultConfig } = require('expo/metro-config');

module.exports = (async () => {
  const defaultConfig = await getDefaultConfig(__dirname);
  const { resolver } = defaultConfig;

  return {
    ...defaultConfig,
    resolver: {
      assetExts: [...defaultConfig.resolver.assetExts, 'css', 'png', 'jpg', 'jpeg'],
      sourceExts: [...defaultConfig.resolver.sourceExts, 'js', 'jsx', 'ts', 'tsx'],
    },
  };
})();
