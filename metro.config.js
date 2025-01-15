const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.transformer = {
    ...config.transformer,
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
  };

  config.resolver = {
    ...config.resolver,
    assetExts: config.resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...config.resolver.sourceExts, "svg", "jsx", "ts", "tsx"],
  };

  return config;
})();
