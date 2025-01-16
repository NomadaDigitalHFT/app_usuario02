const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.resolver.assetExts = config.resolver.assetExts.filter((ext) => ext !== "svg");
  config.resolver.assetExts.push("ttf", "otf", "png", "jpg", "jpeg");
  config.resolver.sourceExts.push("jsx", "js", "json", "ts", "tsx", "svg");

  config.transformer = {
    ...config.transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  return config;
})();
